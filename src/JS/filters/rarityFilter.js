// Function to filter product cards by rarity
function filterByRarity(rarity) {
  const cardList=document.getElementById("cardList");

  // Clear previous card list
  cardList.innerHTML="";

  // Filter the product cards by rarity
  const filteredCards=productCards.filter((card) => card.rarity===rarity);

  // Populate the filtered cards
  filteredCards.forEach((card) => {
    // Create HTML elements for each filtered card (similar to the populateProductCards function)
    // Append the elements to the card list
  });
}

// Event listener for rarity filter checkboxes
const rarityCheckboxes=document.querySelectorAll('input[name="rarityFilter"]');
rarityCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change",() => {
    const selectedRarity=checkbox.value;

    if(checkbox.checked) {
      filterByRarity(selectedRarity);
    } else {
      // If the checkbox is unchecked, restore the original card list
      populateProductCards();
    }
  });
});
