// Fetch the filter menu element
const rarityFilter=document.getElementById('rarityFilter');

// Event listener for the filter menu
rarityFilter.addEventListener('change',filterCardsByRarity);

// Function to fetch card attributes and populate the filter menu
function fetchCardAttributes() {
  return fetch('./src/cardAttributes.json')
    .then(response => response.json())
    .then(data => {
      const rarities=[...new Set(data.cards.map(card => card.rarity))];

      // Populate the filter menu
      rarities.forEach(rarity => {
        const option=document.createElement('option');
        option.value=rarity;
        option.textContent=rarity;
        rarityFilter.appendChild(option);
      });
    });
}

// Function to filter and display the cards based on rarity
function filterCardsByRarity() {
  return fetch('./src/cardAttributes.json')
    .then(response => response.json())
    .then(data => {
      const selectedRarity=rarityFilter.value;
      const cardList=document.getElementById('cardList');

      // Clear the previous card list
      cardList.innerHTML='';

      // Filter the cards based on the selected rarity
      const filteredCards=selectedRarity==='all'? data.cards:data.cards.filter(card => card.rarity===selectedRarity);

      // Display the filtered cards
      filteredCards.forEach(card => {
        const cardElement=document.createElement('div');
        cardElement.textContent=card.cardName;
        cardList.appendChild(cardElement);
      });
    });
}

// Toggle the visibility of the filter menu when the filter button is clicked
const filterBtn=document.getElementById('filterBtn');
const filterMenu=document.getElementById('filterMenu');
filterBtn.addEventListener('click',() => {
  filterMenu.classList.toggle('hidden');
});

// Fetch card attributes and populate the filter menu
fetchCardAttributes();
