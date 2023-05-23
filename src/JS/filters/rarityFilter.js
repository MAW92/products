const fetchFilterOptions=async () => {
  try {
    const response=await fetch('./src/CardData/cardData.json');
    const data=await response.json();

    const gameFilterSelect=document.getElementById('game');
    const rarityFilterSelect=document.getElementById('rarity');
    const printingFilterSelect=document.getElementById('printing');
    const conditionFilterSelect=document.getElementById('condition');
    const attributeFilterSelect=document.getElementById('attribute');

    // Clear existing options
    gameFilterSelect.innerHTML='';
    rarityFilterSelect.innerHTML='';
    printingFilterSelect.innerHTML='';
    conditionFilterSelect.innerHTML='';
    attributeFilterSelect.innerHTML='';

    // Populate options
    data.forEach((card) => {
      // Populate game filter options
      if(cardData.Game) {
        const gameOption=document.createElement('option');
        gameOption.value=cardData.Game.toLowerCase().replace(/\s/g,'');
        gameOption.textContent=cardData.Game;
        gameFilterSelect.appendChild(gameOption);
      }

      // Populate rarity filter options
      if(cardData.Rarity) {
        const rarityOption=document.createElement('option');
        rarityOption.value=cardData.Rarity.toLowerCase().replace(/\s/g,'');
        rarityOption.textContent=cardData.Rarity;
        rarityFilterSelect.appendChild(rarityOption);
      }

      // Populate features filter options
      if(cardData.Printing) {
        const printingOption=document.createElement('option');
        printingOption.value=card.Printing.toLowerCase().replace(/\s/g,'');
        printingOption.textContent=cardData.Printing;
        printingFilterSelect.appendChild(printingOption);
      }

      // Populate condition filter options
      if(cardData.Condition) {
        const conditionOption=document.createElement('option');
        conditionOption.value=cardData.CardCondition.toLowerCase().replace(/\s/g,'');
        conditionOption.textContent=cardData.Condition;
        conditionFilterSelect.appendChild(conditionOption);
      }

      // Populate attribute filter options
      if(cardData.Attribute) {
        const attributeOption=document.createElement('option');
        attributeOption.value=cardData.Attribute.toLowerCase().replace(/\s/g,'');
        attributeOption.textContent=cardData.Attribute;
        attributeFilterSelect.appendChild(attributeOption);
      }
    });
  } catch(error) {
    console.error('Error fetching filter options:',error);
  }
};
