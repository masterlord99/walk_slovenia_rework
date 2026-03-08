// js/app.js — Slovenia Hotel Trip Showcase Engine
// View manager, image cycling, hash router, scroll reveal

(function () {
  'use strict';

  // ─── State ────────────────────────────────────────────────
  let currentView = null;   // 'home' | 'level' | 'category' | 'trip' | 'hotel'
  let currentRoute = {};    // { levelId, categoryId, tripId, hotelSection }
  const cyclers = {};       // active image cycling intervals keyed by hero element id
  let revealObserver = null;

  // ─── DOM refs ─────────────────────────────────────────────
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const views = {
    home: $('#viewHome'),
    level: $('#viewLevel'),
    category: $('#viewCategory'),
    trip: $('#viewTrip'),
    hotel: $('#viewHotel'),
  };

  const header = $('#siteHeader');
  const breadcrumb = $('#breadcrumb');
  const loadingOverlay = $('#loadingOverlay');

  // ─── Image Cycling Engine ─────────────────────────────────
  // Two background layers alternate via crossfade with Ken Burns

  function startImageCycling(heroEl, images, interval = 6000) {
    if (!heroEl || !images || images.length === 0) return null;
    const id = heroEl.id || heroEl.closest('.view')?.id || Math.random();

    // Stop any existing cycler for this hero
    stopImageCycling(id);

    const bgA = $('.hero-bg-a', heroEl);
    const bgB = $('.hero-bg-b', heroEl);
    if (!bgA || !bgB) return null;

    let currentIndex = 0;
    let useA = true;

    // Set first image
    setHeroBg(bgA, images[0]);
    bgA.classList.add('active', 'ken-burns');
    bgB.classList.remove('active', 'ken-burns');

    // Preload next
    if (images.length > 1) {
      preloadImage(images[1]);
    }

    // Update dots if present
    updateDots(heroEl, currentIndex, images.length);

    // Crossfade to a specific image index
    function goToImage(idx) {
      if (idx === currentIndex || idx < 0 || idx >= images.length) return;
      currentIndex = idx;
      const nextIndex = (currentIndex + 1) % images.length;
      const target = useA ? bgB : bgA;
      const other = useA ? bgA : bgB;

      target.classList.remove('ken-burns');
      void target.offsetWidth;
      setHeroBg(target, images[currentIndex]);
      target.classList.add('active', 'ken-burns');
      other.classList.remove('active');

      preloadImage(images[nextIndex]);
      updateDots(heroEl, currentIndex, images.length);
      useA = !useA;

      // Reset the auto-cycle timer
      if (images.length > 1) {
        clearInterval(cyclers[id]);
        cyclers[id] = setInterval(tick, interval);
      }
    }

    if (images.length <= 1) return { goToImage };

    const tick = () => {
      const nextIdx = (currentIndex + 1) % images.length;
      goToImage(nextIdx);
    };

    cyclers[id] = setInterval(tick, interval);
    return { goToImage };
  }

  function stopImageCycling(id) {
    if (cyclers[id]) {
      clearInterval(cyclers[id]);
      delete cyclers[id];
    }
  }

  function stopAllCycling() {
    for (const id of Object.keys(cyclers)) {
      clearInterval(cyclers[id]);
      delete cyclers[id];
    }
  }

  function setHeroBg(el, url) {
    el.style.backgroundImage = `url(${url})`;
    // Fallback gradient if image fails
    const img = new Image();
    img.onerror = () => {
      el.classList.add('img-fallback');
    };
    img.src = url;
  }

  function preloadImage(url) {
    const img = new Image();
    img.src = url;
  }

  function updateDots(heroEl, activeIndex, count) {
    const dotsContainer = $('.hero-dots', heroEl);
    if (!dotsContainer) return;
    const dots = $$('.hero-dot', dotsContainer);
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeIndex);
    });
  }

  function createDots(container, count, onClick) {
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('span');
      dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
      if (onClick) {
        dot.addEventListener('click', () => onClick(i));
      }
      container.appendChild(dot);
    }
  }

  // ─── Router ───────────────────────────────────────────────

  function parseHash(hash) {
    const clean = (hash || '#/').replace(/^#\/?/, '').replace(/\/$/, '');
    if (!clean) return { view: 'home' };

    const parts = clean.split('/');
    if (parts[0] === 'hotel' && parts.length === 2) return { view: 'hotel', hotelSection: parts[1] };
    if (parts.length === 1) return { view: 'level', levelId: parts[0] };
    if (parts.length === 2) return { view: 'category', levelId: parts[0], categoryId: parts[1] };
    if (parts.length === 3) return { view: 'trip', levelId: parts[0], categoryId: parts[1], tripId: parts[2] };
    return { view: 'home' };
  }

  function navigate(hash) {
    if (window.location.hash === hash) {
      // Force re-render even if hash hasn't changed
      handleRoute();
    } else {
      window.location.hash = hash;
    }
  }

  function goBack() {
    const parsed = parseHash(window.location.hash);
    switch (parsed.view) {
      case 'trip':
        navigate(`#/${parsed.levelId}/${parsed.categoryId}`);
        break;
      case 'category':
        navigate(`#/${parsed.levelId}`);
        break;
      case 'level':
      case 'hotel':
        navigate('#/');
        break;
      default:
        break;
    }
  }

  function handleRoute() {
    const parsed = parseHash(window.location.hash);
    const { view, levelId, categoryId, tripId, hotelSection } = parsed;

    // Validate route data exists
    if (view === 'hotel') {
      if (!findHotelSection(hotelSection)) { navigate('#/'); return; }
    }
    if (view === 'level' || view === 'category' || view === 'trip') {
      if (!findLevel(levelId)) { navigate('#/'); return; }
    }
    if (view === 'category' || view === 'trip') {
      if (!findCategory(levelId, categoryId)) { navigate(`#/${levelId}`); return; }
    }
    if (view === 'trip') {
      if (!findTrip(levelId, categoryId, tripId)) { navigate(`#/${levelId}/${categoryId}`); return; }
    }

    currentRoute = { levelId, categoryId, tripId, hotelSection };
    switchView(view);
  }

  // ─── View Transitions ────────────────────────────────────

  function switchView(newView) {
    if (currentView === newView && areRoutesEqual(newView)) return;

    const outgoing = currentView ? views[currentView] : null;
    const incoming = views[newView];

    // Stop all cycling during transition
    stopAllCycling();

    if (outgoing && outgoing !== incoming) {
      outgoing.classList.add('fade-out');
      outgoing.addEventListener('animationend', function handler() {
        outgoing.removeEventListener('animationend', handler);
        outgoing.classList.remove('active', 'visible', 'fade-out');
        showIncoming(incoming, newView);
      }, { once: true });
    } else {
      if (outgoing) {
        outgoing.classList.remove('active', 'visible');
      }
      showIncoming(incoming, newView);
    }

    currentView = newView;
  }

  let _lastRenderedRoute = '';

  function areRoutesEqual(view) {
    const key = `${view}:${currentRoute.levelId || ''}:${currentRoute.categoryId || ''}:${currentRoute.tripId || ''}:${currentRoute.hotelSection || ''}`;
    if (key === _lastRenderedRoute) return true;
    return false;
  }

  function showIncoming(el, view) {
    const routeKey = `${view}:${currentRoute.levelId || ''}:${currentRoute.categoryId || ''}:${currentRoute.tripId || ''}:${currentRoute.hotelSection || ''}`;
    _lastRenderedRoute = routeKey;

    // Render content for this view
    renderView(view);

    // Show
    el.classList.add('active');
    // Scroll to top before fade-in
    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      el.classList.add('fade-in', 'visible');
      el.addEventListener('animationend', function handler() {
        el.removeEventListener('animationend', handler);
        el.classList.remove('fade-in');
        // Setup scroll reveal for newly rendered cards
        setupScrollReveal();
      }, { once: true });
    });

    // Update breadcrumb
    updateBreadcrumb(view);
  }

  // ─── View Rendering ──────────────────────────────────────

  function renderView(view) {
    switch (view) {
      case 'home': renderHome(); break;
      case 'level': renderLevel(); break;
      case 'category': renderCategory(); break;
      case 'trip': renderTrip(); break;
      case 'hotel': renderHotel(); break;
    }
  }

  // — Home View —
  function renderHome() {
    const heroEl = $('#heroHome');
    startImageCycling(heroEl, DATA.site.heroImages);

    const container = $('#levelCards');
    container.className = 'level-cards reveal-stagger';
    container.innerHTML = DATA.levels.map((level) => {
      const tripCount = level.categories.reduce((sum, c) => sum + c.trips.length, 0);
      const cardImage = level.heroImages[0];
      return `
        <div class="level-card reveal" data-href="#/${level.id}">
          <div class="level-card-image" style="background-image: url(${cardImage})"></div>
          <div class="level-card-gradient"></div>
          <div class="level-card-content">

            <div class="level-card-level">Level ${level.level}</div>
            <h3 class="level-card-title">${level.title}</h3>
            <p class="level-card-subtitle">${level.subtitle}</p>
            <span class="level-card-count">${tripCount} experiences</span>
          </div>
        </div>
      `;
    }).join('');

    attachCardClicks(container);

    // Hotel cards
    const hotelContainer = $('.hotel-cards');
    if (hotelContainer) attachCardClicks(hotelContainer);
  }

  // — Hotel Detail View —
  function renderHotel() {
    const section = findHotelSection(currentRoute.hotelSection);
    if (!section) return;

    $('#hotelLabel').textContent = 'The Monastery';
    $('#hotelTitle').textContent = section.title;

    // Hero images + dots
    const heroEl = $('#heroHotel');
    const dotsContainer = $('#hotelDots');
    const cycler = startImageCycling(heroEl, section.images);
    createDots(dotsContainer, section.images.length, (i) => {
      if (cycler) cycler.goToImage(i);
    });

    // Back link
    const backLink = $('#hotelBackLink');
    backLink.querySelector('span').textContent = 'Back';
    backLink.onclick = () => navigate('#/');

    // Photo gallery
    const galleryContainer = $('#hotelGallery');
    galleryContainer.innerHTML = section.images.map((imgUrl, i) => `
      <div class="gallery-item reveal" data-index="${i}">
        <img src="${imgUrl}" alt="${section.title} — photo ${i + 1}" loading="lazy">
      </div>
    `).join('');

    // Click gallery image → scroll to top and switch hero
    $$('.gallery-item', galleryContainer).forEach((item) => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.index, 10);
        if (cycler) cycler.goToImage(idx);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  // — Level View —
  function renderLevel() {
    const level = findLevel(currentRoute.levelId);
    if (!level) return;

    $('#levelLabel').textContent = `Level ${level.level}`;
    $('#levelTitle').textContent = level.title;
    $('#levelSubtitle').textContent = level.subtitle;

    const heroEl = $('#heroLevel');
    startImageCycling(heroEl, level.heroImages);

    // Back link
    const backLink = $('#levelBackLink');
    backLink.onclick = () => navigate('#/');

    const container = $('#categoryCards');
    container.className = 'category-cards reveal-stagger';
    container.innerHTML = level.categories.map((cat) => {
      const cardImage = cat.heroImages[0];
      return `
        <div class="category-card reveal" data-href="#/${level.id}/${cat.id}">
          <div class="category-card-image-wrapper">
            <div class="category-card-image" style="background-image: url(${cardImage})"></div>
          </div>
          <div class="category-card-body">

            <h3 class="category-card-title">${cat.title}</h3>
            <p class="category-card-count">${cat.trips.length} experience${cat.trips.length !== 1 ? 's' : ''}</p>
            <span class="category-card-arrow">Explore <span>&rarr;</span></span>
          </div>
        </div>
      `;
    }).join('');

    attachCardClicks(container);
  }

  // — Category View —
  function renderCategory() {
    const level = findLevel(currentRoute.levelId);
    const category = findCategory(currentRoute.levelId, currentRoute.categoryId);
    if (!level || !category) return;

    $('#categoryLabel').textContent = `${level.title} — Level ${level.level}`;
    $('#categoryTitle').textContent = category.title;

    const heroEl = $('#heroCategory');
    startImageCycling(heroEl, category.heroImages);

    // Back link
    const backLink = $('#categoryBackLink');
    backLink.querySelector('span').textContent = level.title;
    backLink.onclick = () => navigate(`#/${level.id}`);

    const container = $('#tripCards');
    container.className = 'trip-cards reveal-stagger';
    container.innerHTML = category.trips.map((trip) => {
      const cardImage = trip.images[0];
      const preview = trip.description.substring(0, 150) + '...';
      const metaHtml = trip.metadata
        ? trip.metadata.slice(0, 3).map(m => `<span class="trip-card-badge">${m}</span>`).join('')
        : '';
      return `
        <div class="trip-card reveal" data-href="#/${level.id}/${category.id}/${trip.id}">
          <div class="trip-card-image-wrapper">
            <div class="trip-card-image" style="background-image: url(${cardImage})"></div>
          </div>
          <div class="trip-card-body">

            <h3 class="trip-card-title">${trip.title}</h3>
            <p class="trip-card-preview">${preview}</p>
            ${metaHtml ? `<div class="trip-card-meta">${metaHtml}</div>` : ''}
          </div>
        </div>
      `;
    }).join('');

    attachCardClicks(container);
  }

  // — Trip Detail View —
  function renderTrip() {
    const level = findLevel(currentRoute.levelId);
    const category = findCategory(currentRoute.levelId, currentRoute.categoryId);
    const trip = findTrip(currentRoute.levelId, currentRoute.categoryId, currentRoute.tripId);
    if (!level || !category || !trip) return;

    $('#tripLabel').textContent = `${category.title}`;
    $('#tripTitle').textContent = trip.title;

    // Hero images + dots (clickable)
    const heroEl = $('#heroTrip');
    const dotsContainer = $('#tripDots');
    const cycler = startImageCycling(heroEl, trip.images);
    createDots(dotsContainer, trip.images.length, (i) => {
      if (cycler) cycler.goToImage(i);
    });

    // Back link
    const backLink = $('#tripBackLink');
    backLink.querySelector('span').textContent = category.title;
    backLink.onclick = () => navigate(`#/${level.id}/${category.id}`);

    // Metadata badges
    const metaContainer = $('#tripMetadata');
    if (trip.metadata && trip.metadata.length > 0) {
      metaContainer.innerHTML = trip.metadata
        .map(m => `<span class="trip-meta-badge">${m}</span>`)
        .join('');
    } else {
      metaContainer.innerHTML = '';
    }

    // Description
    $('#tripDescription').innerHTML = `<p>${trip.description}</p>`;

    // Photo gallery
    const galleryContainer = $('#tripGallery');
    galleryContainer.innerHTML = trip.images.map((imgUrl, i) => `
      <div class="gallery-item reveal" data-index="${i}">
        <img src="${imgUrl}" alt="${trip.title} — photo ${i + 1}" loading="lazy">
      </div>
    `).join('');

    // Click gallery image → scroll to top and switch hero to that image
    $$('.gallery-item', galleryContainer).forEach((item) => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.index, 10);
        if (cycler) cycler.goToImage(idx);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    // Prev/Next navigation
    const { prev, next } = getAdjacentTrips(currentRoute.levelId, currentRoute.categoryId, currentRoute.tripId);
    const navContainer = $('#tripNav');

    let navHtml = '';
    if (prev) {
      navHtml += `
        <div class="trip-nav-link prev" data-href="#/${level.id}/${category.id}/${prev.id}">
          <div class="trip-nav-direction">&larr; Previous</div>
          <div class="trip-nav-title">${prev.title}</div>
        </div>
      `;
    } else {
      navHtml += '<div></div>';
    }
    if (next) {
      navHtml += `
        <div class="trip-nav-link next" data-href="#/${level.id}/${category.id}/${next.id}">
          <div class="trip-nav-direction">Next &rarr;</div>
          <div class="trip-nav-title">${next.title}</div>
        </div>
      `;
    } else {
      navHtml += '<div></div>';
    }
    navContainer.innerHTML = navHtml;

    attachCardClicks(navContainer);
  }

  // ─── Card Click Handler ───────────────────────────────────

  function attachCardClicks(container) {
    const cards = $$('[data-href]', container);
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        navigate(card.dataset.href);
      });
    });
  }

  // ─── Breadcrumb ───────────────────────────────────────────

  function updateBreadcrumb(view) {
    const level = currentRoute.levelId ? findLevel(currentRoute.levelId) : null;
    const category = currentRoute.categoryId ? findCategory(currentRoute.levelId, currentRoute.categoryId) : null;
    const trip = currentRoute.tripId ? findTrip(currentRoute.levelId, currentRoute.categoryId, currentRoute.tripId) : null;

    let parts = [];

    if (view === 'hotel') {
      const section = findHotelSection(currentRoute.hotelSection);
      if (section) {
        parts.push({ label: 'The Monastery', href: null });
        parts.push({ label: section.title, href: null });
      }
    }
    if (view === 'level' && level) {
      parts.push({ label: level.title, href: null });
    }
    if (view === 'category' && level && category) {
      parts.push({ label: level.title, href: `#/${level.id}` });
      parts.push({ label: category.title, href: null });
    }
    if (view === 'trip' && level && category && trip) {
      parts.push({ label: level.title, href: `#/${level.id}` });
      parts.push({ label: category.title, href: `#/${level.id}/${category.id}` });
      parts.push({ label: trip.title, href: null });
    }

    if (parts.length === 0) {
      breadcrumb.innerHTML = '';
      return;
    }

    breadcrumb.innerHTML = parts.map((p, i) => {
      const sep = i > 0 ? '<span class="separator">/</span>' : '';
      if (p.href) {
        return `${sep}<a href="${p.href}">${p.label}</a>`;
      }
      return `${sep}<span class="current">${p.label}</span>`;
    }).join('');
  }

  // ─── Scroll Reveal ────────────────────────────────────────

  function setupScrollReveal() {
    // Clean up old observer
    if (revealObserver) revealObserver.disconnect();

    const targets = $$('.reveal:not(.revealed)');
    if (targets.length === 0) return;

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((t) => revealObserver.observe(t));
  }

  // ─── Header Scroll Effect ────────────────────────────────

  function setupHeaderScroll() {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ─── Keyboard Navigation ─────────────────────────────────

  function setupKeyboard() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        goBack();
      }
    });
  }

  // ─── Loading ──────────────────────────────────────────────

  function hideLoading() {
    loadingOverlay.classList.add('hidden');
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
    }, 600);
  }

  function waitForFirstImage() {
    const firstImage = DATA.site.heroImages[0];
    if (!firstImage) {
      hideLoading();
      return;
    }

    const img = new Image();
    img.onload = hideLoading;
    img.onerror = hideLoading;
    img.src = firstImage;

    // Safety timeout — don't block forever
    setTimeout(hideLoading, 4000);
  }

  // ─── Init ─────────────────────────────────────────────────

  function init() {
    setupHeaderScroll();
    setupKeyboard();

    // Listen for hash changes
    window.addEventListener('hashchange', handleRoute);

    // Initial route
    handleRoute();

    // Hide loading once first hero image loads
    waitForFirstImage();
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
