const filterMenu=document.getElementById('filterMenu');
const applyFilterBtn=document.getElementById('applyFilterBtn');
const closeFilterBtn=document.getElementById('closeFilterBtn');
const updateBtn=document.getElementById('updateBtn');
const rarityFilter=document.getElementById('rarityFilter');
const printingFilter=document.getElementById('printingFilter');
const conditionFilter=document.getElementById('conditionFilter');


updateBtn.addEventListener('click',() => {
  const rarity=rarityFilter.value;
  const printing=printingFilter.value;
  const condition=conditionFilter.value;
  console.log('Filters:',{ rarity,printing,condition });
  filterMenu.classList.add('-translate-x-full');
});

function applyFilters() {
  const rarity=rarityFilter.value;
  const printing=printingFilter.value;
  const condition=conditionFilter.value;

  console.log('Filters:',{ rarity,printing,condition });
}
// Get the filter button and filter menu elements
const filterBtn=document.getElementById('filterBtn');

// Function to open the filter menu
function openFilterMenu() {
  filterMenu.classList.remove('translate-x-full');
}

// Function to close the filter menu
function closeFilterMenu() {
  filterMenu.classList.add('translate-x-full');
}

// Event listener for opening the filter menu when the filter button is clicked
filterBtn.addEventListener('click',openFilterMenu);
rarityFilter.addEventListener('change',applyFilters);
printingFilter.addEventListener('change',applyFilters);
conditionFilter.addEventListener('change',applyFilters);
// Event listener for closing the filter menu when the close button is clicked
closeFilterBtn.addEventListener('click',closeFilterMenu);
filterBtn.addEventListener('click',() => { filterMenu.classList.remove('-translate-x-full'); });
closeFilterBtn.addEventListener('click',() => { filterMenu.classList.add('-translate-x-full'); });