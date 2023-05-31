// Get the filter button element
var filterButton=document.getElementById("filterBtn");

// Add click event listener to the filter button
filterButton.addEventListener("click",function () {
  // Code to show/hide the filter menu
  var filterMenu=document.getElementById("filterMenu");
  filterMenu.classList.toggle("translate-x-full");

  // Call the filter and display function when the filter menu is shown
  if(filterMenu.classList.contains("translate-x-full")) {
    filterAndDisplayItems();
  }
});
