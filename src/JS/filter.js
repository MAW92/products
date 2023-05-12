filter();

function filter() {
  const filterMenu=document.getElementById('filter-menu');
  const filterBtn=document.getElementById('filter-button');
  const cancelButton=document.getElementById('cancel-button');
  const updateBtn=document.getElementById('update-button');
  const tcgSelect=document.getElementById('tcg-select');
  const raritySelect=document.getElementById('rarity-select');
  const printingSelect=document.getElementById('printing-select');
  const setSelect=document.getElementById('set-select');
  const conditionSelect=document.getElementById('condition-select');
  filterBtn.addEventListener('click',() => {
    filterMenu.classList.remove('-translate-x-full');
  });
  cancelButton.addEventListener('click',() => {
    filterMenu.classList.add('-translate-x-full');
  });
  updateBtn.addEventListener('click',() => {
    const tcg=tcgSelect.checked;
    const rarity=raritySelect.value;
    const printing=printingSelect.value;
    const set=setSelect.value;
    const condition=conditionSelect.value;
    console.log('Filters:',{ tcg,rarity,printing,set,condition });
    filterMenu.classList.add('-translate-x-full');
  });
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
}