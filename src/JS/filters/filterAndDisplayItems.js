function filterProductGrid(attribute,condition,printing,game,language,rarity) {
  const gridContainer=document.getElementById("gridContainer");

  // Clear the existing grid
  gridContainer.innerHTML="";

  // Fetch the cardData.json file
  fetch("./cardData.json")
    .then((response) => {
      if(!response.ok) {
        throw new Error("Error fetching cardData: "+response.status);
      }
      return response.json();
    })
    .then((data) => {
      // Extract the listingData array
      const listingData=data[0].listingData;

      // Filter the listingData array based on the selected options
      const filteredCards=listingData.filter((card) => {
        return (
          card.Attribute===attribute&&
          card.Condition===condition&&
          card.Printing===printing&&
          card.Game===game&&
          card.Language===language&&
          card.Rarity===rarity
        );
      });

      // Loop through the filtered cards array
      filteredCards.forEach((card) => {
        // Create the product card element
        const productCard=document.createElement("div");
        productCard.classList.add("w-fit","mx-auto");
        productCard.innerHTML=`
          <a href="${card.viewItemURL}"
            target="_blank"
            title="View on eBay"
            class="mt-2 hover:text-shadow text-white">
            <div class="w-fit border border-zinc-50 backdrop rounded-lg shadow-lg overflow-ellipsis will-change-transform hover:transform-gpu hover:duration-500 hover:ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-transparent hover:to-transparent hover:via-black hover:text-shadow text-white">
              <img src="${card.galleryURL}"
                alt="${card.Title}"
                class="w-full h-72 object-cover object-top rounded-t-lg">
              <div class="p-2 flex-wrap">
                <h3 class="text-lg font-black text-shadow text-white">${card.Title}</h3>
                <p class="mt-2 text-shadow font-bold text-white">${card.Price}</p>
                <p class="text-shadow text-sm font-bold text-white">Shipping: $${card.Shipping}</p>
                <p class="mt-5 text-sm italic font-semibold text-shadow text-white">${card.Condition} condition, kept sleeved and stored in a safe environment.</p>
              </div>
            </div>
          </a>`;

        // Append the product card to the grid container
        gridContainer.appendChild(productCard);
      });
    })
    .catch((error) => {
      console.log("Error fetching cardData:",error);
    });
}

// Call the function to update the grid with filtered cards
filterProductGrid(attribute,condition,printing,game,language,rarity);
