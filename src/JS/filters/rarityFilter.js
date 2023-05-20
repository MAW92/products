const fetchFilterOptions=async () => {
  try {
    const response=await fetch('./src/CardData/cardData.json');
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
      if(card.Game) {
        const gameOption=document.createElement('option');
        gameOption.value=card.Game.toLowerCase().replace(/\s/g,'');
        gameOption.textContent=card.Game;
        gameFilterSelect.appendChild(gameOption);
      }

      // Populate rarity filter options
      if(card.Rarity) {
        const rarityOption=document.createElement('option');
        rarityOption.value=card.Rarity.toLowerCase().replace(/\s/g,'');
        rarityOption.textContent=card.Rarity;
        rarityFilterSelect.appendChild(rarityOption);
      }

      // Populate features filter options
      if(card.Features) {
        const featuresOption=document.createElement('option');
        featuresOption.value=card.Features.toLowerCase().replace(/\s/g,'');
        featuresOption.textContent=card.Features;
        featuresFilterSelect.appendChild(featuresOption);
      }

      // Populate condition filter options
      if(card.CardCondition) {
        const conditionOption=document.createElement('option');
        conditionOption.value=card.CardCondition.toLowerCase().replace(/\s/g,'');
        conditionOption.textContent=card.CardCondition;
        conditionFilterSelect.appendChild(conditionOption);
      }

      // Populate attribute filter options
      if(card.Attribute) {
        const attributeOption=document.createElement('option');
        attributeOption.value=card.Attribute.toLowerCase().replace(/\s/g,'');
        attributeOption.textContent=card.Attribute;
        attributeFilterSelect.appendChild(attributeOption);
      }
    });
  } catch(error) {
    console.error('Error fetching filter options:',error);
  }
};
