getProducts();

function getProducts() {
  const products = [
    {
      "itemId": 354434274670,
      "title": "Dragonite (4) 1st Edition Holo Rare Pokemon Fossil 1999",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/lpkAAOSwOuRj8vqB/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Dragonite-4-1st-Edition-Holo-Rare-Pokemon-Fossil-1999-/354434274670",
      "conditionDescription": "Lightly Played condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 138.69
    },
    {
      "itemId": 354630945980,
      "title": "Topps Pokemon The First Movie Booster Pack Sealed 1999",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/0RwAAOSwZPJj8gzH/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Topps-Pokemon-First-Movie-Booster-Pack-Sealed-1999-/354630945980",
      "conditionDescription": "New/Factory Sealed",
      "currentPrice": 33.69
    },
    {
      "itemId": 354434274684,
      "title": "Yugioh Tyrant Dragon LOD-034 First Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/B7sAAOSwjn9j6Den/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Tyrant-Dragon-LOD-034-First-Edition-Ultra-Rare-/354434274684",
      "conditionDescription": "Moderately Played condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 15.32
    },
    {
      "itemId": 354588496360,
      "title": "Yugioh Krystal Dragon MVP1-ENSV2 Limited Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/XAgAAOSwItljP25C/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Krystal-Dragon-MVP1-ENSV2-Limited-Ultra-Rare-/354588496360",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 3.06
    },
    {
      "itemId": 354434182695,
      "title": "Yugioh Super Quantal Mech Beast Lusterrex DANE-EN037 1st Edition Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/YdgAAOSwiW9jP25F/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Super-Quantal-Mech-Beast-Lusterrex-DANE-EN037-1st-Edition-Super-Rare-/354434182695",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.79
    },
    {
      "itemId": 354318125034,
      "title": "Yugioh Evil HERO Malicious Edge GLAS-EN003 Unlimited Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/FqsAAOSwHDtjP25F/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Evil-HERO-Malicious-Edge-GLAS-EN003-Unlimited-Super-Rare-/354318125034",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 5.27
    },
    {
      "itemId": 354434182568,
      "title": "Yugioh Igknight Templar CORE-EN028 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/1qwAAOSwroZjPOym/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Igknight-Templar-CORE-EN028-1st-Edition-Ultra-Rare-/354434182568",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.86
    },
    {
      "itemId": 354434274682,
      "title": "Yugioh Speedroid Dominobutterfly DPDG-EN004 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/vj4AAOSwgO5i9DOk/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Speedroid-Dominobutterfly-DPDG-EN004-1st-Edition-Ultra-Rare-/354434274682",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.84
    },
    {
      "itemId": 354434182612,
      "title": "Yugioh Penumbral Soldier Lady SOD-EN033 Unlimited Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/nXsAAOSwH9ljP25D/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Penumbral-Soldier-Lady-SOD-EN033-Unlimited-Super-Rare-/354434182612",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.18
    },
    {
      "itemId": 354434182540,
      "title": "Yugioh Chronomaly City Babylon PGLD-EN008 1st Edition Gold Secret Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/YOQAAOSwFYljPOyo/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Chronomaly-City-Babylon-PGLD-EN008-1st-Edition-Gold-Secret-Rare-/354434182540",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.3
    },
    {
      "itemId": 354434182635,
      "title": "Yugioh Green Gadget FIGA-EN006 1st Edition Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/~OgAAOSwP3xjP25B/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Green-Gadget-FIGA-EN006-1st-Edition-Super-Rare-/354434182635",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.35
    },
    {
      "itemId": 354434182682,
      "title": "Yugioh Super Quantal Mech King Great Magnus DUPO-EN093 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/AN0AAOSwqXdi9DOn/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Super-Quantal-Mech-King-Great-Magnus-DUPO-EN093-1st-Edition-Ultra-Rare-/354434182682",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.59
    },
    {
      "itemId": 354434274672,
      "title": "Yugioh Guardian Eatos LC03-EN003 Limited Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/8XQAAOSwxhFjPOyk/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Guardian-Eatos-LC03-EN003-Limited-Ultra-Rare-/354434274672",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.05
    },
    {
      "itemId": 354434182632,
      "title": "Yugioh Starlight Road PGL2-EN091 1st Edition Gold Secret Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/fvAAAOSwOcRjPOym/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Starlight-Road-PGL2-EN091-1st-Edition-Gold-Secret-Rare-/354434182632",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.34
    },
    {
      "itemId": 354588496307,
      "title": "Yugioh Gem-Knight Zirconia HA07-EN018 1st Edition Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/L7wAAOSwwpFi9DOo/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Gem-Knight-Zirconia-HA07-EN018-1st-Edition-Super-Rare-/354588496307",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.7
    },
    {
      "itemId": 354588496365,
      "title": "Yugioh Noble Knight Custennin CYHO-EN088 1st Edition Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/RHIAAOSwsWpjP24-/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Noble-Knight-Custennin-CYHO-EN088-1st-Edition-Super-Rare-/354588496365",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.14
    },
    {
      "itemId": 354434182662,
      "title": "Yugioh Kuribeh BROL-EN004 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/np0AAOSwQA5jP25D/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Kuribeh-BROL-EN004-1st-Edition-Ultra-Rare-/354434182662",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.93
    },
    {
      "itemId": 354434182718,
      "title": "Yugioh Number 21: Frozen Lady Justice PGL2-EN018 1st Edition Secret Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/G0oAAOSwqLhi9DOn/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Number-21-Frozen-Lady-Justice-PGL2-EN018-1st-Edition-Secret-Rare-/354434182718",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.54
    },
    {
      "itemId": 354630944662,
      "title": "Yugioh 335 Holo Cards Super Rare/Ultra Rare/Secret Rare Near Mint",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/r7QAAOSwXMJj58ie/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-335-Holo-Cards-Super-Rare-Ultra-Rare-Secret-Rare-Near-Mint-/354630944662",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 99.69
    },
    {
      "itemId": 354434274664,
      "title": "Yugioh Double Spell MFC-106 1st Edition Ultra Rare Magician's Force",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/HSkAAOSwGDBkB~WK/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Double-Spell-MFC-106-1st-Edition-Ultra-Rare-Magicians-Force-/354434274664",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 19.09
    },
    {
      "itemId": 354434274687,
      "title": "Yugioh Red Dragon Archfiend CT07-EN025 Limited Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/2GgAAOSwWO5j5phl/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Red-Dragon-Archfiend-CT07-EN025-Limited-Super-Rare-/354434274687",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 7.29
    },
    {
      "itemId": 354434182671,
      "title": "Yugioh Soul Pendulum DUPO-EN013 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/XBoAAOSw8wVjP25D/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Soul-Pendulum-DUPO-EN013-1st-Edition-Ultra-Rare-/354434182671",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.02
    },
    {
      "itemId": 354434182636,
      "title": "Yugioh Reinforcement of the Army PGLD-EN058 1st Edition Gold Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/1AYAAOSwwcpi9DOp/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Reinforcement-Army-PGLD-EN058-1st-Edition-Gold-Rare-/354434182636",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.81
    },
    {
      "itemId": 354434274674,
      "title": "Yugioh Dark Paladin LCYW-EN048 1st Edition Secret Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/p7wAAOSwmQRjWfND/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Dark-Paladin-LCYW-EN048-1st-Edition-Secret-Rare-/354434274674",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 99.69
    },
    {
      "itemId": 354588496301,
      "title": "Yugioh Iron Knight BLRR-EN007 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/DrQAAOSwx79jP25E/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Iron-Knight-BLRR-EN007-1st-Edition-Ultra-Rare-/354588496301",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.81
    },
    {
      "itemId": 354434182577,
      "title": "Yugioh Cyber Larva LC02-EN007 Limited Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/vtAAAOSw7NpjPOyl/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Cyber-Larva-LC02-EN007-Limited-Ultra-Rare-/354434182577",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.74
    },
    {
      "itemId": 354434182701,
      "title": "Yugioh Kuriboh FL1-EN003 Limited Secret Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/uw4AAOSwaOVj5pmE/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Kuriboh-FL1-EN003-Limited-Secret-Rare-/354434182701",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 10.5
    },
    {
      "itemId": 354434182527,
      "title": "Yugioh Armageddon Knight THSF-EN035 Unlimited Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/RjkAAOSw7CZjP25D/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Armageddon-Knight-THSF-EN035-Unlimited-Super-Rare-/354434182527",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.18
    },
    {
      "itemId": 354588496327,
      "title": "Yugioh Desert Twister TAEV-EN034 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/QtMAAOSw~qBjPOyk/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Desert-Twister-TAEV-EN034-1st-Edition-Ultra-Rare-/354588496327",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.1
    },
    {
      "itemId": 354434274667,
      "title": "Yugioh Smashing Ground PGL2-EN075 1st Edition Gold Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/2LQAAOSwTChi9DOn/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Smashing-Ground-PGL2-EN075-1st-Edition-Gold-Rare-/354434274667",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 3.36
    },
    {
      "itemId": 354434182657,
      "title": "Yugioh Stealth Kragen Spawn BROL-EN031 1st Edition Secret Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/64QAAOSwseFi9DOn/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Stealth-Kragen-Spawn-BROL-EN031-1st-Edition-Secret-Rare-/354434182657",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.67
    },
    {
      "itemId": 354434182722,
      "title": "Yugioh Tactical Exchanger DUPO-EN026 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/btgAAOSw4UpjP25C/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Tactical-Exchanger-DUPO-EN026-1st-Edition-Ultra-Rare-/354434182722",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.47
    },
    {
      "itemId": 354434182646,
      "title": "Yugioh Thunder Dragonhawk MP19-EN168 1st Edition Prismatic Secret Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/kfkAAOSwWR5i9DOp/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Thunder-Dragonhawk-MP19-EN168-1st-Edition-Prismatic-Secret-Rare-/354434182646",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 5.18
    },
    {
      "itemId": 354434182654,
      "title": "Yugioh Vortex the Whirlwind STOR-ENSP1 Limited Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/ehUAAOSw1DljPOyk/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Vortex-Whirlwind-STOR-ENSP1-Limited-Ultra-Rare-/354434182654",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 8.36
    },
    {
      "itemId": 354434182663,
      "title": "Yugioh Mahaama the Fairy Dragon MP21-EN218 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/0FsAAOSwqJZjPOyj/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Mahaama-Fairy-Dragon-MP21-EN218-1st-Edition-Ultra-Rare-/354434182663",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.29
    },
    {
      "itemId": 354588496274,
      "title": "Yugioh Sylvan Princessprite MACR-EN093 1st Edition Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/8iUAAOSwiFNjP25C/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Sylvan-Princessprite-MACR-EN093-1st-Edition-Super-Rare-/354588496274",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.92
    },
    {
      "itemId": 354434182542,
      "title": "Yugioh Dramaturge of Despia GFP2-EN098 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/5c4AAOSw7DBi9DOm/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Dramaturge-Despia-GFP2-EN098-1st-Edition-Ultra-Rare-/354434182542",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.13
    },
    {
      "itemId": 354588496347,
      "title": "Yugioh Exile of the Wicked LCKC-EN100 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/7HMAAOSwdlNjP25C/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Exile-Wicked-LCKC-EN100-1st-Edition-Ultra-Rare-/354588496347",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.85
    },
    {
      "itemId": 354588496298,
      "title": "Yugioh Dragonic Tactics LC02-EN012 Limited Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/14MAAOSwZvZjP24-/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Dragonic-Tactics-LC02-EN012-Limited-Ultra-Rare-/354588496298",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 8.36
    },
    {
      "itemId": 354434274669,
      "title": "Yugioh Painful Choice MRL-049 1st Edition Super Rare  Magic Ruler",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/YWcAAOSwxtpkB~Tg/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Painful-Choice-MRL-049-1st-Edition-Super-Rare-Magic-Ruler-/354434274669",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 18.59
    },
    {
      "itemId": 354434182709,
      "title": "Yugioh Hieratic Seal of Convocation GFTP-EN054 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/emIAAOSwfdZjP25C/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Hieratic-Seal-Convocation-GFTP-EN054-1st-Edition-Ultra-Rare-/354434182709",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.13
    },
    {
      "itemId": 354434274688,
      "title": "Yugioh Volcanic Doomfire CT04-EN004 Limited Secret Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/0d0AAOSwm7Bi9DOo/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Volcanic-Doomfire-CT04-EN004-Limited-Secret-Rare-/354434274688",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 7.91
    },
    {
      "itemId": 354434182573,
      "title": "Yugioh Hieratic Dragon of Tefnuit DUPO-EN080 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/oUwAAOSw-xxjP25F/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Hieratic-Dragon-Tefnuit-DUPO-EN080-1st-Edition-Ultra-Rare-/354434182573",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.41
    },
    {
      "itemId": 354434182563,
      "title": "Yugioh GranSolfachord Musecia DAMA-EN048 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/KFEAAOSwC7pjPOym/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-GranSolfachord-Musecia-DAMA-EN048-1st-Edition-Ultra-Rare-/354434182563",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.12
    },
    {
      "itemId": 354434182693,
      "title": "Yugioh Spellbook Magician of Prophecy BLLR-EN050 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/gzcAAOSwR1Ji9DOo/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Spellbook-Magician-Prophecy-BLLR-EN050-1st-Edition-Ultra-Rare-/354434182693",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 3.07
    },
    {
      "itemId": 354588496336,
      "title": "Yugioh Performapal King Bear YS16-EN002 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/5HwAAOSwujhjPOym/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Performapal-King-Bear-YS16-EN002-1st-Edition-Ultra-Rare-/354588496336",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.95
    },
    {
      "itemId": 354434182520,
      "title": "Yugioh Andro Sphinx EP1-EN002 Unlimited Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/tCYAAOSwErdjPOyl/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Andro-Sphinx-EP1-EN002-Unlimited-Ultra-Rare-/354434182520",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.1
    },
    {
      "itemId": 354434182679,
      "title": "Yugioh Vampire Familiar DASA-EN001 Unlimited Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/RF4AAOSwlqhjP25D/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Vampire-Familiar-DASA-EN001-Unlimited-Super-Rare-/354434182679",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.63
    },
    {
      "itemId": 354434274671,
      "title": "Yugioh Winged Kuriboh DR3-EN185 Unlimited Super Rare NM",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/0asAAOSw3iti9DOn/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Winged-Kuriboh-DR3-EN185-Unlimited-Super-Rare-NM-/354434274671",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 19.74
    },
    {
      "itemId": 354434182599,
      "title": "Yugioh Goblindbergh SP13-EN005 Unlimited Starfoil",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/AmQAAOSw8yFjCTZf/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Goblindbergh-SP13-EN005-Unlimited-Starfoil-/354434182599",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.41
    },
    {
      "itemId": 354588496284,
      "title": "Yugioh Dimension Reflector MVP1-EN021 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/OzQAAOSwcO1jP25E/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Dimension-Reflector-MVP1-EN021-1st-Edition-Ultra-Rare-/354588496284",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.82
    },
    {
      "itemId": 354434182609,
      "title": "Yugioh F.A. Dawn Dragster MP19-EN061 1st Edition Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/P7QAAOSwxUpi9DOm/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-F-A-Dawn-Dragster-MP19-EN061-1st-Edition-Super-Rare-/354434182609",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 3.12
    },
    {
      "itemId": 354588496304,
      "title": "Yugioh Mecha Phantom Beast Turtletracer LTGY-ENSP1 Limited Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/5xgAAOSw8xpjP25A/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Mecha-Phantom-Beast-Turtletracer-LTGY-ENSP1-Limited-Ultra-Rare-/354588496304",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.86
    },
    {
      "itemId": 354588496338,
      "title": "Yugioh Theinen the Great Sphinx EP1-EN001 Limited Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/iegAAOSwDX1jPOyl/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Theinen-Great-Sphinx-EP1-EN001-Limited-Ultra-Rare-/354588496338",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.63
    },
    {
      "itemId": 354434182538,
      "title": "Yugioh Borrelend Dragon GFP2-EN006 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/5MkAAOSw4F9i9DOn/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Borrelend-Dragon-GFP2-EN006-1st-Edition-Ultra-Rare-/354434182538",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.95
    },
    {
      "itemId": 354434182645,
      "title": "Yugioh Madolche Fresh Sistart GFTP-EN104 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/x1gAAOSwfaZjPOyo/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Madolche-Fresh-Sistart-GFTP-EN104-1st-Edition-Ultra-Rare-/354434182645",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.51
    },
    {
      "itemId": 354588496311,
      "title": "Yugioh Impcantation Penciplume MP19-EN171 Unlimited Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/yOEAAOSwmSJjP25D/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Impcantation-Penciplume-MP19-EN171-Unlimited-Super-Rare-/354588496311",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.42
    },
    {
      "itemId": 354620966520,
      "title": "Misty's Tentacruel Pokemon No.73 Gym Heroes Japanese Holo Swirl + Missing Rarity",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/EvMAAOSwv1ZkAvT-/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Mistys-Tentacruel-Pokemon-No-73-Gym-Heroes-Japanese-Holo-Swirl-Missing-Rarity-/354620966520",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 26.69
    },
    {
      "itemId": 354588496275,
      "title": "Yugioh Battlewasp - Pin the Bullseye BLHR-EN031 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/0eoAAOSwGK1i9DOn/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Battlewasp-Pin-Bullseye-BLHR-EN031-1st-Edition-Ultra-Rare-/354588496275",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 3.86
    },
    {
      "itemId": 354434274665,
      "title": "Yugioh Sephylon, the Ultimate Timelord GLD5-EN029 Limited Gold Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/TEsAAOSwCWxjPOyk/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Sephylon-Ultimate-Timelord-GLD5-EN029-Limited-Gold-Rare-/354434274665",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.82
    },
    {
      "itemId": 354588496294,
      "title": "Yugioh Cyber Dragon Drei SDCR-EN002 Unlimited Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/36EAAOSwGJljP25D/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Cyber-Dragon-Drei-SDCR-EN002-Unlimited-Super-Rare-/354588496294",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.3
    },
    {
      "itemId": 354434182624,
      "title": "Yugioh Linkslayer YS17-EN004 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/wfMAAOSwxN9i9DOm/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Linkslayer-YS17-EN004-1st-Edition-Ultra-Rare-/354434182624",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.21
    },
    {
      "itemId": 354434182678,
      "title": "Yugioh Vision HERO Witch Raider BLHR-EN060 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/qz0AAOSwx6hjP25E/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Vision-HERO-Witch-Raider-BLHR-EN060-1st-Edition-Ultra-Rare-/354434182678",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.41
    },
    {
      "itemId": 354434182622,
      "title": "Yugioh Evolzar Dolkka KICO-EN043 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/yXAAAOSwbF5i9DOp/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Evolzar-Dolkka-KICO-EN043-1st-Edition-Ultra-Rare-/354434182622",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.89
    },
    {
      "itemId": 354434182567,
      "title": "Yugioh Dark Hunter TDGS-EN033 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/m5cAAOSwPKdjPOyk/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Dark-Hunter-TDGS-EN033-1st-Edition-Ultra-Rare-/354434182567",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.18
    },
    {
      "itemId": 354588496369,
      "title": "Yugioh Inspiration BP03-EN232 1st Edition Mosaic Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/gdwAAOSwvVRjCTZf/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Inspiration-BP03-EN232-1st-Edition-Mosaic-Rare-/354588496369",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.82
    },
    {
      "itemId": 354618440477,
      "title": "2021 Pokemon 25th Anniversary McDonald’s Booster Pack McDonalds New Sealed",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/-20AAOSwp5xj8g9~/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/2021-Pokemon-25th-Anniversary-McDonald-s-Booster-Pack-McDonalds-New-Sealed-/354618440477",
      "conditionDescription": "New/Factory Sealed",
      "currentPrice": 9.61
    },
    {
      "itemId": 354588496333,
      "title": "Yugioh Odd-Eyes Meteorburst Dragon SDMP-EN041 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/gaoAAOSww9xjPOyn/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Odd-Eyes-Meteorburst-Dragon-SDMP-EN041-1st-Edition-Ultra-Rare-/354588496333",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.2
    },
    {
      "itemId": 354588496323,
      "title": "Yugioh Block Dragon SESL-EN038 1st Edition Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/LPEAAOSwmHRjP25E/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Block-Dragon-SESL-EN038-1st-Edition-Super-Rare-/354588496323",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.69
    },
    {
      "itemId": 354434182655,
      "title": "Yugioh Djinn Disserere of Rituals THSF-EN040 1st Edition Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/sfsAAOSwHy9jP25E/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Djinn-Disserere-Rituals-THSF-EN040-1st-Edition-Super-Rare-/354434182655",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.81
    },
    {
      "itemId": 354434182625,
      "title": "Yugioh Rope of Life BP02-EN176 Unlimited Mosaic Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/h4IAAOSwDwVjPOyn/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Rope-Life-BP02-EN176-Unlimited-Mosaic-Rare-/354434182625",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.81
    },
    {
      "itemId": 354434182668,
      "title": "Yugioh Witchcrafter Madame Verre DUOV-EN073 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/3UwAAOSwvBpjP25D/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Witchcrafter-Madame-Verre-DUOV-EN073-1st-Edition-Ultra-Rare-/354434182668",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.59
    },
    {
      "itemId": 354620966508,
      "title": "Yugioh Craneo Convocado (Summoned Skull) BIY-S004 1st Edition Common Spanish",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/O~QAAOSwQ8JkAHWf/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Craneo-Convocado-Summoned-Skull-BIY-S004-1st-Edition-Common-Spanish-/354620966508",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 26.69
    },
    {
      "itemId": 354434182572,
      "title": "Yugioh  Chaos Ruler, the Chaotic Magical Dragon MP21-EN128 1st Edition",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/WTcAAOSwmx5i9DOn/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Chaos-Ruler-Chaotic-Magical-Dragon-MP21-EN128-1st-Edition-/354434182572",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 3.42
    },
    {
      "itemId": 354588496287,
      "title": "Yugioh Vampire Domination DASA-EN011 Unlimited Secret Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/t4YAAOSwb3xi9DOn/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Vampire-Domination-DASA-EN011-Unlimited-Secret-Rare-/354588496287",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.39
    },
    {
      "itemId": 354588496306,
      "title": "Yugioh Vampire Sorcerer DASA-EN049 1st Edition Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/gxkAAOSwo-Ri9DOo/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Vampire-Sorcerer-DASA-EN049-1st-Edition-Super-Rare-/354588496306",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.2
    },
    {
      "itemId": 354434182541,
      "title": "Yugioh Drytron Meteonis Quadrantids GEIM-EN030 1st Edition Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/WtQAAOSwLgdjP249/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Drytron-Meteonis-Quadrantids-GEIM-EN030-1st-Edition-Super-Rare-/354434182541",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.41
    },
    {
      "itemId": 354434182559,
      "title": "Yugioh Geartown GFTP-EN108 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/URgAAOSwpOBjP25C/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Geartown-GFTP-EN108-1st-Edition-Ultra-Rare-/354434182559",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.1
    },
    {
      "itemId": 354434182552,
      "title": "Yugioh Amazoness Sage BP01-EN212 Unlimited Starfoil Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/N2cAAOSwMDpjPOym/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Amazoness-Sage-BP01-EN212-Unlimited-Starfoil-Rare-/354434182552",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.21
    },
    {
      "itemId": 354434182710,
      "title": "Yugioh Strike Ninja SHVA-EN021 1st Edition Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/i6EAAOSw3ldjP25E/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Strike-Ninja-SHVA-EN021-1st-Edition-Super-Rare-/354434182710",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.54
    },
    {
      "itemId": 354434182584,
      "title": "Yugioh Inspector Boarder DUDE-EN031 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/h6kAAOSw3yxjPOyk/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Inspector-Boarder-DUDE-EN031-1st-Edition-Ultra-Rare-/354434182584",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.71
    },
    {
      "itemId": 354434182597,
      "title": "Yugioh Koa'ki Meiru Ghoulungulate ANPR-EN082 Unlimited Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/XFwAAOSw2JtjP25E/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Koaki-Meiru-Ghoulungulate-ANPR-EN082-Unlimited-Ultra-Rare-/354434182597",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.31
    },
    {
      "itemId": 354588496305,
      "title": "Yugioh Thermal Genex HA02-EN028 Unlimited Secret Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/VRQAAOSwtqhjPOym/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Thermal-Genex-HA02-EN028-Unlimited-Secret-Rare-/354588496305",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.86
    },
    {
      "itemId": 354588496300,
      "title": "Yugioh Kaiser Sea Horse SKE-015 Unlimited Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/50QAAOSw6UdjP25E/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Kaiser-Sea-Horse-SKE-015-Unlimited-Ultra-Rare-/354588496300",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.41
    },
    {
      "itemId": 354434182602,
      "title": "Yugioh Melffy Mommy OP15-EN011 Unlimited Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/0egAAOSwGK1i9DOm/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Melffy-Mommy-OP15-EN011-Unlimited-Super-Rare-/354434182602",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 3.76
    },
    {
      "itemId": 354434182708,
      "title": "Yugioh World Chalice Guardragon MP18-EN047 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/GhEAAOSwmy9jPOym/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-World-Chalice-Guardragon-MP18-EN047-1st-Edition-Ultra-Rare-/354434182708",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.07
    },
    {
      "itemId": 354434182576,
      "title": "Yugioh Galaxy-Eyes Cipher Blade Dragon GFTP-EN059 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/eEEAAOSwdG1jPOyk/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Galaxy-Eyes-Cipher-Blade-Dragon-GFTP-EN059-1st-Edition-Ultra-Rare-/354434182576",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.08
    },
    {
      "itemId": 354588496344,
      "title": "Yugioh Night Dragolich NECH-EN034 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/KvgAAOSwH~NjP25G/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Night-Dragolich-NECH-EN034-1st-Edition-Ultra-Rare-/354588496344",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.25
    },
    {
      "itemId": 354588496291,
      "title": "Yugioh Accel Synchron SDSE-EN042 1st Edition Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/HzcAAOSwEBNi9DOp/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Accel-Synchron-SDSE-EN042-1st-Edition-Super-Rare-/354588496291",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.62
    },
    {
      "itemId": 354434185126,
      "title": "Yugioh Zaborg the Mega Monarch NECH-EN037 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/a~cAAOSwsMVi9DOn/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Zaborg-Mega-Monarch-NECH-EN037-1st-Edition-Ultra-Rare-/354434185126",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 3.83
    },
    {
      "itemId": 354588496342,
      "title": "Yugioh Gem-Merchant HA05-EN006 1st Edition Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/KL4AAOSwZMljP25G/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Gem-Merchant-HA05-EN006-1st-Edition-Super-Rare-/354588496342",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.79
    },
    {
      "itemId": 354588496363,
      "title": "Yugioh Naturia Pineapple HASE-EN002 Limited Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/e48AAOSwhVpjP25E/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Naturia-Pineapple-HASE-EN002-Limited-Super-Rare-/354588496363",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 3.12
    },
    {
      "itemId": 354434182650,
      "title": "Yugioh Psychic Wave BLAR-EN015 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/-dcAAOSwvo9jP25D/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Psychic-Wave-BLAR-EN015-1st-Edition-Ultra-Rare-/354434182650",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.84
    },
    {
      "itemId": 354588496337,
      "title": "Yugioh Time Thief Hack GFTP-EN066 1st Edition Ultra Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/O-cAAOSwyS5jP25E/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Time-Thief-Hack-GFTP-EN066-1st-Edition-Ultra-Rare-/354588496337",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.74
    },
    {
      "itemId": 354434182616,
      "title": "Yugioh Miracle Locus BP03-EN213 1st Edition Shatterfoil",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/TqgAAOSwSxJjCTZe/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Miracle-Locus-BP03-EN213-1st-Edition-Shatterfoil-/354434182616",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.74
    },
    {
      "itemId": 354588496319,
      "title": "Yugioh Jain, Lightsworn Paladin BP03-EN042 1st Edition Shatterfoil Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/pGIAAOSw7LljPOym/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Jain-Lightsworn-Paladin-BP03-EN042-1st-Edition-Shatterfoil-Rare-/354588496319",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 1.9
    },
    {
      "itemId": 354588496348,
      "title": "Yugioh Zoodiac Boarbow OP15-EN005 Unlimited Super Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/1vMAAOSwXxli9DOo/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Zoodiac-Boarbow-OP15-EN005-Unlimited-Super-Rare-/354588496348",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 4.33
    },
    {
      "itemId": 354434182687,
      "title": "Yugioh Spirit Reaper GLD4-EN011 Limited Gold Rare",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/mXgAAOSwsYli9DOp/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Spirit-Reaper-GLD4-EN011-Limited-Gold-Rare-/354434182687",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 8.36
    },
    {
      "itemId": 354588496326,
      "title": "Yugioh Hieratic Sun Dragon Overlord of Heliopolis GFTP-EN052 1st Edition",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/r6UAAOSwXARjPOyn/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Hieratic-Sun-Dragon-Overlord-Heliopolis-GFTP-EN052-1st-Edition-/354588496326",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 2.41
    },
    {
      "itemId": 354588496313,
      "title": "Yugioh Rivalry Of Warlords KICO-EN058 Rare 1st Edition NM",
      "galleryURL": "https://i.ebayimg.com/thumbs/images/g/0bEAAOSw4NBjydCc/s-l140.jpg",
      "viewItemURL": "https://www.ebay.com/itm/Yugioh-Rivalry-Warlords-KICO-EN058-Rare-1st-Edition-NM-/354588496313",
      "conditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment.",
      "currentPrice": 3.34
    }
  ];

  // Retrieve the product container element
  const productContainer = document.getElementById("product-container");

  // Loop through the product data and create a product card for each one
  products.forEach(product => {
    // Clone the product card template
    const productCard = document.getElementById("product-card").cloneNode(true);

    // Retrieve the HTML elements within the product card
    const viewItemURL = productCard.querySelector("#viewItemURL");
    const galleryURL = productCard.querySelector("#galleryURL");
    const title = productCard.querySelector("#title");
    const itemId = productCard.querySelector("#itemId");
    const conditionDescription = productCard.querySelector("#conditionDescription");
    const currentPrice = productCard.querySelector("#currentPrice");

    // Set the values of the elements using the product data
    viewItemURL.href = product.viewItemURL;
    galleryURL.src = product.galleryURL;
    title.innerText = product.title;
    itemId.innerText = product.itemId;
    conditionDescription.innerText = product.conditionDescription;
    currentPrice.innerText = `Price: $${product.currentPrice}`;
    shipping.innerText = "S&H: $0.60";

    // Append the populated product card to the product container element
    productContainer.appendChild(productCard);
  });
}
