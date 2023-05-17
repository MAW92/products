let cards=[];

const filterButton=document.getElementById("filterButton");
const filterMenu=document.getElementById("filterMenu");

filterButton.addEventListener("click",() => {
  filterMenu.classList.toggle("-translate-x-full");
});

const handleFilterChange=() => {
  displayFilteredCards(filterCardsByFilters(
    Array.from(document.querySelectorAll('input[name="attributeFilter"]:checked')).map(e => e.value),
    Array.from(document.querySelectorAll('input[name="conditionFilter"]:checked')).map(e => e.value),
    // Repeat the same pattern for other filters
  ));
};

function filterCardsByFilters(attributeFilters,conditionFilters) {
  return cards.filter(card => {
    return (
      (attributeFilters.length===0||attributeFilters.includes(card.attribute))&&
      (conditionFilters.length===0||conditionFilters.includes(card.cardCondition))
      // Repeat the same pattern for other filters
    );
  });
}

function displayFilteredCards(filteredCards) {
  const cardList=document.getElementById("cardList");
  cardList.innerHTML="";

  filteredCards.forEach(card => {
    const productCard=document.createElement("div");
    productCard.classList.add(
      "border",
      "border-zinc-50",
      "backdrop",
      "rounded-lg",
      "shadow-lg",
      "overflow-hidden",
      "will-change-transform",
      "hover:transform-gpu",
      "hover:duration-300",
      "hover:ease-linear",
      "hover:-translate-y-1.5",
      "hover:bg-gradient-to-tr",
      "hover:bg-transparent",
      "hover:from-stone-400",
      "hover:to-neutral-100",
      "hover:via-neutral-950",
      "hover:text-shadow",
      "text-white"
    );

    productCard.innerHTML=`
          <a href="${card.viewItemURL}" title="View on eBay" class="w-full h-full">
            <img src="${card.galleryURL}" alt="${card.title}" class="w-full h-56 object-cover object-top border-b border-b-zinc-50 rounded-t-lg">
            <div class="p-4">
              <h3 class="text-xl font-black mb-2">${card.title}</h3>
              <p class="text-sm italic mb-2">${card.conditionDescription}</p>
              <div class="flex items-center justify-between pt-5">
                <p class="font-bold">$${card.currentPrice}</p>
                <p class="font-bold">S&H: $${card.shippingCost}</p>
              </div>
            </div>
          </a>
        `;

    cardList.appendChild(productCard);
  });
}

async function fetchCardData() {
  try {
    const response=await fetch("./src/cardAttributes.json");
    return await response.json();
  } catch(error) {
    console.log("Error fetching card data:",error);
    return [];
  }
}

async function initialize() {
  const cardData=await fetchCardData();
  cards=cardData.cards;
  displayFilteredCards(cards);
}

initialize();