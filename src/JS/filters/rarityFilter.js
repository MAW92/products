// Fetch the filter menu element
const rarityFilter=document.getElementById('rarityFilter');

// Function to fetch the data from "cardAttributes.json"
async function fetchCardAttributes() {
  try {
    const response=await fetch('./src/cardAttributes.json');
    const data=await response.json();
    return data;
  } catch(error) {
    console.log('Error fetching card attributes:',error);
    return [];
  }
}

// Function to populate the filter menu with the fetched data
async function populateFilterMenu() {
  const attributes=await fetchCardAttributes();

  // Get the unique rarities from the data
  const rarities=[...new Set(attributes.map(card => card.rarity))];

  // Populate the filter menu
  rarities.forEach(rarity => {
    const option=document.createElement('option');
    option.value=rarity;
    option.textContent=rarity;
    rarityFilter.appendChild(option);
  });
}

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
    cardElement.textContent=card.title;
    cardList.appendChild(cardElement);
  });
}

const filterBtn=document.getElementById('filterBtn');
const filterMenu=document.getElementById('filterMenu');

// Toggle the visibility of the filter menu when the filter button is clicked
filterBtn.addEventListener('click',() => {
  filterMenu.classList.toggle('hidden');
});

// Call the function to populate the filter menu with data
populateFilterMenu();
