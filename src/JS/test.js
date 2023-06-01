// Function to fetch data from the provided URL and parse it
function fetchProducts() {
  try {
    fetch("https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=MW-test-PRD-5b44d5824-5238f1d1&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&itemFilter(0).name=Seller&itemFilter(0).value=gottasellemall69&searchResult.item.GalleryInfoContainer&searchResult.item.shippinginfo.shippingServiceCost&searchResult.item.shippinginfo.shippingType&aspectHistogramContainer.aspect.valueName=Rare&paginationInput.entriesPerPage=100")
      .then(response => response.json())
      .then(data => {
        // Extract the item data array from the response
        const items=data.findItemsAdvancedResponse[0].searchResult[0].item;

        // Convert the fetched data into a list of products
        const products=items.map(item => ({
          viewItemURL: item.viewItemURL[0],
          galleryURL: item.galleryURL[0],
          title: item.title[0],
          Price: item.sellingStatus[0].currentPrice[0].__value__,
          Shipping: item.shippingInfo[0].shippingServiceCost[0].__value__||"0.00",
          Condition: item.condition[0].conditionDisplayName[0]
        }));

        // Display the product cards
        displayProductCards(products);
      })
      .catch(error => {
        console.log("Error fetching products:",error);
      });
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
          <p class="mt-2 text-shadow font-bold text-white">$${product.Price}</p>
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
  productGrid.innerHTML="";

  // Generate product cards and append to the grid
  products.forEach(product => {
    const card=createProductCard(product);
    productGrid.appendChild(card);
  });
}

// Call the fetch function initially
fetchProducts();