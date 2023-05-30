function filterAndDisplayCards() {
  // Fetch the card data from cardData.json
  fetch('cardData.json')
    .then(response => response.json())
    .then(data => {
      // Store the card data in a variable
      const cards=data.listingData;

      // Get the filter menu elements
      const rarityFilter=document.getElementById('rarityFilter');
      const conditionFilter=document.getElementById('conditionFilter');
      const printingFilter=document.getElementById('printingFilter');

      // Get the selected filter values
      const selectedRarity=rarityFilter.value;
      const selectedCondition=conditionFilter.value;
      const selectedPrinting=printingFilter.value;

      // Filter the cards based on the selected criteria
      const filteredCards=cards.filter(card => {
        // Filter by Condition
        if(selectedCondition!=='all'&&card.Condition!==selectedCondition) {
          return false;
        }

        // Filter by Rarity
        if(selectedRarity!=='all'&&card.Rarity!==selectedRarity) {
          return false;
        }

        // Filter by Printing
        if(selectedPrinting!=='all'&&card.Printing!==selectedPrinting) {
          return false;
        }

        return true;
      });

      // Display the filtered cards
      const cardList=document.getElementById('cardList');
      cardList.innerHTML=''; // Clear previous results

      filteredCards.forEach(card => {
        // Create a card element to display the details
        const cardElement=document.createElement('div');
        cardElement.classList.add('card');

        // Set the content of the card element
        cardElement.innerHTML=`
          <img src="${card.galleryURL}" alt="Card Image">
          <h3>${card.Title}</h3>
          <p>Condition: ${card.Condition}</p>
          <p>Rarity: ${card.Rarity}</p>
          <p>Printing: ${card.Printing}</p>
          <p>Price: $${card.Price}</p>
          <a href="${card.viewItemURL}" target="_blank">View Item</a>
        `;

        // Append the card element to the card list
        cardList.appendChild(cardElement);
      });
    })
    .catch(error => {
      console.error('Error fetching card data:',error);
    });
}

// Call the function to filter and display the cards
filterAndDisplayCards();

// Add event listeners for filter menu changes
const rarityFilter=document.getElementById('rarityFilter');
const conditionFilter=document.getElementById('conditionFilter');
const printingFilter=document.getElementById('printingFilter');

rarityFilter.addEventListener('change',filterAndDisplayCards);
conditionFilter.addEventListener('change',filterAndDisplayCards);
printingFilter.addEventListener('change',filterAndDisplayCards);
