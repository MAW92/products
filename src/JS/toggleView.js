// Function to toggle the filter menu
function toggleMenu() {
  const filterMenu=document.getElementById("filterMenu");
  const menuIcon=document.getElementById("menu-icon");
  const closeIcon=document.getElementById("close-icon");

  filterMenu.classList.toggle("translate-x-0");
  filterMenu.classList.toggle("-translate-x-full");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}

// Event listener for the filter button
const filterBtn=document.getElementById("filterBtn");
filterBtn.addEventListener("click",toggleMenu);
