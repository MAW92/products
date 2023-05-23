function createProductGrid() {
  const gridContainer=document.getElementById("gridContainer");

  // Fetch the first JSON file
  fetch("./src/CardData/cardData.json")
    .then(response => response.json())
    .then(cardData => {
      // Fetch the second JSON file
      fetch("./src/CardData/listingData.json")
        .then(response => response.json())
        .then(listingData => {
          // Combine or handle the data from both files as needed
          const products=[...cardData,...listingData]; // Combine the products from both files

          // Loop through the combined products array
          for(let i=0;i<products.length;i++) {
            const product=products[i];

            // Create the product card element
            const productCard=document.createElement("div");
            productCard.classList.add("w-fit","mx-auto");
            productCard.innerHTML=`
          <a href="${product.viewItemURL}" target="_blank" title="View on eBay">
            <div class="py-2">
              <div class="flex flex-wrap items-center">
                <img src="${product.galleryURL}" alt="${product.Title}" class="w-24 object-scale-down rounded-lg">
                <div class="ml-4">
                  <h3 class="text-lg font-semibold">${product.Title}</h3>
                  <p class="mt-2">$${product.Price}</p>
                  <p class="mb-5">Shipping: $${product.Shipping}</p>
                </div>
              </div>
            </div>
          </a>`;

            // Append the product card to the grid container
            gridContainer.appendChild(productCard);
          }

        })
        .catch(error => {
          console.error("Error fetching second JSON file:",error);
        });
    })
    .catch(error => {
      console.error("Error fetching first JSON file:",error);
    });
}

// Call the function to create the product grid
createProductGrid();