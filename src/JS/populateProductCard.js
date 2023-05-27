function createProductGrid() {
  const gridContainer=document.getElementById("gridContainer");

  // Fetch the cardData.json file
  fetch("./src/CardData/cardData.json")
    .then(response => response.json())
    .then(_data => {
      // Extract the cardData and listingData arrays
      // Process the combined data or perform any other operations
      console.log(products);

      // Loop through the combined products array
      for(let i=0;i<products.length;i++) {
        const product=products;

        // Create the product card element
        const productCard=document.createElement("div");
        productCard.classList.add("w-fit","mx-auto");
        productCard.innerHTML=`
          <a href="${product.viewItemURL}"
            target="_blank"
            title="View on eBay"
            class="mt-2 hover:text-shadow text-white">
            <div class="w-fit border border-zinc-50 backdrop rounded-lg shadow-lg overflow-ellipsis will-change-transform hover:transform-gpu hover:duration-500 hover:ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-transparent hover:to-transparent hover:via-black hover:text-shadow text-white">
              <img src="${product.galleryURL}"
                alt="${product.title}"
                class="w-full h-72 object-cover object-top rounded-t-lg">
              <div class="p-2 flex-wrap">
                <h3 class="text-lg font-black text-shadow text-white">${product.title}</h3>
                <p class="mt-2 text-shadow font-bold text-white">${product.Price}</p>
                <p class="text-shadow text-sm font-bold text-white">Shipping: $${product.Shipping}</p>
                <p class="mt-5 text-sm italic font-semibold text-shadow text-white">${product.Condition} condition, kept sleeved and stored in a safe environment.</p>
              </div>
            </div>
          </a>`;

        // Append the product card to the grid container
        gridContainer.appendChild(productCard);
      }
    })
    .catch(error => {
      console.log("Error fetching cardData:",error);
    });
}

// Call the function to create the product grid
createProductGrid();
