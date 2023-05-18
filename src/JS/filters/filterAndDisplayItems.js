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
