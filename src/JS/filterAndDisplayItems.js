// Function to filter and display items based on selected filters
function filterAndDisplayItems() {
  // Get the selected filter values
  var rarityFilter=document.getElementById("rarityFilter").value;
  var conditionFilter=document.getElementById("conditionFilter").value;
  var printingFilter=document.getElementById("printingFilter").value;

  // Get all product cards
  var productCards=document.querySelectorAll("#productGrid .card");

  // Loop through each product card
  productCards.forEach(function (card) {
    // Get the data attributes of the card
    var rarity=card.getAttribute("rarityFilter");
    var condition=card.getAttribute("conditionFilter");
    var printing=card.getAttribute("printingFilter");

    // Check if the card matches the selected filters
    var isRarityMatch=rarityFilter==="All"||rarity===rarityFilter;
    var isConditionMatch=conditionFilter==="All"||condition===conditionFilter;
    var isPrintingMatch=printingFilter==="All"||printing===printingFilter;

    // Show/hide the card based on the filter matching
    if(isRarityMatch&&isConditionMatch&&isPrintingMatch) {
      card.style.display="block";
    } else {
      card.style.display="none";
    }
  });
}
document.getElementById("applyFilterBtn").addEventListener("click",filterAndDisplayItems);
filterAndDisplayItems();
// Call the filter and display function when the filter button is clicked

const filterMenu=document.getElementById('filterMenu');
const applyFilterBtn=document.getElementById('applyFilterBtn');
const closeFilterBtn=document.getElementById('closeFilterBtn');
const updateBtn=document.getElementById('updateBtn');
const rarityFilter=document.getElementById('rarityFilter');
const printingFilter=document.getElementById('printingFilter');
const conditionFilter=document.getElementById('conditionFilter');
filterBtn.addEventListener('click',() => {
  filterMenu.classList.remove('-translate-x-full');
});
closeFilterBtn.addEventListener('click',() => {
  filterMenu.classList.add('-translate-x-full');
});
updateBtn.addEventListener('click',() => {
  const rarity=rarityFilter.value;
  const printing=printingFilter.value;
  const condition=conditionFilter.value;
  console.log('Filters:',{ rarity,printing,condition });
  filterMenu.classList.add('-translate-x-full');
});
rarityFilter.addEventListener('change',applyFilters);
printingFilter.addEventListener('change',applyFilters);
conditionFilter.addEventListener('change',applyFilters);
function applyFilters() {
  const rarity=rarityFilter.value;
  const printing=printingFilter.value;
  const condition=conditionFilter.value;

  console.log('Filters:',{ rarity,printing,condition });
}