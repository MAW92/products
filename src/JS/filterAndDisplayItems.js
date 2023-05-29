// Fetch card data from JSON file
fetch('./cardData.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer=document.getElementById('cardContainer');
    const rarityFilter=document.getElementById('rarityFilter');
    const conditionFilter=document.getElementById('conditionFilter');
    const printingFilter=document.getElementById('printingFilter');

    // Function to render cards based on filters
    function renderCards() {
      const rarity=rarityFilter.value;
      const condition=conditionFilter.value;
      const printing=printingFilter.value;

      cardContainer.innerHTML='';

      // Filter cards based on selected filters
      const filteredCards=data.filter(card => {
        if(rarity&&card.Rarity!==rarity) {
          return false;
        }
        if(condition&&card.Condition!==condition) {
          return false;
        }
        if(printing&&card.Printing!==printing) {
          return false;
        }
        return true;
      });

      // Render filtered cards
      filteredCards.forEach(card => {
        const cardElement=document.createElement('div');
        cardElement.className='p-4 bg-white rounded shadow';

        const cardTitle=document.createElement('h3');
        cardTitle.className='text-lg font-bold mb-2';
        cardTitle.textContent=card.Title;
        cardElement.appendChild(cardTitle);

        // Add other card information to the element

        cardContainer.appendChild(cardElement);
      });
    }

    // Event listeners for filter changes
    rarityFilter.addEventListener('change',renderCards);
    conditionFilter.addEventListener('change',renderCards);
    printingFilter.addEventListener('change',renderCards);

    // Initial rendering of all cards
    renderCards();
  })
  .catch(error => console.log(error));