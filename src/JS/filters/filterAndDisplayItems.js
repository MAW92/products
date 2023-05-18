// Function to fetch card data from cardAttributes.json
async function fetchCardData() {
  try {
    const response=await fetch('cardAttributes.json');
    const data=await response.json();
    return data;
  } catch(error) {
    console.log('Error fetching card data:',error);
    return [];
  }
}

// Function to filter and display card items
function filterAndDisplayItems() {
  const gameFilter=document.getElementById('gameFilter').value;
  const rarityFilter=document.getElementById('rarityFilter').value;
  const featuresFilter=document.getElementById('featuresFilter').value;
  const conditionFilter=document.getElementById('conditionFilter').value;
  const attributeFilter=document.getElementById('attributeFilter').value;

  // Filter the card items based on the selected filters
  const filteredItems=cardItems.filter(item => {
    return (
      (gameFilter==='all'||item.game===gameFilter)&&
      (rarityFilter==='all'||item.rarity.toLowerCase()===rarityFilter.toLowerCase())&&
      (featuresFilter==='all'||item.features.toLowerCase()===featuresFilter.toLowerCase())&&
      (conditionFilter==='all'||item.cardCondition.toLowerCase()===conditionFilter.toLowerCase())&&
      (attributeFilter==='all'||item.attribute.toLowerCase()===attributeFilter.toLowerCase())
    );
  });

  // Display the filtered items on the screen (replace with your own code)
  const resultContainer=document.getElementById('resultContainer');
  resultContainer.innerHTML=''; // Clear previous results

  if(filteredItems.length>0) {
    filteredItems.forEach(item => {
      const cardElement=document.createElement('div');
      cardElement.textContent=item.title;
      resultContainer.appendChild(cardElement);
    });
  } else {
    const noResultsElement=document.createElement('div');
    noResultsElement.textContent='No results found.';
    resultContainer.appendChild(noResultsElement);
  }
}

// Event listener for the "Save" button
const saveButton=document.getElementById('saveButton');
saveButton.addEventListener('click',filterAndDisplayItems);

// Fetch the card data and then initialize the filtering
fetchCardData()
  .then(data => {
    // Replace the cardItems array with the fetched data
    const cardItems=data;

    // Initialize the filtering on page load
    filterAndDisplayItems();
  })
  .catch(error => {
    console.log('Error fetching card data:',error);
  });
