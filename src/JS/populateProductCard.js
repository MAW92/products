function populateProductCard(cardData,listingData) {
  for(let i=0;i<cardData.length;i++) {
    const card=cardData[i];
    const listing=listingData[i];

    // Create the product card element
    const productCard=document.createElement("div");
    productCard.classList.add("w-fit","mx-auto");
    productCard.innerHTML=`
      <a href="${listing.viewItemURL}"
         target="_blank"
         title="View on eBay"
         class="mt-2 hover:text-shadow text-white">
        <div class="w-fit border border-zinc-50 backdrop rounded-lg shadow-lg overflow-ellipsis will-change-transform hover:transform-gpu hover:duration-500 hover:ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-transparent hover:to-transparent hover:via-black hover:text-shadow text-white">
          <img src="${listing.galleryURL}"
               alt="${card.title}"
               class="w-full h-72 object-cover object-top rounded-t-lg">
          <div class="p-2 flex-wrap">
            <h3 class="text-lg font-black text-shadow text-white">${card.title}</h3>
            <p class="mt-2 text-shadow font-bold text-white">${card.Price}</p>
            <p class="text-shadow text-sm font-bold text-white">Shipping: $${card.Shipping}</p>
            <p class="mt-5 text-sm italic font-semibold text-shadow text-white">${card.Condition} condition, kept sleeved and stored in a safe environment.</p>
          </div>
        </div>
      </a>`;

    // Append the product card to the grid container
    gridContainer.appendChild(productCard);
  }
}

populateProductCard();