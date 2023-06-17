function applyFilters() {
  const condition=document.getElementById("condition-filter").value;
  const printing=document.getElementById("features-filter").value;
  const rarity=document.getElementById("rarity-filter").value;

  console.log("Condition:",condition);
  console.log("Printing:",printing);
  console.log("Rarity:",rarity);
}

applyFilters();

// Event listener for the "Apply" button
document.getElementById("applyButton").addEventListener("click",applyFilters);
