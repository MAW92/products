// Function to filter and display items based on selected filters
function filterAndDisplayItems() {
  // Get the selected filter values
  var rarityFilter=document.getElementById("rarityFilter").value;
  var conditionFilter=document.getElementById("conditionFilter").value;
  var printingFilter=document.getElementById("printingFilter").value;

  // Get all product cards
  var productCards=document.querySelectorAll("#productGrid .product-card");

  // Loop through each product card
  productCards.forEach(function (card) {
    // Get the data attributes of the card
    var rarity=card.getAttribute("data-rarity");
    var condition=card.getAttribute("data-condition");
    var printing=card.getAttribute("data-printing");

    // Check if the card matches the selected filters
    var isRarityMatch=rarityFilter==="All"||rarity===rarityFilter;
    var isConditionMatch=conditionFilter==="All"||condition===conditionFilter;
    var isPrintingMatch=printingFilter==="All"||printing===printingFilter;

    // Show/hide the card based on the filter matching
    if(isRarityMatch&&isConditionMatch&&isPrintingMatch) {
      card.style.display="block";
    } else {
      card.style.display="none";
    }
  });
}

filterAndDisplayItems();
// Call the filter and display function when the filter button is clicked
document.getElementById("applyFilterBtn").addEventListener("click",filterAndDisplayItems);
