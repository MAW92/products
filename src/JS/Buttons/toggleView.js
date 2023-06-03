const toggleButton=document.getElementById("toggleButton");
const productGrid=document.getElementById("productGrid");
const productCardList=document.getElementById("productCardList");
toggleButton.addEventListener("click",() => {
  if(productGrid.classList.contains("hidden")) {
    // Switch to grid view
    productGrid.classList.remove("hidden");
    productCardList.classList.add("hidden");
    toggleButton.textContent="Switch to List View";
    // Ensure cards in the grid view are visible
    const cards=document.querySelectorAll(".product-card");
    for(let i=0;i<cards.length;i++) {
      cards[i
      ].classList.remove("hidden");
    }
  } else {
    // Switch to list view
    productGrid.classList.add("hidden");
    productCardList.classList.remove("hidden");
    toggleButton.textContent="Switch to Grid View";
    // Ensure cards in the grid view are hidden
    const cards=document.querySelectorAll(".product-card");
    for(let i=0;i<cards.length;i++) {
      cards[i
      ].classList.add("hidden");
    }
  }
});