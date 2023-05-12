function updateBtn() {
  updateBtn.addEventListener('click',() => {
    const tcg=tcgSelect.checked;
    const rarity=raritySelect.value;
    const printing=printingSelect.value;
    const set=setSelect.value;
    const condition=conditionSelect.value;
    console.log('Filters:',{ tcg,rarity,printing,set,condition });
    filterMenu.classList.add('-translate-x-full');
  });
}
