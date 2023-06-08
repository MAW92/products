// Function to filter and display items based on selected filters
function filterAndDisplayItems() {
  // Get the selected filter values
  var rarityFilter=document.getElementById("rarityFilter").value;
  var conditionFilter=document.getElementById("conditionFilter").value;
  var printingFilter=document.getElementById("printingFilter").value;

  // Get all product cards
  var productCards=document.querySelectorAll("#productGrid .card");

  // Loop through each product card
  productCards.forEach(function (card) {
    // Get the data attributes of the card
    var rarity=card.getAttribute("rarity");
    var condition=card.getAttribute("condition");
    var printing=card.getAttribute("printing");

    // Check if the card matches the selected filters
    var isRarityMatch=
      rarityFilter===""||rarityFilter===rarity;
    var isConditionMatch=
      conditionFilter===""||conditionFilter===condition;
    var isPrintingMatch=
      printingFilter===""||printingFilter===printing;

    // Show/hide the card based on the filter matching
    if(isRarityMatch&&isConditionMatch&&isPrintingMatch) {
      card.style.display="block";
    } else {
      card.style.display="none";
    }
  });
}

// Call the filter and display function when the filter button is clicked
document
  .getElementById("applyButton")
  .addEventListener("click",filterAndDisplayItems);

// Function to display product cards
function displayProductCards(products) {
  // Get the product grid element
  const productGrid=document.getElementById("productGrid");
  const productCardList=document.getElementById("productCardList");

  // Clear previous results
  productGrid.innerHTML="";
  productCardList.innerHTML="";

  // Generate product cards and append to the grid
  products.forEach((product) => {
    const card=createProductCard(product);
    productGrid.appendChild(card);
    productCardList.appendChild(card.cloneNode(true));
  });

  // Call the filter and display function after updating the cards
  filterAndDisplayItems();
}

// Call the fetch function initially
fetchProducts();