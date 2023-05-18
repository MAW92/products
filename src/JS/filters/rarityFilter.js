function fetchFilterOptions() {
  return fetch('./src/cardAttributes.json')
    .then(response => response.json())
    .then(data => {
      const filterOptions={
        games: [],
        rarities: [],
        features: [],
        conditions: [],
        attributes: []
      };

      // Extract unique filter options from the JSON data
      data.forEach(card => {
        if(!filterOptions.games.includes(card.Game)) {
          filterOptions.games.push(card.Game);
        }
        if(!filterOptions.rarities.includes(card.Rarity)) {
          filterOptions.rarities.push(card.Rarity);
        }
        if(!filterOptions.features.includes(card.Features)) {
          filterOptions.features.push(card.Features);
        }
        if(!filterOptions.conditions.includes(card.cardCondition)) {
          filterOptions.conditions.push(card.cardCondition);
        }
        if(card.Attribute&&!filterOptions.attributes.includes(card.Attribute)) {
          filterOptions.attributes.push(card.Attribute);
        }
      });

      // Populate the filter options in the HTML select elements
      const gameFilterSelect=document.getElementById('gameFilter');
      filterOptions.games.forEach(game => {
        const option=document.createElement('option');
        option.value=game;
        option.textContent=game;
        gameFilterSelect.appendChild(option);
      });

      const rarityFilterSelect=document.getElementById('rarityFilter');
      filterOptions.rarities.forEach(rarity => {
        const option=document.createElement('option');
        option.value=rarity;
        option.textContent=rarity;
        rarityFilterSelect.appendChild(option);
      });

      const featuresFilterSelect=document.getElementById('featuresFilter');
      filterOptions.features.forEach(feature => {
        const option=document.createElement('option');
        option.value=feature;
        option.textContent=feature;
        featuresFilterSelect.appendChild(option);
      });

      const conditionFilterSelect=document.getElementById('conditionFilter');
      filterOptions.conditions.forEach(condition => {
        const option=document.createElement('option');
        option.value=condition;
        option.textContent=condition;
        conditionFilterSelect.appendChild(option);
      });

      const attributeFilterSelect=document.getElementById('attributeFilter');
      filterOptions.attributes.forEach(attribute => {
        const option=document.createElement('option');
        option.value=attribute;
        option.textContent=attribute;
        attributeFilterSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error fetching filter options:',error);
    });
}