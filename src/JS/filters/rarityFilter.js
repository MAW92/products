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


