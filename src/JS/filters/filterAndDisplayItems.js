function filterAndDisplayItems() {
  const gameFilter=document.getElementById("game").value.toLowerCase().replace(/\s/g,'');
  const rarityFilter=document.getElementById("rarity").value.toLowerCase().replace(/\s/g,'');
  const printingFilter=document.getElementById("printing").value.toLowerCase().replace(/\s/g,'');
  const conditionFilter=document.getElementById("condition").value.toLowerCase().replace(/\s/g,'');
  const attributeFilter=document.getElementById("attribute").value.toLowerCase().replace(/\s/g,'');

  const products=document.querySelectorAll("#gridContainer .product-card");

  products.forEach((product) => {
    const game=product.dataset.game.toLowerCase().replace(/\s/g,'');
    const rarity=product.dataset.rarity.toLowerCase().replace(/\s/g,'');
    const printing=product.dataset.printing.toLowerCase().replace(/\s/g,'');
    const condition=product.dataset.condition.toLowerCase().replace(/\s/g,'');
    const attribute=product.dataset.attribute.toLowerCase().replace(/\s/g,'');

    const gameMatch=gameFilter===""||game===gameFilter;
    const rarityMatch=rarityFilter===""||rarity===rarityFilter;
    const printingMatch=printingFilter===""||printing===printingFilter;
    const conditionMatch=conditionFilter===""||condition===conditionFilter;
    const attributeMatch=attributeFilter===""||attribute===attributeFilter;

    if(gameMatch&&rarityMatch&&printingMatch&&conditionMatch&&attributeMatch) {
      product.style.display="block";
    } else {
      product.style.display="none";
    }
  });
}

// Trigger the filterAndDisplayItems function when filter options change
document.getElementById("game").addEventListener("change",filterAndDisplayItems);
document.getElementById("rarity").addEventListener("change",filterAndDisplayItems);
document.getElementById("printing").addEventListener("change",filterAndDisplayItems);
document.getElementById("condition").addEventListener("change",filterAndDisplayItems);
document.getElementById("attribute").addEventListener("change",filterAndDisplayItems);
