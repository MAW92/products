// Fetch the card data from cardData.json
fetch('cardData.json')
  .then(response => response.json())
  .then(data => {
    // Store the card data in a variable
    const cards=data[0].listingData;

    // Fetch the filter menu element
    const rarityFilter=document.getElementById('rarityFilter');
    const conditionFilter=document.getElementById('conditionFilter');
    const printingFilter=document.getElementById('printingFilter');

    // Get the unique values from the data
    const rarities=[...new Set(cards.map(card => card.Rarity))];
    const conditions=[...new Set(cards.map(card => card.Condition))];
    const printings=[...new Set(cards.map(card => card.Printing))];

    // Populate the filter menu
    rarities.forEach(rarity => {
      const option=document.createElement('option');
      option.value=rarity;
      option.textContent=rarity;
      rarityFilter.appendChild(option);
    });

    conditions.forEach(cardCondition => {
      const option=document.createElement('option');
      option.value=cardCondition;
      option.textContent=cardCondition;
      conditionFilter.appendChild(option);
    });

    printings.forEach(printing => {
      const option=document.createElement('option');
      option.value=printing;
      option.textContent=printing;
      printingFilter.appendChild(option);
    });

    // Event listeners for the filter menu
    rarityFilter.addEventListener('change',filterCardsByRarity);
    conditionFilter.addEventListener('change',filterCardsByCondition);
    printingFilter.addEventListener('change',filterCardsByPrinting);

    // Function to filter and display the cards based on rarity
    function filterCardsByRarity() {
      const selectedRarity=rarityFilter.value;
      const cardList=document.getElementById('cardList');

      // Clear the previous card list
      cardList.innerHTML='';

      // Filter the cards based on the selected rarity
      const filteredCards=selectedRarity==='all'? cards:cards.filter(card => card.Rarity===selectedRarity);

      // Display the filtered cards
      filteredCards.forEach(card => {
        const cardElement=document.createElement('div');
        cardElement.textContent=card.cardName;
        cardList.appendChild(cardElement);
      });
    }

    // Function to filter and display the cards based on condition
    function filterCardsByCondition() {
      const selectedCondition=conditionFilter.value;
      const cardList=document.getElementById('cardList');

      // Clear the previous card list
      cardList.innerHTML='';

      // Filter the cards based on the selected condition
      const filteredCards=selectedCondition==='all'? cards:cards.filter(card => card.Condition===selectedCondition);

      // Display the filtered cards
      filteredCards.forEach(card => {
        const cardElement=document.createElement('div');
        cardElement.textContent=card.cardName;
        cardList.appendChild(cardElement);
      });
    }

    // Function to filter and display the cards based on printing
    function filterCardsByPrinting() {
      const selectedPrinting=printingFilter.value;
      const cardList=document.getElementById('cardList');

      // Clear the previous card list
      cardList.innerHTML='';

      // Filter the cards based on the selected printing
      const filteredCards=selectedPrinting==='all'? cards:cards.filter(card => card.Printing===selectedPrinting);

      // Display the filtered cards
      filteredCards.forEach(card => {
        const cardElement=document.createElement('div');
        cardElement.textContent=card.cardName;
        cardList.appendChild(cardElement);
      });
    }

    const filterBtn=document.getElementById('filterBtn');
    const filterMenu=document.getElementById('filterMenu');

    // Toggle the visibility of the filter menu when the filter button is clicked
    filterBtn.addEventListener('click',() => {
      filterMenu.classList.toggle('hidden');
    });

    function openFilterMenu() {
      filterBtn.addEventListener('click',() => {
        filterMenu.classList.remove('-translate-x-full');
      });
    }

    openFilterMenu();
  })
  .catch(error => {
    console.error('Error fetching card data:',error);
  });
