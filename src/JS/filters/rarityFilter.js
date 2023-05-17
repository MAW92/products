// Sample card data
const cards=[
  {
    "title": "Yugioh Kuriboh FL1-EN003 Limited Secret Rare",
    "price": "9.03",
    "attribute": "Dark",
    "cardCondition": "Lightly Played (Excellent)",
    "cardName": "Kuriboh",
    "cardNumber": "FL1-EN003",
    "cardType": "Effect",
    "monsterType": "Fiend",
    "features": "Limited Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Secret Rare",
    "set": "Forbidden Legacy"
  },
  {
    "title": "Yugioh Double Spell MFC-106 1st Edition Ultra Rare Magician's Force",
    "price": "18.69",
    "cardCondition": "Lightly Played (Excellent)",
    "cardName": "Double Spell",
    "cardNumber": "MFC-106",
    "cardType": "Spell",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Ultra Rare",
    "set": "Magician's Force",
    "attribute": null,
    "monsterType": null
  },
  {
    "title": "Yugioh Painful Choice MRL-049 1st Edition Super Rare  Magic Ruler",
    "price": "18.52",
    "cardCondition": "Lightly Played (Excellent)",
    "cardName": "Painful Choice",
    "cardNumber": "MRL-049",
    "cardType": "Spell",
    "monsterType": "Not Applicable",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Super Rare",
    "set": "Magic Ruler",
    "attribute": null
  },
  {
    "title": "Yugioh Winged Kuriboh DR3-EN185 Unlimited Super Rare NM",
    "price": "17.69",
    "attribute": "Light",
    "cardCondition": "Near Mint or Better",
    "cardName": "Winged Kuriboh",
    "cardNumber": "DR3-EN185",
    "cardType": "Effect",
    "monsterType": "Fairy",
    "features": "Unlimited",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Super Rare",
    "set": "Dark Revelation Volume 3"
  },
  {
    "title": "Yugioh Rivalry Of Warlords KICO-EN058 Rare 1st Edition NM",
    "price": "2.71",
    "cardCondition": "Near Mint or Better",
    "cardName": "Rivalry of Warlords",
    "cardNumber": "KICO-EN058",
    "cardType": "Trap-Continuous",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Rare",
    "set": "King's Court",
    "attribute": null,
    "monsterType": null
  },
  {
    "title": "Yugioh Craneo Convocado (Summoned Skull) BIY-S004 1st Edition Common Spanish",
    "price": "15.69",
    "attribute": "Dark",
    "cardCondition": "Near Mint or Better",
    "cardName": "Summoned Skull",
    "cardNumber": "BIY-S004",
    "cardType": "Normal",
    "monsterType": "Fiend",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "Spanish",
    "rarity": "Common",
    "set": "Starter Deck: Yugi"
  },
  {
    "title": "Yugioh Battlewasp - Pin the Bullseye BLHR-EN031 1st Edition Ultra Rare NM",
    "price": "3.74",
    "attribute": "Wind",
    "cardCondition": "Near Mint or Better",
    "cardName": "Battlewasp - Pin the Bullseye",
    "cardNumber": "BLHR-EN031",
    "cardType": "Effect",
    "monsterType": "Insect",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Ultra Rare",
    "set": "Battles of Legend: Hero's Revenge"
  },
  {
    "title": "Yugioh Red Dragon Archfiend CT07-EN025 Limited Edition Super Rare NM",
    "price": "7.79",
    "attribute": "Dark",
    "cardCondition": "Near Mint or Better",
    "cardName": "Red Dragon Archfiend",
    "cardNumber": "CT07-EN025",
    "cardType": "Synchro/Effect Monster",
    "monsterType": "Dragon",
    "features": "Limited Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Super Rare",
    "set": "2010 Collector&#39;s Tin"
  },
  {
    "title": "Yugioh Zaborg the Mega Monarch NECH-EN037 1st Edition Ultra Rare NM",
    "price": "3.85",
    "attribute": "Light",
    "cardCondition": "Near Mint or Better",
    "cardName": "Zaborg the Mega Monarch",
    "cardNumber": "NECH-EN037",
    "cardType": "Effect",
    "monsterType": "Thunder",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Ultra Rare",
    "set": "The New Challengers"
  },
  {
    "title": "Yugioh Yuki-Musume, the Ice Mayakashi SAST-ENSE2 Limited Edition Super Rare NM",
    "price": "3.69",
    "attribute": "Water",
    "cardCondition": "Near Mint or Better",
    "cardName": "Yuki-Musume, the Ice Mayakashi",
    "cardNumber": "SAST-ENSE2",
    "cardType": "Effect",
    "monsterType": "Zombie",
    "features": "Limited Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Super Rare",
    "set": "Savage Strike Special Edition"
  },
  {
    "title": "Yugioh Generaider Boss Fight MYFI-EN037 1st Edition Super Rare NM",
    "price": "3.51",
    "cardCondition": "Near Mint or Better",
    "cardName": "Generaider Boss Fight",
    "cardNumber": "MYFI-EN037",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Super Rare",
    "set": "Mystic Fighters",
    "attribute": null,
    "cardType": "Trap",
    "monsterType": null
  },
  {
    "title": "Yugioh Spellbook Magician of Prophecy BLLR-EN050 1st Edition Ultra Rare NM",
    "price": "3.02",
    "attribute": "Water",
    "cardCondition": "Near Mint or Better",
    "cardName": "Spellbook Magician of Prophecy",
    "cardNumber": "BLLR-EN050",
    "cardType": "Effect",
    "monsterType": "Spellcaster",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Ultra Rare",
    "set": "Battles of Legend: Light's Revenge"
  },
  {
    "title": "Yugioh Chaos Ruler the Chaotic Magical Dragon MP21-EN128 1st Edition Ultra Rare",
    "price": "3.76",
    "attribute": "Dark",
    "cardCondition": "Near Mint or Better",
    "cardName": "Chaos Ruler, the Chaotic Magical Dragon",
    "cardNumber": "MP21-EN128",
    "cardType": "Synchro/Effect Monster",
    "monsterType": "Dragon",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Ultra Rare",
    "set": "Mega Tin of Ancient Battles"
  },
  {
    "title": "Yugioh Spirit Reaper GLD4-EN011 Limited Edition Gold Rare NM",
    "price": "6.69",
    "attribute": "Dark",
    "cardCondition": "Near Mint or Better",
    "cardName": "Spirit Reaper",
    "cardNumber": "GLD4-EN011",
    "cardType": "Effect",
    "monsterType": "Zombie",
    "features": "Limited Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Gold Rare",
    "set": "Gold Series 4: Pyramids Edition"
  },
  {
    "title": "Yugioh Skull Archfiend of Lightning BP01-EN006 1st Edition Starfoil Rare NM",
    "price": "4.2",
    "attribute": "Dark",
    "cardCondition": "Near Mint or Better",
    "cardName": "Skull Archfiend of Lightning",
    "cardNumber": "BP01-EN006",
    "cardType": "Effect",
    "monsterType": "Fiend",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Starfoil Rare",
    "set": "Battle Pack: Epic Dawn"
  },
  {
    "title": "Yugioh Phoenix Wing Wind Blast PGLD-EN070 1st Edition Gold Rare NM",
    "price": "3.43",
    "cardCondition": "Near Mint or Better",
    "cardName": "Phoenix Wing Wind Blast",
    "cardNumber": "PGLD-EN070",
    "cardType": "Trap",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Gold Rare",
    "set": "Premium Gold",
    "attribute": null,
    "monsterType": null
  },
  {
    "title": "Yugioh Accel Synchron SDSE-EN042 1st Edition Super Rare NM",
    "price": "2.85",
    "attribute": "Dark",
    "cardCondition": "Near Mint or Better",
    "cardName": "Accel Synchron",
    "cardNumber": "SDSE-EN042",
    "cardType": "Synchro/Effect Monster",
    "monsterType": "Machine",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Super Rare",
    "set": "- Yusei -"
  },
  {
    "title": "Yugioh Theinen the Great Sphinx EP1-EN001 Unlimited Edition Ultra Rare NM",
    "price": "3.75",
    "attribute": "Light",
    "cardCondition": "Near Mint or Better",
    "cardName": "Theinen the Great Sphinx",
    "cardNumber": "EP1-EN001",
    "cardType": "Effect",
    "monsterType": "Beast",
    "features": "Unlimited|Promo",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Ultra Rare",
    "set": null
  },
  {
    "title": "Yugioh Speedroid Dominobutterfly DPDG-EN004 1st Edition Ultra Rare NM",
    "price": "5.29",
    "attribute": "Wind",
    "cardCondition": "Near Mint or Better",
    "cardName": "Speedroid Dominobutterfly",
    "cardNumber": "DPDG-EN004",
    "cardType": "Pendulum",
    "monsterType": "Machine",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Ultra Rare",
    "set": "Duelist Pack: Dimensional Guardians"
  },
  {
    "title": "Yugioh Gladiator Beast Gyzarus LODT-EN044 Unlimited Edition Super Rare NM",
    "price": "4.75",
    "attribute": "Earth",
    "cardCondition": "Near Mint or Better",
    "cardName": "Gladiator Beast Gyzarus",
    "cardNumber": "LODT-EN044",
    "cardType": "Fusion/Effect Monster",
    "monsterType": "Winged Beast",
    "features": "Unlimited",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Super Rare",
    "set": "Light of Destruction"
  },
  {
    "title": "Yugioh Thunder Dragonhawk MP19-EN168 1st Edition Prismatic Secret Rare NM",
    "price": "5.21",
    "attribute": "Light",
    "cardCondition": "Near Mint or Better",
    "cardName": "Thunder Dragonhawk",
    "cardNumber": "MP19-EN168",
    "cardType": "Effect",
    "monsterType": "Thunder",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Prismatic Secret Rare",
    "set": "2019 Gold Sarcophagus Tin Mega Pack"
  },
  {
    "title": "Yugioh Smashing Ground PGL2-EN075 Limited Edition Gold Rare NM",
    "price": "4.34",
    "cardCondition": "Near Mint or Better",
    "cardName": "Smashing Ground",
    "cardNumber": "PGL2-EN075",
    "cardType": "Spell",
    "features": "Limited Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Gold Rare",
    "set": "Premium Gold 2",
    "attribute": null,
    "monsterType": null
  },
  {
    "title": "Yugioh Zoodiac Boarbow OP15-EN005 Unlimited Edition Super Rare NM",
    "price": "3.9",
    "attribute": "Earth",
    "cardCondition": "Near Mint or Better",
    "cardName": "Zoodiac Boarbow",
    "cardNumber": "OP15-EN005",
    "cardType": "Xyz/Effect Monster",
    "monsterType": "Beast-Warrior",
    "features": "Unlimited",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Super Rare",
    "set": "OTS Tournament Pack 15"
  },
  {
    "title": "Yugioh Volcanic Doomfire CT04-EN004 Limited Edition Secret Rare",
    "price": "5.69",
    "attribute": "Fire",
    "cardCondition": "Lightly Played (Excellent)",
    "cardName": "Volcanic Doomfire",
    "cardNumber": "CT04-EN004",
    "cardType": "Effect",
    "monsterType": "Pyro",
    "features": "Limited Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Secret Rare",
    "set": "- Yugi -"
  },
  {
    "title": "Yugioh Crusadia Arboria MP19-EN078 1st Edition Super Rare NM",
    "price": "3.85",
    "attribute": "Water",
    "cardCondition": "Near Mint or Better",
    "cardName": "Crusadia Arboria",
    "cardNumber": "MP19-EN078",
    "cardType": "Effect",
    "monsterType": "Warrior",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Super Rare",
    "set": "2019 Gold Sarcophagus Tin Mega Pack"
  },
  {
    "title": "Yugioh Krystal Dragon MVP1-ENSV2 Limited Edition Ultra Rare NM",
    "price": "4.62",
    "attribute": "Light",
    "cardCondition": "Near Mint or Better",
    "cardName": "Krystal Dragon",
    "cardNumber": "MVP1-ENSV2",
    "cardType": "Effect",
    "monsterType": "Dragon",
    "features": "Limited Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Ultra Rare",
    "set": "- Yugi -"
  },
  {
    "title": "Yugioh Live Twin Sunny's Snitch DAMA-EN062 1st Edition Super Rare NM",
    "price": "2.69",
    "cardCondition": "Near Mint or Better",
    "cardName": "Live Twin Sunnys Snitch",
    "cardNumber": "DAMA-EN062",
    "cardType": "Spell-Continuous",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Super Rare",
    "set": "Dawn of Majesty",
    "attribute": null,
    "monsterType": null
  },
  {
    "title": "Yugioh Tri-Brigade Airborne Assault PHRA-EN053 1st Edition Secret Rare NM",
    "price": "5.88",
    "cardCondition": "Near Mint or Better",
    "cardName": "Tri-Brigade Airborne Assault",
    "cardNumber": "PHRA-EN053",
    "cardType": "Spell-Quick Play",
    "features": "1st Edition",
    "game": "Yu-Gi-Oh! TCG",
    "language": "English",
    "rarity": "Secret Rare",
    "set": "Phantom Rage",
    "attribute": null,
    "monsterType": null
  },
  {
    "title": "2021 Pokemon 25th Anniversary McDonald's Booster Pack McDonalds New Sealed",
    "price": "10.01",
    "features": "Booster",
    "game": "Pokémon TCG",
    "language": "English",
    "set": "Anniversary Pack",
    "attribute": null,
    "cardCondition": null,
    "cardName": null,
    "cardNumber": null,
    "cardType": null,
    "monsterType": null,
    "rarity": null
  }
];

// Fetch the filter menu element
const rarityFilter=document.getElementById('rarityFilter');

// Get the unique rarities from the data
const rarities=[...new Set(cards.map(card => card.rarity))];

// Populate the filter menu
rarities.forEach(rarity => {
  const option=document.createElement('option');
  option.value=rarity;
  option.textContent=rarity;
  rarityFilter.appendChild(option);
});

// Event listener for the filter menu
rarityFilter.addEventListener('change',filterCardsByRarity);

// Function to filter and display the cards based on rarity
function filterCardsByRarity() {
  const selectedRarity=rarityFilter.value;
  const cardList=document.getElementById('cardList');

  // Clear the previous card list
  cardList.innerHTML='';

  // Filter the cards based on the selected rarity
  const filteredCards=selectedRarity==='all'? cards:cards.filter(card => card.rarity===selectedRarity);

  // Display the filtered cards
  filteredCards.forEach(card => {
    const cardElement=document.createElement('div');
    cardElement.textContent=card.cardName;
    cardList.appendChild(cardElement);
    // Fetch the products data from the local file
    populateProductCard();

    function populateProductCard() {
      fetch('./src/products.json')
        .then(response => response.json())
        .then(products => {
          // Loop through the products and create a card for each one
          products.forEach(product => {
            const productCard=document.createElement('div');
            productCard.classList.add('border','border-zinc-50','backdrop','rounded-lg','shadow-lg','overflow-hidden','will-change-transform','hover:transform-gpu','hover:duration-300','hover:ease-linear','hover:-translate-y-1.5','hover:bg-gradient-to-tr','hover:bg-transparent','hover:from-stone-400','hover:to-neutral-100','hover:via-neutral-950','hover:text-shadow','text-white');
            productCard.innerHTML=`
              <a href="${product.viewItemURL}" title="View on eBay" class="w-full h-full">
                <img src="${product.galleryURL}" alt="${product.title}" class="w-full h-56 object-cover object-top border-b border-b-zinc-50 rounded-t-lg">
                <div class="p-4">
                  <h3 class="text-xl font-black mb-2">${product.title}</h3>
                  <p class="text-sm italic mb-2">${product.conditionDescription}</p>
                  <div class="flex items-center justify-between pt-5">
                    <p class="font-bold">$${product.currentPrice}</p>
                    <p class="font-bold">S&H: $${product.shippingCost}</p>
                  </div>
                </div>
              </a>
            `;
          });
        });
    }
  });
}
const filterBtn=document.getElementById('filterBtn');
const filterMenu=document.getElementById('filterMenu');

// Toggle the visibility of the filter menu when the filter button is clicked
filterBtn.addEventListener('click',() => {
  filterMenu.classList.toggle('hidden');
});
function openFilterMenu() {
  filterBtn.addEventListener('click',() => {
    filterMenu.classList.remove('-translate-x-full');
  });
}
openFilterMenu();





