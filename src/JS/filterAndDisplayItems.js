// Function to populate the filter menu with unique filter options
function populateFilterMenu() {
  const rarityFilter=document.getElementById("rarityFilter");
  const conditionFilter=document.getElementById("conditionFilter");
  const printingFilter=document.getElementById("printingFilter");

  const uniqueRarities=new Set();
  const uniqueConditions=new Set();
  const uniquePrintings=new Set();

  // Fetch all product cards
  const allCards=Array.from(document.getElementsByClassName("product-card"));

  // Extract unique filter options
  allCards.forEach((card) => {
    uniqueRarities.add(card.dataset.rarity);
    uniqueConditions.add(card.dataset.condition);
    uniquePrintings.add(card.dataset.printing);
  });

  // Clear previous options
  rarityFilter.innerHTML="<option value='all'>All</option>";
  conditionFilter.innerHTML="<option value='all'>All</option>";
  printingFilter.innerHTML="<option value='all'>All</option>";

  // Add unique options to the filter menu
  uniqueRarities.forEach((rarity) => {
    const option=document.createElement("option");
    option.value=rarity;
    option.textContent=rarity;
    rarityFilter.appendChild(option);
  });

  uniqueConditions.forEach((condition) => {
    const option=document.createElement("option");
    option.value=condition;
    option.textContent=condition;
    conditionFilter.appendChild(option);
  });

  uniquePrintings.forEach((printing) => {
    const option=document.createElement("option");
    option.value=printing;
    option.textContent=printing;
    printingFilter.appendChild(option);
  });
}

// Filter products based on the selected options
function filterProducts() {
  const conditionFilter=document.getElementById("conditionFilter");
  const rarityFilter=document.getElementById("rarityFilter");
  const printingFilter=document.getElementById("printingFilter");

  // Get the selected filter values
  const selectedCondition=conditionFilter.value;
  const selectedRarity=rarityFilter.value;
  const selectedPrinting=printingFilter.value;

  // Fetch all product cards
  const allCards=Array.from(document.getElementsByClassName("product-card"));

  // Filter the product cards based on the selected options
  const filteredCards=allCards.filter((card) => {
    const conditionMatch=
      selectedCondition==="all"||card.dataset.condition===selectedCondition;
    const rarityMatch=selectedRarity==="all"||card.dataset.rarity===selectedRarity;
    const printingMatch=
      selectedPrinting==="all"||card.dataset.printing===selectedPrinting;

    return conditionMatch&&rarityMatch&&printingMatch;
  });

  // Display the filtered product cards
  filteredCards.forEach((card) => {
    card.style.display="block";
  });

  // Hide the non-matching product cards
  allCards.forEach((card) => {
    if(!filteredCards.includes(card)) {
      card.style.display="none";
    }
  });
}

// Event listeners for the filter menu
const applyFilterBtn=document.getElementById("applyFilterBtn");
applyFilterBtn.addEventListener("click",filterProducts);

// Fetch the products and display the cards
fetchProducts();

// Populate the filter menu
populateFilterMenu();
