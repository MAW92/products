// Fetch the product cards from 'products.json'
async function fetchProductCards() {
  try {
    const response=await fetch('./src/products.json');
    const data=await response.json();
    return data;
  } catch(error) {
    console.error('Error fetching product cards:',error);
    return [];
  }
}

// Fetch the card attributes from 'cardAttributes.json'
async function fetchCardAttributes() {
  try {
    const response=await fetch('./src/cardAttributes.json');
    const data=await response.json();
    return data;
  } catch(error) {
    console.error('Error fetching card attributes:',error);
    return [];
  }
}

// Function to populate the product cards
function populateProductCards(productCards) {
  const cardList=document.getElementById('cardList');

  // Clear previous card list
  cardList.innerHTML='';

  // Loop through the product cards and create HTML elements
  productCards.forEach((card) => {
    const cardItem=document.createElement('div');
    cardItem.classList.add('bg-white','border','rounded','p-4');

    const cardImage=document.createElement('img');
    cardImage.setAttribute('src',card.imageUrl);
    cardImage.setAttribute('alt',card.name);
    cardImage.classList.add('mx-auto','h-40','w-40','object-cover');

    const cardName=document.createElement('h2');
    cardName.classList.add('text-xl','font-bold','mt-2');
    cardName.textContent=card.name;

    const cardDetails=document.createElement('div');
    cardDetails.classList.add('mt-2');

    const game=document.createElement('p');
    game.textContent=`Game: ${card.game}`;

    const attribute=document.createElement('p');
    attribute.textContent=`Attribute: ${card.attribute}`;

    const condition=document.createElement('p');
    condition.textContent=`Condition: ${card.condition}`;

    const rarity=document.createElement('p');
    rarity.textContent=`Rarity: ${card.rarity}`;

    // Append elements to the card item
    cardDetails.append(game,attribute,condition,rarity);
    cardItem.append(cardImage,cardName,cardDetails);
    cardList.appendChild(cardItem);
  });
}

// Function to populate the rarity filters
function populateRarityFilters(cardAttributes) {
  const rarityFilters=document.getElementById('rarityFilters');

  // Clear previous filters
  rarityFilters.innerHTML='';

  // Get unique rarities from card attributes
  const rarities=[...new Set(cardAttributes.map((card) => card.rarity))];

  // Create checkboxes for each rarity
  rarities.forEach((rarity) => {
    const label=document.createElement('label');
    label.classList.add('block','my-1');

    const checkbox=document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.classList.add('mr-2');
    checkbox.addEventListener('change',() => {
      filterByRarity(rarity,checkbox.checked);
    });

    const labelText=document.createTextNode(rarity);
    label.append(checkbox,labelText);
    rarityFilters.appendChild(label);
  });
}

// Function to filter the product cards by rarity
function filterByRarity(rarity,checked) {
  const cardList=document.getElementById('cardList');
  const cards=cardList.querySelectorAll('.bg-white');

  cards.forEach((card) => {
    const cardRarity=card.querySelector('p:nth-child(4)').textContent.split(': ')[1];
    if(cardRarity===rarity&&checked) {
      card.style.display='block';
    } else if(cardRarity===rarity&&!checked) {
      card.style.display='none';
    }
  });
}

// Entry point
document.addEventListener('DOMContentLoaded',async () => {
  // Fetch the product cards and card attributes
  const productCards=await fetchProductCards();
  const cardAttributes=await fetchCardAttributes();

  // Populate the product cards and rarity filters
  populateProductCards(productCards);
  populateRarityFilters(cardAttributes);

  // Add event listener to the filter button
  const filterBtn=document.getElementById('filterBtn');
  filterBtn.addEventListener('click',toggleMenu);
});

// Function to toggle the filter menu
function toggleMenu() {
  const filterMenu=document.getElementById('filterMenu');
  const menuIcon=document.getElementById('menu-icon');
  const closeIcon=document.getElementById('close-icon');

  filterMenu.classList.toggle('translate-x-0');
  filterMenu.classList.toggle('-translate-x-full');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
}
