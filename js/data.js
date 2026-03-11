// js/data.js — Slovenia Hotel Trip Showcase Data
// 55 trips structured as JSON with hardcoded image paths

const DATA = {
  site: {
    title: 'Slovenia',
    subtitle: 'Walk Slovenia. Shown by locals. Seen by few.',
    heroImages: [
      'images/home/home-hero-1.jpg',
      'images/home/home-hero-2.jpg',
      'images/home/home-hero-3.jpg',
      'images/home/home-hero-4.jpg',
      'images/home/home-hero-5.jpg',
    ],
  },

  levels: [
    // ─── LEVEL 1 — Easy Activities ────────────────────────────
    {
      id: 'easy-activities',
      title: 'Easy Activities',
      subtitle: 'No special fitness required — perfect for all ages and abilities',
      level: 1,
      heroImages: [
        'images/easy-activities/easy-activities-hero-1.jpg',
        'images/easy-activities/lakes-valleys-and-nature/lake-bled/lake-bled-in-summer-photo.jpg',
        'images/easy-activities/underground-worlds/skocjan-caves/skocjan-caves.jpg',
        'images/easy-activities/castles-historic-towns/predjama-castle/Get-Lost-in-Wanderlust-2023-07-22T143947.385.jpg',
      ],
      categories: [
        {
          id: 'castles-historic-towns',
          title: 'Castles & Historic Towns',
          heroImages: [
            'images/easy-activities/castles-historic-towns/predjama-castle/Get-Lost-in-Wanderlust-2023-07-22T143947.385.jpg',
            'images/easy-activities/castles-historic-towns/ljubljana-castle/2020-10-21.jpg',
            'images/easy-activities/castles-historic-towns/celje-castle/dsc_1770vb.jpg',
            'images/easy-activities/castles-historic-towns/ptuj/Pasted%20image.png',
          ],
          trips: [
            {
              id: 'predjama-castle',
              title: 'Predjama Castle',
              description: `A medieval fortress built directly into a towering cliff face at the entrance of a cave. Inside, visitors discover the legend of the knight Erasmus, who defied the Habsburg army from his seemingly impregnable hideout. The castle's interplay of stone architecture with living rock makes it unlike any other castle in the country, and the clifftop setting offers wide views over the surrounding countryside.`,
              metadata: null,
              images: ['images/easy-activities/castles-historic-towns/predjama-castle/Get-Lost-in-Wanderlust-2023-07-22T143947.385.jpg'],
            },
            {
              id: 'ljubljana-castle',
              title: 'Ljubljana Castle',
              description: `Perched on a wooded hill directly above the Old Town, Ljubljana Castle offers sweeping panoramic views over the city and the surrounding Alps. Visitors can reach the top by funicular, on foot, or by tourist train. Inside, the castle complex hosts permanent exhibitions on Slovenian history, a virtual archaeology experience, and a viewing tower — making it both a cultural highlight and the best vantage point in the city.`,
              metadata: null,
              images: ['images/easy-activities/castles-historic-towns/ljubljana-castle/2020-10-21.jpg'],
            },
            {
              id: 'celje-castle',
              title: 'Celje Castle',
              description: `The largest castle ruin in Slovenia, set high on a hilltop above the town of Celje. The walk up rewards visitors with wide views over the surrounding valleys and a well-preserved medieval tower complex with informative exhibits. Celje itself, with its pleasant Old Town and Roman heritage, is well worth exploring before or after the castle visit.`,
              metadata: null,
              images: ['images/easy-activities/castles-historic-towns/celje-castle/dsc_1770vb.jpg'],
            },
            {
              id: 'ptuj',
              title: 'Ptuj — Slovenia\'s Oldest Town',
              description: `Slovenia's oldest recorded city, with roots stretching back to Roman times. A hilltop castle, a well-preserved medieval and Baroque Old Town, and a rich tradition of carnival festivities — the famous Kurentovanje — give Ptuj a depth and character that few Slovenian towns can match. Easy to explore entirely on foot, and a welcome alternative for visitors seeking history and culture away from the main tourist routes.`,
              metadata: null,
              images: ['images/easy-activities/castles-historic-towns/ptuj/Pasted%20image.png'],
            },
          ],
        },
        {
          id: 'city-life-and-culture',
          title: 'City Life & Culture',
          heroImages: [
            'images/easy-activities/city-life-and-culture/ljubljana-old-town/img-20160605-wa0126-largejpg.jpg',
            'images/easy-activities/city-life-and-culture/ljubljana-museums/narodnimuzej-ljubljana.jpg',
            'images/easy-activities/city-life-and-culture/metelkova-mesto/metelkova.jpg',
          ],
          trips: [
            {
              id: 'ljubljana-old-town',
              title: 'Ljubljana Old Town',
              description: `Ljubljana's Old Town is among Central Europe's most charming and walkable city centres. The banks of the emerald-green Ljubljanica River are lined with outdoor cafés and baroque architecture. Cross the famous Triple Bridge, browse the lively open-air Central Market, and soak up the relaxed, almost village-like atmosphere of a capital city that never feels overwhelming.`,
              metadata: null,
              images: ['images/easy-activities/city-life-and-culture/ljubljana-old-town/img-20160605-wa0126-largejpg.jpg'],
            },
            {
              id: 'ljubljana-museums',
              title: 'Ljubljana Museums',
              description: `Ljubljana punches well above its weight when it comes to museums and galleries. Top picks include the National Museum of Slovenia (archaeology and natural history), the Slovenian Ethnographic Museum (local culture and traditions), and the Museum of Modern Art. For something more unusual, the Museum of Illusions is a great choice for families. All are centrally located and easily combined with a walk through the Old Town.`,
              metadata: null,
              images: ['images/easy-activities/city-life-and-culture/ljubljana-museums/narodnimuzej-ljubljana.jpg'],
            },
            {
              id: 'metelkova-mesto',
              title: 'Metelkova Mesto & Museum of Contemporary Art',
              description: `Ljubljana's creative alternative quarter, Metelkova Mesto, was born from a former military barracks and has transformed into a vibrant hub of street art, independent galleries, and cultural spaces. Adjacent to it, the Museum of Contemporary Art Metelkova (MSUM) houses Slovenia's premier collection of international modern and contemporary art. A fascinating contrast to the classical museums of the Old Town.`,
              metadata: null,
              images: [
                'images/easy-activities/city-life-and-culture/metelkova-mesto/metelkova.jpg',
                'images/easy-activities/city-life-and-culture/metelkova-mesto/metelkova_.jpg',
              ],
            },
          ],
        },
        {
          id: 'underground-worlds',
          title: 'Underground Worlds',
          heroImages: [
            'images/easy-activities/underground-worlds/postojna-cave/postojna-caves.jpg',
            'images/easy-activities/underground-worlds/skocjan-caves/skocjan-caves.jpg',
            'images/easy-activities/underground-worlds/idrija-mercury-mine/idrija-mercury-mine-1.jpg',
          ],
          trips: [
            {
              id: 'postojna-cave',
              title: 'Postojna Cave',
              description: `Postojna stretches over 24 kilometres underground — a vast karst cave system of cathedral-like chambers. Visitors board a cave train that carries them deep into the mountain, followed by a guided walk past stalactites, stalagmites, and curtain formations of astonishing variety. The star resident is the olm — a blind, cave-dwelling amphibian found only in the Dinaric karst, sometimes called the "human fish."`,
              metadata: null,
              images: [
                'images/easy-activities/underground-worlds/postojna-cave/postojna-caves.jpg',
                'images/easy-activities/underground-worlds/postojna-cave/postojna-caves%20(1).jpg',
                'images/easy-activities/underground-worlds/postojna-cave/postojna-caves%20(2).jpg',
              ],
            },
            {
              id: 'skocjan-caves',
              title: 'Škocjan Caves',
              description: `A UNESCO World Heritage Site featuring one of the largest underground canyons in the world, carved by the Reka River. The guided walking tour leads across a vertiginous bridge suspended above the chasm and through towering caverns that dwarf everything around them. No special fitness required, and an experience that leaves a lasting impression.`,
              metadata: null,
              images: [
                'images/easy-activities/underground-worlds/skocjan-caves/skocjan-caves.jpg',
                'images/easy-activities/underground-worlds/skocjan-caves/waterfall.jpg',
                'images/easy-activities/underground-worlds/skocjan-caves/easy-activities-hero-1.jpg',
                'images/easy-activities/underground-worlds/skocjan-caves/Screenshot%20from%202026-03-11%2016-53-07.png',
              ],
            },
            {
              id: 'idrija-mercury-mine',
              title: 'Idrija Mercury Mine',
              description: `A UNESCO World Heritage Site that tells the story of the miners and the community that grew around this industrial site for over 500 years. The guided tour leads through well-preserved underground chambers, revealing the harsh realities and ingenuity of mercury mining. The charming historic town of Idrija adds layers of culture and depth to the visit.`,
              metadata: null,
              images: ['images/easy-activities/underground-worlds/idrija-mercury-mine/idrija-mercury-mine-1.jpg'],
            },
          ],
        },
        {
          id: 'lakes-valleys-and-nature',
          title: 'Lakes, Valleys & Nature',
          heroImages: [
            'images/easy-activities/lakes-valleys-and-nature/lake-bled/lake-bled-in-summer-photo.jpg',
            'images/easy-activities/lakes-valleys-and-nature/lake-bohinj/lake-bohinj.jpg',
            'images/easy-activities/lakes-valleys-and-nature/lake-jasna/lake-jasna-mountains.jpg',
            'images/easy-activities/lakes-valleys-and-nature/logarska-dolina/parc-regional-de-la-vallee.jpg',
          ],
          trips: [
            {
              id: 'lake-bled',
              title: 'Lake Bled & Bled Castle',
              description: `The image most people picture when they think of Slovenia — a glacial lake framed by the Julian Alps, with a fairy-tale island church and a medieval castle on a sheer cliff above the water. Take a traditional pletna boat to the island, walk the scenic 6km lakeside path, or ride up to Bled Castle for panoramic views across the whole scene. No trip to Slovenia is complete without it.`,
              metadata: null,
              images: [
                'images/easy-activities/lakes-valleys-and-nature/lake-bled/lake-bled-in-summer-photo.jpg',
                'images/easy-activities/lakes-valleys-and-nature/lake-bled/Lake+Bled+Slovenia+DJI+Drone+Aerial+View.webp',
              ],
            },
            {
              id: 'lake-bohinj',
              title: 'Lake Bohinj',
              description: `Just 30 minutes from Bled, Bohinj is a larger, wilder, and far quieter glacial lake nestled deep inside Triglav National Park. No island, no castle — just raw alpine scenery, crystal-clear water, and an authentic mountain atmosphere. A favourite among returning visitors, and many argue it surpasses Bled in its unspoiled simplicity.`,
              metadata: null,
              images: ['images/easy-activities/lakes-valleys-and-nature/lake-bohinj/lake-bohinj.jpg'],
            },
            {
              id: 'lake-jasna',
              title: 'Lake Jasna & Kranjska Gora',
              description: `At the foot of the Vršič Pass, Lake Jasna is a glacial lake with vivid turquoise water reflecting the jagged peaks of the Julian Alps. A short, flat loop around the lake takes in superb mountain scenery, and the alpine town of Kranjska Gora is just minutes away for a coffee or lunch. A fine combination of easy walking and classic alpine landscape.`,
              metadata: null,
              images: [
                'images/easy-activities/lakes-valleys-and-nature/lake-jasna/lake-jasna.jpg',
                'images/easy-activities/lakes-valleys-and-nature/lake-jasna/lake-jasna-mountains.jpg',
              ],
            },
            {
              id: 'logarska-dolina',
              title: 'Logarska Dolina (Logar Valley)',
              description: `A glacially carved valley in the heart of the Kamnik-Savinja Alps, often cited as among the finest in all of Europe. Visitors arrive along a scenic toll road and can stroll gently to the Rinka Waterfall and through the valley floor, taking in soaring mountain walls with almost no physical effort. Peaceful, uncrowded, and deeply satisfying.`,
              metadata: null,
              images: [
                'images/easy-activities/lakes-valleys-and-nature/logarska-dolina/caption.jpg',
                'images/easy-activities/lakes-valleys-and-nature/logarska-dolina/parc-regional-de-la-vallee.jpg',
              ],
            },
          ],
        },
        {
          id: 'adriatic-coast-and-wine',
          title: 'Adriatic Coast & Wine',
          heroImages: [
            'images/easy-activities/adriatic-coast-and-wine/lipica-stud-farm/13-Kobilarna-Lipica-foto-Gabriele-Boiselle-vir-Edition-Boiselle.jpeg',
            'images/easy-activities/adriatic-coast-and-wine/piran/tartini-square-piran-slovenia-hq.jpg',
            'images/easy-activities/adriatic-coast-and-wine/brda-wine-region/ce.jpg',
          ],
          trips: [
            {
              id: 'lipica-stud-farm',
              title: 'Lipica Stud Farm',
              description: `The birthplace of the Lipizzaner horse and among the oldest stud farms in Europe. Visitors can tour the elegant stables, stroll the estate grounds, and learn about centuries of breeding tradition. Depending on the season, training sessions or classical riding performances may be running — a graceful, memorable experience.`,
              metadata: null,
              images: ['images/easy-activities/adriatic-coast-and-wine/lipica-stud-farm/13-Kobilarna-Lipica-foto-Gabriele-Boiselle-vir-Edition-Boiselle.jpeg'],
            },
            {
              id: 'salt-museum-piran',
              title: 'Salt Museum, Saltpans & Piran',
              description: `At the Sečovlje Saltworks Museum, visitors discover the centuries-old tradition of hand-harvesting sea salt — a craft still practiced today using traditional wooden tools. A walk through the saltpans reveals a landscape teeming with birdlife and living heritage. The trip continues to Piran, a coastal jewel of Venetian architecture, medieval walls, and sweeping Adriatic views.`,
              metadata: null,
              images: ['images/easy-activities/adriatic-coast-and-wine/piran/tartini-square-piran-slovenia-hq.jpg'],
            },
            {
              id: 'brda-wine-region',
              title: 'Brda Wine Region',
              description: `Slovenia's "Little Tuscany" — rolling hills along the Italian border covered in vineyards, olive groves, cherry orchards, and hilltop villages. A leisurely drive through the region, stopping for wine tasting and a village lunch, makes for a richly enjoyable day. No physical effort required — just good wine, good food, and open views.`,
              metadata: null,
              images: [
                'images/easy-activities/adriatic-coast-and-wine/brda-wine-region/360_F_485694764_KblVBMbfR9MMtmJzv6ZM11go9CfzGpw3.jpg',
                'images/easy-activities/adriatic-coast-and-wine/brda-wine-region/ce.jpg',
                'images/easy-activities/adriatic-coast-and-wine/brda-wine-region/gettyimages-1209112835-640x640.jpg',
              ],
            },
          ],
        },
      ],
    },

    // ─── LEVEL 2 — Active Experiences ─────────────────────────
    {
      id: 'active-experiences',
      title: 'Active Experiences',
      subtitle: 'Suitable for guests with basic fitness — expect 1–4 hours of walking, some elevation, big rewards',
      level: 2,
      heroImages: [
        'images/active-experiences/active-experiences-hero-1.jpg',
        'images/active-experiences/active_hero2.jpg',
        'images/active-experiences/high-alpine-experiences/high-alpine-experiences-hero-3.jpg',
        'images/active-experiences/gorges-waterfalls-and-springs/vintgar-gorge/mists-in-vintgar-gorge.jpg',
      ],
      categories: [
        {
          id: 'gorges-waterfalls-and-springs',
          title: 'Gorges, Waterfalls & Springs',
          heroImages: [
            'images/active-experiences/gorges-waterfalls-and-springs/mostnica-gorge/deep-gorge.jpg',
            'images/active-experiences/gorges-waterfalls-and-springs/tolmin-gorge/scorci-di-natura.jpg',
            'images/active-experiences/gorges-waterfalls-and-springs/vintgar-gorge/mists-in-vintgar-gorge.jpg',
            'images/active-experiences/gorges-waterfalls-and-springs/rinka-waterfall/rinka-waterfall-in-springtime.jpg',
            'images/active-experiences/gorges-waterfalls-and-springs/savica-waterfall/photo2jpg.jpg',
            'images/active-experiences/gorges-waterfalls-and-springs/pericnik-waterfall/first-sight.jpg',
            'images/active-experiences/gorges-waterfalls-and-springs/source-kamniska-bistrica/kamniska-bistrica-spring.jpg',
            'images/active-experiences/gorges-waterfalls-and-springs/zelenci/zelenci-2.jpg',
            'images/active-experiences/gorges-waterfalls-and-springs/source-bohinjska-bistrica/source-bohinjska-bistrica-1.jpg',
          ],
          trips: [
            {
              id: 'mostnica-gorge',
              title: 'Mostnica Gorge',
              description: `Hidden in the heart of Bohinj, the Mostnica Gorge is a narrow canyon carved over millennia by the turquoise Mostnica river. The trail follows the water closely, weaving through tight rock passages, across old stone bridges, and past rock formations worn smooth by rushing water. The walk builds to a strong finale at the Mostnica Waterfall, tumbling into a deep emerald pool. Two mountain huts along the way invite a well-earned rest with local food and drinks.`,
              metadata: ['2–3 hours return', 'Minimal elevation', 'Well-marked trail'],
              images: [
                'images/active-experiences/gorges-waterfalls-and-springs/mostnica-gorge/deep-gorge.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/mostnica-gorge/mostnica-gorge-1%20.jpg',
              ],
            },
            {
              id: 'tolmin-gorge',
              title: 'Tolmin Gorge',
              description: `Slovenia's lowest and warmest canyon, where the Tolminka and Zadlaščica rivers meet in a confluence of turquoise water and sheer vertical rock walls. An easy walk leads deep into the gorge, ending at a natural rock arch and a small, powerful waterfall. In summer the canyon traps warmth and the water shimmers with near-tropical intensity. Far less visited than its quality deserves.`,
              metadata: ['1.5–2 hours return', 'Flat', 'Well-maintained paths'],
              images: [
                'images/active-experiences/gorges-waterfalls-and-springs/tolmin-gorge/scorci-di-natura.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/tolmin-gorge/tolmin-gorge.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/tolmin-gorge/tolmin-gorge%20(1).jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/tolmin-gorge/veduta-dal-basso.jpg',
              ],
            },
            {
              id: 'vintgar-gorge',
              title: 'Vintgar Gorge',
              description: `Just 4km from Lake Bled, Vintgar is a place where nature seems to have got everything right. A wooden boardwalk clings to the rock face of a narrow gorge carved by the turquoise Radovna River, carrying visitors over foaming rapids, beneath overhanging cliffs, and past deep pools of impossible emerald green. The walk ends at the Šum Waterfall — the widest waterfall in Slovenia — before looping back through quiet countryside.`,
              metadata: ['1.5–2 hours', 'Flat', 'Boardwalks throughout'],
              images: [
                'images/active-experiences/gorges-waterfalls-and-springs/vintgar-gorge/foto-ales-kosir.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/vintgar-gorge/foto-ales-kosir%20(1).jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/vintgar-gorge/foto-ales-kosir%20(2).jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/vintgar-gorge/mists-in-vintgar-gorge.jpg',
              ],
            },
            {
              id: 'rinka-waterfall',
              title: 'Rinka Waterfall & Logarska Dolina',
              description: `A gentle valley walk in the Kamnik-Savinja Alps leads to the Rinka Waterfall, plunging 90 metres in a single free fall from a sheer limestone cliff. The surrounding Logarska Dolina valley is glacially carved, shaped like a natural amphitheatre, and peacefully uncrowded. The scenic toll road drive in is itself a highlight — a walk that delivers alpine grandeur with very little effort.`,
              metadata: ['1.5–2 hours return', 'Minimal elevation', 'Flat valley floor'],
              images: [
                'images/active-experiences/gorges-waterfalls-and-springs/rinka-waterfall/caption.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/rinka-waterfall/rinka-waterfall-in-springtime.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/rinka-waterfall/Screenshot%20from%202026-03-11%2017-02-46.png',
              ],
            },
            {
              id: 'savica-waterfall',
              title: 'Savica Waterfall',
              description: `A celebrated natural landmark that earns its reputation. Reaching it requires a short but steep climb of around 500 steps through the forest, which builds anticipation and makes the arrival feel earned. The reward: a powerful jet of glacial water bursting from a narrow rock cleft and plunging 78 metres into a turquoise pool below. Set at the edge of Triglav National Park, the setting is raw, alpine, and immediate.`,
              metadata: ['45 minutes return', '~150m elevation', 'Short but steep — worth every step'],
              images: [
                'images/active-experiences/gorges-waterfalls-and-springs/savica-waterfall/img-20190518-wa0007-largejpg.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/savica-waterfall/photo2jpg.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/savica-waterfall/Screenshot%20from%202026-03-11%2017-03-47.png',
              ],
            },
            {
              id: 'pericnik-waterfall',
              title: 'Peričnik Waterfall & Vrata Valley',
              description: `A two-tier cascade in the Julian Alps that visitors can walk behind on a narrow rock ledge — feeling the spray and hearing the thunder of the falls from inside the curtain of water. Located at the entrance to the Vrata Valley, with the north face of Triglav rising at the valley's head. The drive and short walk in are easy, the scenery is immense, and the experience of standing behind a full waterfall is hard to match. Minimal effort, maximum impression.`,
              metadata: ['1–1.5 hours return', 'Minimal elevation', 'Easy access road'],
              images: [
                'images/active-experiences/gorges-waterfalls-and-springs/pericnik-waterfall/behind-the-pericnik-waterfall.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/pericnik-waterfall/first-sight.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/pericnik-waterfall/pericnik-small-waterfall.jpg',
              ],
            },
            {
              id: 'source-kamniska-bistrica',
              title: 'Source of the Kamniška Bistrica',
              description: `At the head of the Kamniška Bistrica valley, tucked beneath sheer limestone walls, the river surges fully formed from a dark cave mouth at the base of a towering cliff. The short walk up the valley passes through alpine forest with the river growing louder beside the trail. The source itself is a powerful rush of ice-cold, crystal-clear water emerging from deep inside the mountain — a sight that rewards all out of proportion to the effort.`,
              metadata: ['1–1.5 hours return', 'Minimal elevation', 'Easy valley trail'],
              images: [
                'images/active-experiences/gorges-waterfalls-and-springs/source-kamniska-bistrica/kamniska-bistrica-spring.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/source-kamniska-bistrica/kamniska-bistrica-spring%20(1).jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/source-kamniska-bistrica/kamniska-bistrica-spring%20(2).jpg',
              ],
            },
            {
              id: 'zelenci',
              title: 'Zelenci — Source of the Sava Dolinka',
              description: `A small but magical nature reserve at the foot of the Julian Alps near Kranjska Gora, where the Sava Dolinka river begins its journey to the Danube. Vivid turquoise and emerald spring pools bubble up through white sand, creating an almost otherworldly mosaic of colour against the surrounding wetland. A wooden boardwalk loops gently through the reserve, with the peaks of the Karavanke and Julian Alps as backdrop. Peaceful, effortless, and strikingly photogenic.`,
              metadata: ['30–45 minutes', 'Flat boardwalk', 'Accessible to all'],
              images: [
                'images/active-experiences/gorges-waterfalls-and-springs/zelenci/zelenci-2.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/zelenci/zelenci-3.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/zelenci/zelenci-4.jpg',
              ],
            },
            {
              id: 'source-bohinjska-bistrica',
              title: 'Source of the Bohinjska Bistrica',
              description: `A mesmerizing natural spring and a well-kept local secret. The Bohinjska Bistrica rises from the base of a forested hillside: ice-cold water welling up in vivid blue-green pools through white limestone gravel, so clear that every pebble is visible in sharp detail. The surrounding forest and the silence of the spot give it an almost enchanted atmosphere. A short, easy walk — but the sight is all out of proportion to the effort.`,
              metadata: ['30–60 minutes', 'Flat', 'Short trail from road'],
              images: [
                'images/active-experiences/gorges-waterfalls-and-springs/source-bohinjska-bistrica/source-bohinjska-bistrica-1.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/source-bohinjska-bistrica/source-bohinjska-bistrica-2.jpg',
                'images/active-experiences/gorges-waterfalls-and-springs/source-bohinjska-bistrica/source-bohinjska-bistrica-3.jpg',
              ],
            },
          ],
        },
        {
          id: 'high-alpine-experiences',
          title: 'High Alpine Experiences',
          heroImages: [
            'images/active-experiences/high-alpine-experiences/velika-planina/view.jpg',
            'images/active-experiences/high-alpine-experiences/krvavec/slovenia.jpg',
            'images/active-experiences/high-alpine-experiences/mangart-saddle/Mangart_14.jpg',
            'images/active-experiences/high-alpine-experiences/nanos-plateau/nanos-plateau.jpg',
          ],
          trips: [
            {
              id: 'velika-planina',
              title: 'Velika Planina Alpine Plateau',
              description: `A sweeping high alpine plateau dotted with the most distinctive shepherd's settlement in the Alps. The traditional herdsmen's huts, with their curved dark-wood roofs, have been used by the same families for generations and are unlike anything else in Europe. In summer the plateau comes alive with grazing cattle, wildflowers, and the sound of cowbells drifting across the hills. Visitors reach the top by cable car and are free to roam at their own pace.`,
              metadata: ['1–3 hours on plateau', 'Cable car access', '200–300m walking elevation optional'],
              images: [
                'images/active-experiences/high-alpine-experiences/velika-planina/cows-when-playin.jpg',
                'images/active-experiences/high-alpine-experiences/velika-planina/resting.jpg',
                'images/active-experiences/high-alpine-experiences/velika-planina/view.jpg',
              ],
            },
            {
              id: 'krvavec',
              title: 'Krvavec Alpine Plateau',
              description: `Reached by cable car from just north of Ljubljana, Krvavec offers sweeping alpine views and easy plateau walks in the heart of the Kamnik-Savinja Alps — without the crowds of more famous destinations. The top station sits at over 1,700 metres and the views stretch from the Ljubljana Basin to the Adriatic on a clear day. Gentle paths connect several small alpine huts serving traditional food. An effortless escape into the high mountains.`,
              metadata: ['1–3 hours on plateau', 'Cable car access', 'Easy plateau terrain'],
              images: [
                'images/active-experiences/high-alpine-experiences/krvavec/10-in-slovenian-ski-resort.jpg',
                'images/active-experiences/high-alpine-experiences/krvavec/for-a-perfect-winter.jpg',
                'images/active-experiences/high-alpine-experiences/krvavec/slovenia.jpg',
                'images/active-experiences/high-alpine-experiences/krvavec/spring-op-een-fiets-en.jpg',
              ],
            },
            {
              id: 'mangart-saddle',
              title: 'Mangart Saddle — High Ridge Walk',
              description: `The road to the Mangart Saddle is the highest in Slovenia, and even without climbing to the full summit, the short walk from the saddle across the high ridge offers staggering views across the Julian Alps — stretching from the Adriatic to the Italian Dolomites on a clear day. The drive up is itself a vertiginous adventure. Fit walkers can extend along the ridge as long as they like, with views improving at every step.`,
              metadata: ['1–2 hours on the ridge', 'Minimal walking elevation', 'Dramatic high-altitude scenery'],
              images: ['images/active-experiences/high-alpine-experiences/mangart-saddle/Mangart_14.jpg'],
            },
            {
              id: 'nanos-plateau',
              title: 'Nanos Plateau',
              description: `The Nanos plateau rises above the Vipava Valley like a great green wall, and the walk up through forest to the wide, windswept top is a deeply satisfying half-day hike. From the plateau edge, the entire Vipava Valley spreads out below, the Adriatic glitters in the distance, and on clear days the skyline of Trieste appears on the horizon. A small mountain hut at the top provides refreshments and shelter from the famous Vipava wind.`,
              metadata: ['2.5–3.5 hours return', '~400m elevation gain', 'Marked forest trail'],
              images: [
                'images/active-experiences/high-alpine-experiences/nanos-plateau/nanos-plateau.jpg',
                'images/active-experiences/high-alpine-experiences/nanos-plateau/nanos-plateau%20(1).jpg',
                'images/active-experiences/high-alpine-experiences/nanos-plateau/via-ferrata-at-the-steep.jpg',
                'images/active-experiences/high-alpine-experiences/nanos-plateau/via-ferrata-at-the-steep%20(1).jpg',
              ],
            },
          ],
        },
        {
          id: 'river-lake-and-coastal-trails',
          title: 'River, Lake & Coastal Trails',
          heroImages: [
            'images/active-experiences/river-lake-and-coastal-trails/bled-circular-walk/lake-bled-in-autumn-photo.jpg',
            'images/active-experiences/river-lake-and-coastal-trails/coastal-cliff-path/coastal-cliff-path-1.jpg',
            'images/active-experiences/river-lake-and-coastal-trails/muggia-to-trieste/muggia-to-trieste-1.jpg',
            'images/active-experiences/river-lake-and-coastal-trails/soca-trail/active_hero2.jpg',
            'images/active-experiences/river-lake-and-coastal-trails/nadiza-river-walk/nadiza-river-walk-1.jpg',
          ],
          trips: [
            {
              id: 'bled-circular-walk',
              title: 'Lake Bled Circular Walk',
              description: `Walking the full loop around Lake Bled is a simple experience that stays with you long after leaving Slovenia. The 6km path circles the glacial lake at water level, offering constantly shifting views of the island, the church, and the castle on its cliff — all framed by the Julian Alps. Each bend brings a new perspective. At its best in the early morning before the crowds arrive, or at golden hour when the light turns the lake to copper.`,
              metadata: ['1.5–2 hours', 'Flat loop', 'Suitable for all fitness levels'],
              images: ['images/active-experiences/river-lake-and-coastal-trails/bled-circular-walk/lake-bled-in-autumn-photo.jpg'],
            },
            {
              id: 'coastal-cliff-path',
              title: 'Slovenian Coastal Cliff Path (Strunjan to Piran)',
              description: `The Slovenian coastline may be short — just 47km — but the clifftop stretch between Strunjan and Piran is among the most scenic coastal walks in the northern Adriatic. The path hugs the edge of Slovenia's only coastal cliffs, passing above salt meadows, vineyards, and the shimmering blue sea below. Views stretch to the Istrian peninsula and the Italian coast. The walk ends in Piran, where a well-earned coffee on the seafront square is the natural reward.`,
              metadata: ['2–3 hours one way', 'Gentle clifftop undulation', 'Can be walked in sections'],
              images: ['images/active-experiences/river-lake-and-coastal-trails/coastal-cliff-path/coastal-cliff-path-1.jpg'],
            },
            {
              id: 'muggia-to-trieste',
              title: 'Muggia to Trieste Coastal Path',
              description: `Just across the Slovenian border, this scenic coastal trail connects the Venetian fishing village of Muggia with the grand Habsburg city of Trieste — following the Gulf of Trieste shoreline the entire way. The walk passes clifftop viewpoints, old Austro-Hungarian fortifications, and hidden coves, arriving in Trieste's magnificent waterfront piazza. A fine cross-border experience combining natural beauty, history, and architecture — ending with a guaranteed great espresso.`,
              metadata: ['2.5–3 hours one way', 'Gentle coastal undulation', 'Return by bus'],
              images: ['images/active-experiences/river-lake-and-coastal-trails/muggia-to-trieste/muggia-to-trieste-1.jpg'],
            },
            {
              id: 'soca-trail',
              title: 'Soča Trail',
              description: `The Soča Trail follows what many consider the most beautiful river in Europe through the heart of Triglav National Park. The water runs an almost surreal shade of electric turquoise over white limestone boulders through pristine alpine forest. The trail is well-marked, largely flat, and can be walked in sections of any length. Highlights include the Napoleon Bridge, the Great Soča Gorge, and the temptation of a swim in the river's natural pools.`,
              metadata: ['2–5 hours depending on section', 'Minimal elevation', 'Multiple entry points'],
              images: ['images/active-experiences/river-lake-and-coastal-trails/soca-trail/active_hero2.jpg'],
            },
            {
              id: 'nadiza-river-walk',
              title: 'Nadiža River Walk',
              description: `A well-kept secret along the Slovenian-Italian border. The Nadiža River runs through a shallow limestone canyon of vivid green water and pale white rock — among the least visited river landscapes in the region. In summer the water is warm enough to swim in, and the walk along its banks is easy and unhurried. Far quieter than the Soča, with an intimate, almost private quality that makes it a favourite among those who find it. Pack a towel.`,
              metadata: ['2–3 hours', 'Flat riverside path', 'Perfect summer swimming'],
              images: ['images/active-experiences/river-lake-and-coastal-trails/nadiza-river-walk/nadiza-river-walk-1.jpg'],
            },
          ],
        },
        {
          id: 'summit-and-ridge-hikes',
          title: 'Summit & Ridge Hikes',
          heroImages: [
            'images/active-experiences/summit-and-ridge-hikes/ljubelj-zelenica/ljubelj-zelenica-1%20.jpg',
            'images/active-experiences/summit-and-ridge-hikes/monte-sabotino/dji_0034_manjsa_c_prw.jpg',
            'images/active-experiences/summit-and-ridge-hikes/smarna-gora/smarna-gora-1.jpg',
            'images/active-experiences/summit-and-ridge-hikes/lubnik/Lubnik_s_Sorškega_polja.jpg',
          ],
          trips: [
            {
              id: 'ljubelj-zelenica',
              title: 'Ljubelj to Zelenica Mountain Hut',
              description: `This hike begins at the historic Ljubelj Pass — used as an Alpine crossing since Roman times — and climbs steadily through beech forest and open terrain into the Karavanke range. The trail emerges onto broad green pastures surrounding the Zelenica Mountain Hut, set against a panoramic backdrop of peaks stretching toward Austria. The hut serves hearty mountain food and cold local beer — both tasting considerably better at altitude after a proper climb.`,
              metadata: ['2–3 hours return', '~400m elevation gain', 'Well-marked trail'],
              images: ['images/active-experiences/summit-and-ridge-hikes/ljubelj-zelenica/ljubelj-zelenica-1%20.jpg'],
            },
            {
              id: 'monte-sabotino',
              title: 'Monte Sabotino — WWI Ridge Walk',
              description: `A historic and moving ridge walk above the Soča/Isonzo valley. Monte Sabotino's summit is riddled with preserved WWI trenches, tunnels, galleries, and fortifications from the brutal Isonzo Front battles of 1915–1917. The climb takes around 2 hours and delivers sweeping views over Gorizia, Nova Gorica, and the entire Soča valley — a landscape that saw some of the most intense fighting of the First World War. History and scenery in equal measure.`,
              metadata: ['2.5–3.5 hours return', '~400m elevation gain', 'Historical trail with interpretation'],
              images: ['images/active-experiences/summit-and-ridge-hikes/monte-sabotino/dji_0034_manjsa_c_prw.jpg'],
            },
            {
              id: 'smarna-gora',
              title: 'Šmarna Gora — Ljubljana\'s Mountain',
              description: `Every resident of Ljubljana has climbed Šmarna Gora — and for good reason. This beloved hill rising directly above the city combines a satisfying forest climb with a wonderful payoff at the top: a medieval pilgrimage church, a busy mountain hut with cold beer and warm soup, and a panoramic view stretching from Ljubljana to the Alps, the Karavanke, and on clear days the Adriatic. The half-day introduction to Slovenian mountain culture — unpretentious, social, and deeply local.`,
              metadata: ['1.5–2.5 hours return', '~300m elevation gain', 'Multiple routes from the base'],
              images: ['images/active-experiences/summit-and-ridge-hikes/smarna-gora/smarna-gora-1.jpg'],
            },
            {
              id: 'lubnik',
              title: 'Lubnik above Škofja Loka',
              description: `A shorter but very satisfying hike rising steeply above Škofja Loka — one of the best-preserved medieval towns in Slovenia — to the Lubnik mountain hut with sweeping views over the Poljane and Selška valleys. The climb is direct, the hut at the top serves excellent traditional food on a sunny terrace, and the combination with a visit to Škofja Loka's Old Town, fortress, and stone bridge makes for a full day of culture and mountain in one.`,
              metadata: ['2.5–3.5 hours return', '~600m elevation gain', 'Trail from town centre', 'Mountain hut at summit'],
              images: ['images/active-experiences/summit-and-ridge-hikes/lubnik/Lubnik_s_Sorškega_polja.jpg'],
            },
          ],
        },
        {
          id: 'adventure-and-sport',
          title: 'Adventure & Sport',
          heroImages: [
            'images/active-experiences/adventure-and-sport/rafting-soca/rafting-soca-3.jpg',
            'images/active-experiences/adventure-and-sport/kayaking-soca/kayaking-soca-1.jpg',
            'images/active-experiences/adventure-and-sport/ebike-vipava/img-20190804-185913-025.jpg',
            'images/active-experiences/adventure-and-sport/ebike-brda/ce.jpg',
            'images/active-experiences/adventure-and-sport/zipline-dolinka/zipline-dolinka-photoshop.jpg',
          ],
          trips: [
            {
              id: 'rafting-soca',
              title: 'Rafting the Soča River',
              description: `Rafting the Soča is an experience unlike any other river in Europe. The water is a legendary vivid turquoise, running fast and cold through a valley of immense alpine beauty. Groups descend the white-water rapids with experienced guides while the towering walls of Triglav National Park rise on either side. The combination of adrenaline, natural beauty, and visual spectacle makes this a standout active experience. Suitable for fit beginners — no prior rafting experience required.`,
              metadata: ['2–3 hours on water', 'Guided', 'Equipment provided', 'Suitable for beginners'],
              images: ['images/active-experiences/adventure-and-sport/rafting-soca/rafting-soca-3.jpg'],
            },
            {
              id: 'kayaking-soca',
              title: 'Kayaking the Soča River',
              description: `For those who want more control and a more intimate experience of the Soča, guided kayaking offers the same turquoise scenery with a greater sense of individual adventure. Paddling at your own pace through crystal-clear water, with the Julian Alps on all sides, is an experience that stays with you. Professional instruction is provided from the outset — no prior kayaking experience is needed — and the guides know every bend, pool, and rapid on the river.`,
              metadata: ['Half day', 'Guided', 'Equipment and instruction provided', 'No experience needed'],
              images: [
                'images/active-experiences/adventure-and-sport/kayaking-soca/kayaking-soca-1.jpg',
                'images/active-experiences/adventure-and-sport/kayaking-soca/kayaking-soca-2.jpg',
              ],
            },
            {
              id: 'ebike-vipava',
              title: 'E-Bike through the Vipava Valley',
              description: `The Vipava Valley is one of Slovenia's most beautiful and least explored regions — a sun-drenched landscape of vineyards, orchards, medieval hilltop villages, and rocky escarpments tucked between the Nanos plateau and the Italian border. E-biking lets you cover ground freely, stopping wherever the view or a roadside wine cellar demands. Combined with a wine tasting or lunch at a traditional osmica farm wine bar, it makes for a wonderfully rich full-day experience.`,
              metadata: ['3–5 hours cycling', 'E-bike hire available locally', 'Mix of paved and gravel roads'],
              images: [
                'images/active-experiences/adventure-and-sport/ebike-vipava/caption.jpg',
                'images/active-experiences/adventure-and-sport/ebike-vipava/img-20190804-185913-025.jpg',
                'images/active-experiences/adventure-and-sport/ebike-vipava/sup-vipavskadolina-vipavavalle.jpg',
              ],
            },
            {
              id: 'ebike-brda',
              title: 'E-Bike through the Brda Wine Hills',
              description: `The rolling hills of Brda along the Slovenian-Italian border make for ideal e-bike territory — vineyards, olive groves, hilltop villages, and sweeping views toward the Dolomites at every turn. The landscape is gentle and made for slow exploration. Several local estates offer guided bike-and-wine experiences combining cycling with cellar visits and tastings of Brda's excellent white wines. An indulgent and thoroughly enjoyable active day.`,
              metadata: ['3–5 hours cycling', 'Guided options available', 'Wine tasting stops en route'],
              images: [
                'images/active-experiences/adventure-and-sport/ebike-brda/360_F_485694764_KblVBMbfR9MMtmJzv6ZM11go9CfzGpw3.jpg',
                'images/active-experiences/adventure-and-sport/ebike-brda/ce.jpg',
                'images/active-experiences/adventure-and-sport/ebike-brda/gettyimages-1209112835-640x640.jpg',
              ],
            },
            {
              id: 'zipline-dolinka',
              title: 'Zipline Dolinka',
              description: `The Zipline Dolinka sends participants flying above the Sava Dolinka river valley on steel cables strung between forested ridges above Kranjska Gora — delivering jaw-dropping views of the Julian Alps and Karavanke at exhilarating speed. The course runs across multiple lines of varying length and height, with a sensation of open flight above alpine landscape that few activities can match. Safe, thrilling, and requiring no prior experience — just the willingness to step off the edge.`,
              metadata: ['2–3 hours including transfers', 'Guided', 'Equipment provided', 'Min weight/age restrictions'],
              images: [
                'images/active-experiences/adventure-and-sport/zipline-dolinka/blue-sky-green-waters.jpg',
                'images/active-experiences/adventure-and-sport/zipline-dolinka/zipline-dolinka-photoshop.jpg',
              ],
            },
          ],
        },
      ],
    },

    // ─── LEVEL 3 — Challenging Adventures ─────────────────────
    {
      id: 'challenging-adventures',
      title: 'Challenging Adventures',
      subtitle: 'For guests seeking a real physical challenge — expect full days, serious elevation, or guided adrenaline activities',
      level: 3,
      heroImages: [
        'images/challenging-adventures/challenging-adventures-hero-1.jpg',
        'images/challenging-adventures/mountain-summits/blegos/7b-DSC02618-Panorama-small.jpg',
        'images/challenging-adventures/mountain-summits/stol/61a5cddaa7bd7-large.jpg',
      ],
      categories: [
        {
          id: 'mountain-summits',
          title: 'Mountain Summits',
          heroImages: [
            'images/challenging-adventures/mountain-summits/kofce-kosuta/617478382488d-large.jpg',
            'images/challenging-adventures/mountain-summits/golica/golica-1.jpg',
            'images/challenging-adventures/mountain-summits/stol/61a5cddaa7bd7-large.jpg',
            'images/challenging-adventures/mountain-summits/blegos/7b-DSC02618-Panorama-small.jpg',
            'images/challenging-adventures/mountain-summits/dolge-njive/6173db842b3dd-large.jpg',
            'images/challenging-adventures/mountain-summits/kalski-greben/61f4fc59d9dcb-large.jpg',
          ],
          trips: [
            {
              id: 'kofce-kosuta',
              title: 'Kofce & Košuta — Karavanke Hike',
              description: `A beloved classic of the Karavanke range — a steady climb through mixed forest and open alpine meadows to a welcoming mountain hut beneath the long rocky ridge of Košuta, the longest massif in the Slovenian Karavanke. Views open progressively as height is gained. The hut at Kofce is famous for its homemade štruklje (rolled dumplings, sweet or savoury), served fresh on a terrace with panoramic views. A fine place to sit with a meal and feel on top of the world.`,
              metadata: ['3–4 hours return', '~700m elevation gain', 'Well-marked trail', 'Mountain hut at summit'],
              images: [
                'images/challenging-adventures/mountain-summits/kofce-kosuta/614b3105953b9-large.jpg',
                'images/challenging-adventures/mountain-summits/kofce-kosuta/616d6fb77cabc-large.jpg',
                'images/challenging-adventures/mountain-summits/kofce-kosuta/617478382488d-large.jpg',
                'images/challenging-adventures/mountain-summits/kofce-kosuta/617cfcc9188dc-large.jpg',
                'images/challenging-adventures/mountain-summits/kofce-kosuta/kofce-ponudba-1200x552.jpg',
              ],
            },
            {
              id: 'golica',
              title: 'Golica — The Daffodil Mountain',
              description: `The open slopes of Golica host an extraordinary natural event each spring — millions of wild daffodils carpet the mountain pastures in a sea of white and yellow that draws visitors from across Europe. The hike climbs steadily from the valley through dense beech forest before breaking out onto the flower-covered hillside, with sweeping views over the Sava valley and the Austrian Alps. Outside daffodil season the walk remains beautiful and the summit panorama is superb. A true Slovenian mountain classic.`,
              metadata: ['3–4 hours return', '~700m elevation gain', 'Best late April–May for flowers', 'Well-marked'],
              images: [
                'images/challenging-adventures/mountain-summits/golica/golica-1.jpg',
                'images/challenging-adventures/mountain-summits/golica/challenging-adventures-hero-1.jpg',
              ],
            },
            {
              id: 'stol',
              title: 'Stol — Highest Peak of the Slovenian Karavanke',
              description: `The highest peak in the Slovenian Karavanke, rewarding the long climb with an expansive panorama that takes in the full arc of the Julian Alps, the Karavanke ridge, the Kamnik-Savinja Alps, and — on clear days — the glittering line of the Adriatic far to the south. The approach winds through high pastures and open alpine terrain, with scenery growing wilder with every metre gained. A serious, full-day hike for fit guests seeking a proper summit experience.`,
              metadata: ['5–6 hours return', '~1,100m elevation gain', 'Full day', 'Well-marked trail'],
              images: [
                'images/challenging-adventures/mountain-summits/stol/614b2fc78e56a-large.jpg',
                'images/challenging-adventures/mountain-summits/stol/616ee5aac97f3-large.jpg',
                'images/challenging-adventures/mountain-summits/stol/619f9852e234c-large.jpg',
                'images/challenging-adventures/mountain-summits/stol/61a3a28ed1e69-large.jpg',
                'images/challenging-adventures/mountain-summits/stol/61a5cddaa7bd7-large.jpg',
              ],
            },
            {
              id: 'blegos',
              title: 'Blegoš — Summit Hike from the Hotel',
              description: `Blegoš rises from the forested highlands of the Škofja Loka region, and — uniquely — this hike begins directly from the hotel. The trail climbs steadily through mixed forest and open meadows before reaching the broad, grassy summit and its wooden lookout tower. The panorama from the top stretches across the Julian Alps and Karavanke to the north, the Kamnik-Savinja Alps to the east, and the gentle hills of the interior to the south. A proper mountain summit, starting and ending at your own front door.`,
              metadata: ['4–5 hours return', '~900m elevation gain', 'Trail starts directly from the hotel', 'Lookout tower at summit'],
              images: [
                'images/challenging-adventures/mountain-summits/blegos/10-DSC02685-Izpred-koče-small.jpg',
                'images/challenging-adventures/mountain-summits/blegos/4-DSC02576-Proti-vrhu-2-small.jpg',
                'images/challenging-adventures/mountain-summits/blegos/5-DSC02580-Ko-se-veter-poigra-small.jpg',
                'images/challenging-adventures/mountain-summits/blegos/7b-DSC02618-Panorama-small.jpg',
                'images/challenging-adventures/mountain-summits/blegos/8-DSC02631-Proti-koči-small.jpg',
              ],
            },
            {
              id: 'dolge-njive',
              title: 'Dolge Njive — The Horse Plateau Below Krvavec',
              description: `A broad, gently rolling alpine plain tucked just below the Krvavec ski area in the Kamnik-Savinja Alps. Dolge Njive feels like a world apart — a wide-open expanse of grass and wildflowers where semi-wild horses graze freely through the summer months. The hike in climbs steadily through forest before the landscape opens up dramatically, and the encounter with the horses — calm, curious, and completely at home — is a rare and memorable alpine moment. The surrounding peaks of Zvoh, Krvavec, and the distant Grintovec massif frame the plateau on all sides.`,
              metadata: ['3–4 hours return', '~600m elevation gain', 'Well-marked trail', 'Free-roaming horses in summer'],
              images: [
                'images/challenging-adventures/mountain-summits/dolge-njive/616e455d020e6-large.jpg',
                'images/challenging-adventures/mountain-summits/dolge-njive/616e45602a6b8-large.jpg',
                'images/challenging-adventures/mountain-summits/dolge-njive/6173db842b3dd-large.jpg',
                'images/challenging-adventures/mountain-summits/dolge-njive/6173db86ef59f-large.jpg',
                'images/challenging-adventures/mountain-summits/dolge-njive/61f6ae6f91fd6-large.jpg',
              ],
            },
            {
              id: 'kalski-greben',
              title: 'Kalški Greben — Ridge Walk Toward Grintovec',
              description: `A beautiful and peaceful ridge walk in the Kamnik-Savinja Alps, starting from the high pastures of Dolge Njive. The trail climbs steadily along a broad, grassy ridge with views that open wider with every step — Grintovec rising ahead, Kamniško Sedlo to the east, Skuta beyond, and the full arc of the range unfolding around you. Few people come this way, and the quiet is part of the reward. A deeply satisfying walk in magnificent mountain scenery, without any technical difficulty.`,
              metadata: ['~5.5 hours return (3h up, 2.5h down)', '~900m elevation gain', 'Well-marked trail', 'Quiet and uncrowded'],
              images: [
                'images/challenging-adventures/mountain-summits/kalski-greben/61f4fc59d9dcb-large.jpg',
                'images/challenging-adventures/mountain-summits/kalski-greben/61f4fc5ba95dc-large.jpg',
              ],
            },
          ],
        },
        {
          id: 'alpine-valley-expeditions',
          title: 'Alpine Valley Expeditions',
          heroImages: [
            'images/challenging-adventures/alpine-valley-expeditions/kamnisko-sedlo/KamniskoSedlo.jpg',
            'images/challenging-adventures/alpine-valley-expeditions/robanov-kot/robanov-kot-1.jpg',
          ],
          trips: [
            {
              id: 'kamnisko-sedlo',
              title: 'Kamniško Sedlo — Kamnik-Savinja Alps',
              description: `A classic and demanding hike in the heart of the Kamnik-Savinja Alps, climbing to the Kamnik Saddle at 1,864 metres — a high col framed by the sheer limestone faces of Brana and Planjava. The trail passes through forest, over rocky terrain, and across open mountain slopes with increasingly striking views. From the saddle, the panorama of surrounding peaks is extraordinary, and fit guests can extend the day to nearby summits.`,
              metadata: ['5–6 hours return', '~1,000m elevation gain', 'Full day', 'Mountain hut at saddle'],
              images: ['images/challenging-adventures/alpine-valley-expeditions/kamnisko-sedlo/KamniskoSedlo.jpg'],
            },
            {
              id: 'robanov-kot',
              title: 'Robanov Kot — Remote Alpine Valley Hike',
              description: `A remote, pristine alpine valley tucked beside Logarska Dolina in the Kamnik-Savinja Alps, accessible only by a narrow toll road and visited by a fraction of the crowds. The trail climbs from the valley floor through forest and high pastures to the ridgeline above, with increasingly wild views of the surrounding peaks. Quiet, demanding, and deeply satisfying — an ideal choice for guests who want to earn their solitude.`,
              metadata: ['4–5 hours return', '~800m elevation gain', 'Remote trail', 'Quiet and uncrowded'],
              images: ['images/challenging-adventures/alpine-valley-expeditions/robanov-kot/robanov-kot-1.jpg'],
            },
          ],
        },
        {
          id: 'guided-adrenaline',
          title: 'Guided Adrenaline',
          heroImages: [
            'images/challenging-adventures/guided-adrenaline/canyoning-bovec/canyoning-bovec-1.jpg',
            'images/challenging-adventures/guided-adrenaline/susec-fratarica/susec-fratarica-1.jpg',
            'images/challenging-adventures/guided-adrenaline/via-ferrata-prisank/via-ferrata-prisank-1.jpg',
          ],
          trips: [
            {
              id: 'canyoning-bovec',
              title: 'Canyoning in Bovec',
              description: `Canyoning in the Bovec area is a pure adrenaline experience set in striking natural scenery. Participants descend through narrow slot canyons carved by crystal-clear glacial streams, abseiling down waterfalls, sliding down smooth natural rock chutes, and leaping into deep turquoise pools. Every corner brings a new challenge and a new view. All activities are led by certified guides with full equipment provided — no prior experience needed, just a willingness to throw yourself in. Quite literally.`,
              metadata: ['Half day', 'Guided', 'Equipment provided', 'Minimum age typically 12+'],
              images: ['images/challenging-adventures/guided-adrenaline/canyoning-bovec/canyoning-bovec-1.jpg'],
            },
            {
              id: 'susec-fratarica',
              title: 'Sušec & Fratarica Canyon — Advanced Canyoning',
              description: `For guests who want to push further than the standard canyoning routes, the Sušec and Fratarica canyons near Bovec offer some of the most demanding descents in the Soča valley. Narrower, wilder, and more committing than introductory routes, these canyons reward adventurous participants with slot canyon scenery, powerful waterfalls, and a real sense of remote wilderness. Guided by certified professionals with full equipment provided.`,
              metadata: ['Half to full day', 'Guided', 'Equipment provided', 'Some prior canyoning experience recommended'],
              images: ['images/challenging-adventures/guided-adrenaline/susec-fratarica/susec-fratarica-1.jpg'],
            },
            {
              id: 'via-ferrata-prisank',
              title: 'Via Ferrata Prisank — Vršič Pass',
              description: `For guests who want their adrenaline with climbing rather than flying, the via ferrata routes on Prisank above the Vršič Pass offer a thrilling introduction to assisted mountain climbing in the Julian Alps. Fixed iron rungs, cables, and ladders allow progression up rock faces that would otherwise require advanced skills, while certified guides ensure safety throughout. The views — over the Vršič Pass, the Soča valley, and Triglav National Park — are among the finest in Slovenia.`,
              metadata: ['Half to full day', 'Guided options available', 'Harness and helmet provided', 'No prior climbing experience needed'],
              images: ['images/challenging-adventures/guided-adrenaline/via-ferrata-prisank/via-ferrata-prisank-1.jpg'],
            },
          ],
        },
      ],
    },
  ],
};

// ─── Lookup Helpers ───────────────────────────────────────────

function findLevel(levelId) {
  return DATA.levels.find((l) => l.id === levelId) || null;
}

function findCategory(levelId, categoryId) {
  const level = findLevel(levelId);
  if (!level) return null;
  return level.categories.find((c) => c.id === categoryId) || null;
}

function findTrip(levelId, categoryId, tripId) {
  const category = findCategory(levelId, categoryId);
  if (!category) return null;
  return category.trips.find((t) => t.id === tripId) || null;
}

// Get all trips in a flat array (for search, prev/next, etc.)
function getAllTrips() {
  const trips = [];
  for (const level of DATA.levels) {
    for (const category of level.categories) {
      for (const trip of category.trips) {
        trips.push({
          ...trip,
          levelId: level.id,
          levelTitle: level.title,
          categoryId: category.id,
          categoryTitle: category.title,
        });
      }
    }
  }
  return trips;
}

// Get prev/next trip within same category
function getAdjacentTrips(levelId, categoryId, tripId) {
  const category = findCategory(levelId, categoryId);
  if (!category) return { prev: null, next: null };
  const idx = category.trips.findIndex((t) => t.id === tripId);
  return {
    prev: idx > 0 ? category.trips[idx - 1] : null,
    next: idx < category.trips.length - 1 ? category.trips[idx + 1] : null,
  };
}

// ─── Hotel Data ─────────────────────────────────────────────
const HOTEL_DATA = {
  estate: {
    id: 'estate',
    title: 'Estate',
    subcategories: [
      { id: 'common-area', title: 'Common Area', description: 'The heart of the monastery — a dining hall with long timber tables, a quiet lobby with original stone floors, and a lounge where guests gather in the evening. Every detail has been kept close to the building\'s 16th-century origins.', images: ['hotel_image/location/common%20area/dining.jpg', 'hotel_image/location/common%20area/lobby.jpg', 'hotel_image/location/common%20area/lounge.jpg'] },
      { id: 'terrace', title: 'Terrace', description: 'A south-facing stone terrace overlooking the Škofjeloka hills. Morning coffee, afternoon reading, evening wine — it becomes whatever the moment asks for.', images: ['hotel_image/location/terrace/terrace.jpg', 'hotel_image/location/terrace/terrace_2.jpg'] },
      { id: 'views', title: 'Views', description: 'A two-minute walk from the monastery brings you to the edge of Podvrh, the old medieval village at the heart of which the monastery stands. From here, open views stretch across meadows, forested ridges, and — on clear days — the distant Julian Alps.', images: ['hotel_image/location/Views/view.jpg', 'hotel_image/location/Views/view2.jpg'] },
    ],
  },
  rooms: {
    id: 'rooms',
    title: 'Rooms',
    subcategories: [
      { id: 'blegos', title: 'Blegoš', type: 'Deluxe', price: 'TBD', description: 'Our Deluxe room and the old master bedroom — roughly 50 square metres of space with six windows facing south and west, an original beamed ceiling, and a four-poster double bed. The vaulted en-suite bathroom has a large freestanding bath and over 11 square metres of its own.', images: ['hotel_image/rooms/blegos/room1.jpg', 'hotel_image/rooms/blegos/room1_2.jpg', 'hotel_image/rooms/blegos/bathroom.jpg'] },
      { id: 'stari-vrh', title: 'Stari Vrh', type: 'Superior', price: 'TBD', description: 'A Superior room on the second floor, around 40 square metres with double-aspect windows and a modern en-suite shower room. The twin beds are hand-made to fit together seamlessly, so the room works equally well as a double — with no gaps.', images: ['hotel_image/rooms/stari%20vrh/room3.jpg', 'hotel_image/rooms/stari%20vrh/bathroom2.jpg'] },
      { id: 'mladi-vrh', title: 'Mladi Vrh', type: 'Standard Plus', price: 'TBD', description: 'A Standard Plus room with dual-aspect windows facing north and west, and a choice of double or twin beds. The same generous size as our Superior rooms, with an en-suite shower room. A low ceiling beam gives it character — though taller guests may want to take note.', images: ['hotel_image/rooms/mladi%20vrh/room2.jpg', 'hotel_image/rooms/mladi%20vrh/room-18.jpg'] },
      { id: 'gora', title: 'Gora', type: 'Superior', price: 'TBD', description: 'A Superior room on the second floor with a double bed, double-aspect windows, and approximately 40 square metres of space. The modern en-suite shower room is finished to the same standard as the rest of the monastery — quietly luxurious.', images: ['hotel_image/rooms/gora/room-19.jpg'] },
      { id: 'lubnik', title: 'Lubnik', type: 'Standard', price: 'TBD', description: 'Our smallest room at around 20 square metres, tucked into the oldest part of the house. A vaulted ceiling, twin beds, and three windows facing south and east give it a light, intimate feel. The private shower room is just across the hall. Also available for single occupancy at a lower supplement.', images: ['hotel_image/rooms/lubnik/lubnik.jpg'] },
    ],
  },
  spa: {
    id: 'spa',
    title: 'Spa',
    subcategories: [
      { id: 'sauna', title: 'Sauna', description: 'A wood-fired Finnish sauna built into the estate\'s barn, with natural ventilation and views into the forest. Cool down outside on the stone terrace or in the plunge pool between sessions.', images: ['hotel_image/spa/sauna/sauna.jpg', 'hotel_image/spa/sauna/sauna_spa.jpg', 'hotel_image/spa/sauna/sauna_spa_2.jpg'] },
      { id: 'jacuzzi', title: 'Jacuzzi', description: 'A heated outdoor jacuzzi set against the backdrop of the hills. Open year-round — equally rewarding under summer stars or winter frost.', images: ['hotel_image/spa/jaccuzzi/jazucci.jpg', 'hotel_image/spa/jaccuzzi/WALKSLO%20jun%202010-175.JPG'] },
      { id: 'massages', title: 'Massages', description: 'Choose from relaxing or sport massage, depending on what the day asked of you. Each session is tailored to you — whether you need to unwind after a gentle walk or work out the knots from a summit push.', images: ['hotel_image/spa/massages/manual_therapy.jpg'] },
      { id: 'manual-therapy', title: 'Manual Therapy', description: 'Led by Erik, our certified manual therapist, who also keeps our own team trail-ready through the season. Targeted sessions for recovery, mobility, and anything the mountains leave behind.', images: ['hotel_image/spa/manual%20therapy/pexels-elisabeth-67721.jpg'] },
    ],
  },
};

function findHotelSection(sectionId) {
  return HOTEL_DATA[sectionId] || null;
}

function findHotelSubcategory(sectionId, subcatId) {
  const section = findHotelSection(sectionId);
  if (!section) return null;
  return section.subcategories.find((s) => s.id === subcatId) || null;
}

// ─── Team Data ──────────────────────────────────────────────
const TEAM_DATA = [
  {
    id: 'arne',
    name: 'Arne',
    role: 'Guide, Host & Cook',
    bio: 'A young guide and host — you might have seen him at Kredarica under Triglav. At the monastery, he also cooks for our guests. While you rest in the spa, he\'s already preparing your dinner.',
    photo: 'images/team/arne.jpg',
  },
  {
    id: 'luka',
    name: 'Luka',
    role: 'Co-founder & Host',
    bio: 'If you\'ve visited us before, you already know Luka. He\'ll make sure you feel at home from the moment you arrive.',
    photo: 'images/team/luka.jpg',
  },
  {
    id: 'zana',
    name: 'Žana',
    role: 'Co-founder & Host',
    bio: 'If you\'ve visited us before, you already know Žana. She keeps everything running and everyone looked after.',
    photo: 'images/team/zana.jpg',
  },
  {
    id: 'erik',
    name: 'Erik',
    role: 'Licensed Therapist & Masseur',
    bio: 'Erik takes care of our guests and our team alike — with skilled hands and a calm presence that makes recovery feel effortless.',
    photo: 'images/team/erik.jpg',
  },
  {
    id: 'mark',
    name: 'Mark',
    role: 'The Wallet',
    bio: 'Mark doesn\'t cook, doesn\'t guide, doesn\'t massage, and has never been to the spa. But without him, none of this would exist. He pays for everything and asks very few questions — exactly the kind of investor we like.',
    photo: 'images/team/mark.jpg',
  },
];
