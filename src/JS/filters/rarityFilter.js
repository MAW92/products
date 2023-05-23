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
      if(card.Printing) {
        const printingOption=document.createElement('option');
        printingOption.value=card.Printing.toLowerCase().replace(/\s/g,'');
        printingOption.textContent=card.Printing;
        printingFilterSelect.appendChild(printingOption);
      }

      // Populate condition filter options
      if(card.Condition) {
        const conditionOption=document.createElement('option');
        conditionOption.value=card.Condition.toLowerCase().replace(/\s/g,'');
        conditionOption.textContent=card.Condition;
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