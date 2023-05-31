// Function to fetch JSON data from an external file
async function fetchProducts() {
  try {
    const response=await fetch("./cardData.json");
    const data=await response.json();

    // Extract the listingData array from the JSON
    const listingData=data.listingData;

    // Convert the fetched data into a list of products
    products=listingData.map((productData) => ({
      viewItemURL: productData.viewItemURL,
      galleryURL: productData.galleryURL,
      title: productData.Title,
      Price: productData.Price,
      Shipping: productData.Shipping,
      Condition: productData.Condition,
      Rarity: productData.Rarity,
      Printing: productData.Printing
    }));

    // Display the product cards
    displayProductCards(products);

    // Populate the filter menu
    populateFilterMenu();
  } catch(error) {
    console.log("Error fetching products:",error);
  }
}

// Function to populate the filter menu
function populateFilterMenu() {
  const rarityFilter=document.getElementById('rarityFilter');
  const conditionFilter=document.getElementById('conditionFilter');
  const printingFilter=document.getElementById('printingFilter');

  // Get unique values for each filter option
  const uniqueRarities=[...new Set(products.map(product => product.Rarity))];
  const uniqueConditions=[...new Set(products.map(product => product.Condition))];
  const uniquePrintings=[...new Set(products.map(product => product.Printing))];

  // Add options to the filter menu
  uniqueRarities.forEach(rarity => {
    const option=document.createElement('option');
    option.value=rarity;
    option.textContent=rarity;
    rarityFilter.appendChild(option);
  });

  uniqueConditions.forEach(condition => {
    const option=document.createElement('option');
    option.value=condition;
    option.textContent=condition;
    conditionFilter.appendChild(option);
  });

  uniquePrintings.forEach(printing => {
    const option=document.createElement('option');
    option.value=printing;
    option.textContent=printing;
    printingFilter.appendChild(option);
  });
}

// Filter products based on the selected options
function filterProducts() {
  const conditionFilter=document.getElementById('conditionFilter');
  const rarityFilter=document.getElementById('rarityFilter');
  const printingFilter=document.getElementById('printingFilter');

  // Get the selected filter values
  const selectedCondition=conditionFilter.value;
  const selectedRarity=rarityFilter.value;
  const selectedPrinting=printingFilter.value;

  // Fetch all product cards
  const allCards=Array.from(document.getElementsByClassName('product-card'));

  // Filter the product cards based on the selected options
  const filteredCards=allCards.filter((card) => {
    const conditionMatch=selectedCondition==='all'||card.dataset.condition===selectedCondition;
    const rarityMatch=selectedRarity==='all'||card.dataset.rarity===selectedRarity;
    const printingMatch=selectedPrinting==='all'||card.dataset.printing===selectedPrinting;

    return conditionMatch&&rarityMatch&&printingMatch;
  });

  // Display the filtered product cards
  filteredCards.forEach((card) => {
    card.style.display='block';
  });

  // Hide the non-matching product cards
  allCards.forEach((card) => {
    if(!filteredCards.includes(card)) {
      card.style.display='none';
    }
  });
}

// Event listeners for the filter menu
const applyFilterBtn=document.getElementById('applyFilterBtn');
applyFilterBtn.addEventListener('click',filterProducts);

// Fetch the products and display the cards
fetchProducts();
