function applyFilters() {
  const attribute=document.getElementById("attributeFilter").value;
  const condition=document.getElementById("conditionFilter").value;
  const printing=document.getElementById("printingFilter").value;
  const game=document.getElementById("gameFilter").value;
  const language=document.getElementById("languageFilter").value;
  const rarity=document.getElementById("rarityFilter").value;

  console.log("Attribute:",attribute);
  console.log("Condition:",condition);
  console.log("Printing:",printing);
  console.log("Game:",game);
  console.log("Language:",language);
  console.log("Rarity:",rarity);

  // Call the function to update the grid with filtered cards
  filterProductGrid(attribute,condition,printing,game,language,rarity);


}
applyFilters();
// Event listener for the "Apply" button
document.getElementById("applyButton").addEventListener("click",applyFilters);
