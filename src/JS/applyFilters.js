applyFilters();
tcgSelect.addEventListener('change',applyFilters);
raritySelect.addEventListener('change',applyFilters);
printingSelect.addEventListener('change',applyFilters);
setSelect.addEventListener('change',applyFilters);
conditionSelect.addEventListener('change',applyFilters);

function applyFilters() {
  const tcg=tcgSelect.value;
  const rarity=raritySelect.value;
  const printing=printingSelect.value;
  const set=setSelect.value;
  const condition=conditionSelect.value;

  console.log('Filters:',{ tcg,rarity,printing,set,condition });
}
