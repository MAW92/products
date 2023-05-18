const fetchFilterOptions=async () => {
  try {
    const response=await fetch('./src/cardAttributes.json');
    const data=await response.json();

    const gameFilterSelect=document.getElementById('gameFilter');
    const rarityFilterSelect=document.getElementById('rarityFilter');
    const featuresFilterSelect=document.getElementById('featuresFilter');
    const conditionFilterSelect=document.getElementById('conditionFilter');
    const attributeFilterSelect=document.getElementById('attributeFilter');

    // Clear existing options
    gameFilterSelect.innerHTML='';
    rarityFilterSelect.innerHTML='';
    featuresFilterSelect.innerHTML='';
    conditionFilterSelect.innerHTML='';
    attributeFilterSelect.innerHTML='';

    // Populate options
    data.forEach((card) => {
      // Populate game filter options
      if(card.game) {
        const gameOption=document.createElement('option');
        gameOption.value=card.game.toLowerCase().replace(/\s/g,'');
        gameOption.textContent=card.game;
        gameFilterSelect.appendChild(gameOption);
      }

      // Populate rarity filter options
      if(card.rarity) {
        const rarityOption=document.createElement('option');
        rarityOption.value=card.rarity.toLowerCase().replace(/\s/g,'');
        rarityOption.textContent=card.rarity;
        rarityFilterSelect.appendChild(rarityOption);
      }

      // Populate features filter options
      if(card.features) {
        const featuresOption=document.createElement('option');
        featuresOption.value=card.features.toLowerCase().replace(/\s/g,'');
        featuresOption.textContent=card.features;
        featuresFilterSelect.appendChild(featuresOption);
      }

      // Populate condition filter options
      if(card.cardCondition) {
        const conditionOption=document.createElement('option');
        conditionOption.value=card.cardCondition.toLowerCase().replace(/\s/g,'');
        conditionOption.textContent=card.cardCondition;
        conditionFilterSelect.appendChild(conditionOption);
      }

      // Populate attribute filter options
      if(card.attribute) {
        const attributeOption=document.createElement('option');
        attributeOption.value=card.attribute.toLowerCase().replace(/\s/g,'');
        attributeOption.textContent=card.attribute;
        attributeFilterSelect.appendChild(attributeOption);
      }
    });
  } catch(error) {
    console.error('Error fetching filter options:',error);
  }
};

// Call the fetchFilterOptions function to fetch and populate the filter options
fetchFilterOptions();

const filterAndDisplayItems=() => {
  // Get selected filter options
  const selectedGame=document.getElementById('gameFilter').value;
  const selectedRarity=document.getElementById('rarityFilter').value;
  const selectedFeatures=document.getElementById('featuresFilter').value;
  const selectedCondition=document.getElementById('conditionFilter').value;
  const selectedAttribute=document.getElementById('attributeFilter').value;

  // Filter items based on selected options
  const filteredItems=cardItems.filter((card) => {
    const gameMatch=selectedGame==='all'||card.game.toLowerCase().replace(/\s/g,'')===selectedGame;
    const rarityMatch=selectedRarity==='all'||card.rarity.toLowerCase().replace(/\s/g,'')===selectedRarity;
    const featuresMatch=selectedFeatures==='all'||card.features.toLowerCase().replace(/\s/g,'')===selectedFeatures;
    const conditionMatch=selectedCondition==='all'||card.cardCondition.toLowerCase().replace(/\s/g,'')===selectedCondition;
    const attributeMatch=selectedAttribute==='all'||card.attribute.toLowerCase().replace(/\s/g,'')===selectedAttribute;
    return gameMatch&&rarityMatch&&featuresMatch&&conditionMatch&&attributeMatch;
  });

  // Display filtered items on the screen
  const resultsContainer=document.getElementById('resultsContainer');
  resultsContainer.innerHTML='';

  filteredItems.forEach((card) => {
    const cardElement=document.createElement('div');
    cardElement.textContent=card.title;
    resultsContainer.appendChild(cardElement);
  });
};

// Add event listener to the "Save" button
const saveButton=document.getElementById('saveButton');
saveButton.addEventListener('click',filterAndDisplayItems);
