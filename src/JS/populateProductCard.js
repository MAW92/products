// Function to fetch and populate the product cards
function populateProductCard() {
  return fetch('./src/products.json')
    .then(response => response.json())
    .then(products => {
      const cardList=document.getElementById('cardList');

      // Clear the previous product cards
      cardList.innerHTML='';

      // Loop through the products and create a card for each one
      products.forEach(product => {
        const productCard=document.createElement('div');
        productCard.classList.add(
          'border',
          'border-zinc-50',
          'backdrop',
          'rounded-lg',
          'shadow-lg',
          'overflow-hidden',
          'will-change-transform',
          'hover:transform-gpu',
          'hover:duration-300',
          'hover:ease-linear',
          'hover:-translate-y-1.5',
          'hover:bg-gradient-to-tr',
          'hover:bg-transparent',
          'hover:from-stone-400',
          'hover:to-neutral-100',
          'hover:via-neutral-950',
          'hover:text-shadow',
          'text-white'
        );
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

        cardList.appendChild(productCard);
      });
    });
}

// Call the function to populate the product cards
populateProductCard();

const filterBtn=document.getElementById('filterBtn');
const filterMenu=document.getElementById('filterMenu');

// Toggle the visibility of the filter menu when the filter button is clicked
filterBtn.addEventListener('click',() => {
  filterMenu.classList.toggle('hidden');
});