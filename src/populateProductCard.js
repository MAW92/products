
// Fetch the products data from the local file
populateProductCard();

function populateProductCard() {
  fetch('./src/products.json')
    .then(response => response.json())
    .then(products => {
      // Loop through the products and create a card for each one
      products.forEach(product => {
        const productCard=document.createElement('div');
        productCard.classList.add('border','border-zinc-50','backdrop','rounded-lg','shadow-lg','overflow-hidden','will-change-transform','hover:transform-cpu','hover:duration-300','hover:ease-linear','hover:-translate-y-1.5','hover:bg-gradient-to-tr','hover:bg-transparent','hover:from-stone-400','hover:to-neutral-100','hover:via-neutral-950','hover:text-shadow','text-white');
        productCard.innerHTML=`
              <a href="${product.viewItemURL}" title="View on eBay" class="w-full h-full">
                <img src="${product.galleryURL}" alt="${product.title}" class="w-full h-56 object-cover object-top border-b border-b-zinc-50 rounded-t-lg">
                <div class="p-4">
                  <h3 class="text-xl font-black mb-2">${product.title}</h3>
                  <p class="text-sm italic mb-2">${product.conditionDescription}</p>
                  <div class="flex items-center justify-between pt-5">
                    <p class="font-bold">$${product.currentPrice}</p>
                    <p class="font-bold">S&H: $${product.shippingCost}</p>
                  </div>
                </div>
              </a>
            `;
        document.getElementById('product-grid').appendChild(productCard);
      });
    });
}
