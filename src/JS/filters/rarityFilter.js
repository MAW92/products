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

// Get the rarity filter element
const rarityFilter=document.getElementById('rarityFilter');

// Populate the filter menu
fetchCardAttributes()
  .then(data => {
    const rarities=data.rarities;

    rarities.forEach(rarity => {
      const option=document.createElement('option');
      option.value=rarity;
      option.textContent=rarity;
      rarityFilter.appendChild(option);
    });
  })
  .catch(error => {
    console.error('Error fetching card attributes:',error);
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
  });
}

// Get the filter button and filter menu elements
const filterBtn=document.getElementById('filterBtn');
const filterMenu=document.getElementById('filterMenu');

// Toggle the visibility of the filter menu when the filter button is clicked
filterBtn.addEventListener('click',() => {
  filterMenu.classList.toggle('hidden');
});

// Function to open the filter menu
function openFilterMenu() {
  filterBtn.addEventListener('click',() => {
    filterMenu.classList.remove('-translate-x-full');
  });
}

// Call the openFilterMenu function
openFilterMenu();
