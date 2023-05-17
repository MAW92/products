// Fetch the filter menu element
const rarityFilter=document.getElementById('rarityFilter');

// Event listener for the filter menu
rarityFilter.addEventListener('change',filterCardsByRarity);

// Function to fetch card attributes and populate the filter menu
function fetchCardAttributes() {
  fetch('./src/cardAttributes.json')
    .then(response => response.json())
    .then(data => {
      const rarities=[...new Set(data.cards.map(card => card.rarity))];

      // Populate the filter menu
      rarities.forEach(rarity => {
        const option=document.createElement('option');
        option.value=rarity;
        option.textContent=rarity;
        rarityFilter.appendChild(option);
      });
    });
}

// Function to filter and display the cards based on rarity
function filterCardsByRarity() {
  fetch('./src/cardAttributes.json')
    .then(response => response.json())
    .then(data => {
      const selectedRarity=rarityFilter.value;
      const cardList=document.getElementById('cardList');

      // Clear the previous card list
      cardList.innerHTML='';

      // Filter the cards based on the selected rarity
      const filteredCards=selectedRarity==='all'? data.cards:data.cards.filter(card => card.rarity===selectedRarity);

      // Display the filtered cards
      filteredCards.forEach(card => {
        const cardElement=document.createElement('div');
        cardElement.textContent=card.cardName;
        cardList.appendChild(cardElement);
      });

      // Fetch the products data from the local file
      populateProductCard();
    });
}

function populateProductCard() {
  fetch('./src/products.json')
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

const filterBtn=document.getElementById('filterBtn');
const filterMenu=document.getElementById('filterMenu');

// Toggle the visibility of the filter menu when the filter button is clicked
filterBtn.addEventListener('click',() => {
  filterMenu.classList.toggle('hidden');
});

// Fetch card attributes and populate the filter menu
fetchCardAttributes();
