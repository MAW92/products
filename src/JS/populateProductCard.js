function createProductGrid() {
  const gridContainer=document.getElementById("gridContainer");

  fetch("./src/products.json")
    .then(response => response.json())
    .then(products => {
      // Loop through the products array
      for(let i=0;i<products.length;i++) {
        const product=products[i];

        // Create the product card element
        const productCard=document.createElement("div");
        productCard.classList.add("w-full","md:w-1/2","lg:w-1/4","p-4");
        productCard.innerHTML=`
          <div id="productCard">
            <a href="${product.viewItemURL}" target="_blank" title="View on eBay">
              <div class="py-2">
                <div class="flex items-center">
                  <img src="${product.galleryURL}" alt="${product.title}" class="w-24 object-scale-down rounded-lg">
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold">${product.title}</h3>
                    <p class="mt-2">$${product.currentPrice}</p>
                    <p class="mb-5">Shipping: $${product.shippingCost}</p>
                    <p class="max-w-prose text-sm text-shadow italic">${product.conditionDescription}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        `;

        // Append the product card to the grid container
        gridContainer.appendChild(productCard);
      }
    })
    .catch(error => {
      console.error("Error fetching product data:",error);
    });
}

// Call the function to create the product grid
createProductGrid();
