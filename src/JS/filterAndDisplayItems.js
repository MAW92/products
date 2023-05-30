// Function to fetch JSON data from an external file
async function fetchProducts() {
  try {
    const response=await fetch("./cardData.json");
    const data=await response.json();

    // Extract the listingData array from the JSON
    const listingData=data.listingData;

    // Convert the fetched data into a list of products
    const products=listingData.map((productData) => ({
      viewItemURL: productData.viewItemURL,
      galleryURL: productData.galleryURL,
      title: productData.Title,
      Price: productData.Price,
      Shipping: productData.Shipping,
      Condition: productData.Condition
    }));

    // Display the product cards
    displayProductCards(products);
  } catch(error) {
    console.log("Error fetching products:",error);
  }
}

// Function to create product cards
function createProductCard(product) {
  const card=document.createElement("div");
  card.innerHTML=`
    <a href="${product.viewItemURL}" target="_blank" title="View on eBay" class="mt-2 hover:text-shadow text-white">
      <div class="w-fit border border-zinc-50 backdrop rounded-lg shadow-lg overflow-ellipsis will-change-transform hover:transform-gpu hover:duration-500 hover:ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-transparent hover:to-transparent hover:via-black hover:text-shadow text-white">
        <img src="${product.galleryURL}" alt="${product.title}" class="w-full h-72 object-cover object-top rounded-t-lg">
        <div class="p-2 flex-wrap">
          <h3 class="text-lg font-black text-shadow text-white">${product.title}</h3>
          <p class="mt-2 text-shadow font-bold text-white">${product.Price}</p>
          <p class="text-shadow text-sm font-bold text-white">Shipping: $${product.Shipping}</p>
          <p class="mt-5 text-sm italic font-semibold text-shadow text-white">${product.Condition} condition, kept sleeved and stored in a safe environment.</p>
        </div>
      </div>
    </a>
  `;
  return card;
}

// Function to display product cards
function displayProductCards(products) {
  // Get the product grid element
  const productGrid=document.getElementById("productGrid");

  // Clear previous results
  productGrid.innerHTML='';

  // Generate product cards and append to the grid
  products.forEach((product) => {
    const card=createProductCard(product);
    productGrid.appendChild(card);
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
const conditionFilter=document.getElementById('conditionFilter');
const rarityFilter=document.getElementById('rarityFilter');
const printingFilter=document.getElementById('printingFilter');

conditionFilter.addEventListener('change',filterProducts);
rarityFilter.addEventListener('change',filterProducts);
printingFilter.addEventListener('change',filterProducts);

// Fetch the products and display the cards
fetchProducts();
