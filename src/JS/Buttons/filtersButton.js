// Get the filter button and filter menu elements
const filterBtn=document.getElementById('filterBtn');

// Function to open the filter menu
function openFilterMenu() {
  filterMenu.classList.remove('translate-x-full');
}

// Function to close the filter menu
function closeFilterMenu() {
  filterMenu.classList.add('translate-x-full');
}

// Event listener for opening the filter menu when the filter button is clicked
filterBtn.addEventListener('click',openFilterMenu);

// Event listener for closing the filter menu when the close button is clicked
closeFilterBtn.addEventListener('click',closeFilterMenu);
