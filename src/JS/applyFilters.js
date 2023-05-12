applyFilters();

const tcg=tcgSelect.value;
const rarity=raritySelect.value;
const printing=printingSelect.value;
const set=setSelect.value;
const condition=conditionSelect.value;
function applyFilters() {
  tcgSelect.addEventListener('change',applyFilters);
  raritySelect.addEventListener('change',applyFilters);
  printingSelect.addEventListener('change',applyFilters);
  setSelect.addEventListener('change',applyFilters);
  conditionSelect.addEventListener('change',applyFilters);
  console.log('Filters:',{ tcg,rarity,printing,set,condition });
}
