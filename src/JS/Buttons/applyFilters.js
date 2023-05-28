function applyFilters() {
  const condition=document.getElementById("conditionFilter").value;
  const printing=document.getElementById("printingFilter").value;
  const rarity=document.getElementById("rarityFilter").value;

  console.log("Condition:",condition);
  console.log("Printing:",printing);
  console.log("Rarity:",rarity);
}
applyFilters();
// Event listener for the "Apply" button
document.getElementById("applyButton").addEventListener("click",applyFilters);
