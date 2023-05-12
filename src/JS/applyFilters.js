applyFilters();

function applyFilters() {
  tcgSelect.addEventListener('change',applyFilters);
  raritySelect.addEventListener('change',applyFilters);
  printingSelect.addEventListener('change',applyFilters);
  setSelect.addEventListener('change',applyFilters);
  conditionSelect.addEventListener('change',applyFilters);
  console.log('Filters:',{ tcg,rarity,printing,set,condition });
}
