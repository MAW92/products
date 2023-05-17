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