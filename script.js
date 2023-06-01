// Function to populate the filter options for a given category
async function populateFilterOptions(category) {
  const filterSection=document.getElementById(`${category}FilterOptions`);

  // Clear existing options
  filterSection.innerHTML='';

  try {
    // Fetch data from cardData.json
    const response=await fetch('./cardData.json');
    const jsonData=await response.json();
    const data=jsonData[0].listingData;

    // Get unique values for the selected category
    const options=[...new Set(data.map((card) => card[category]))];

    // Populate options
    options.forEach((option) => {
      const optionElement=document.createElement('div');
      optionElement.innerHTML=`
        <label class="inline-flex items-center">
          <input type="checkbox" class="form-checkbox" name="${category}Filter" value="${option}">
          <span class="ml-2">${option}</span>
        </label>
      `;
      filterSection.appendChild(optionElement);
    });
  } catch(error) {
    console.error('Error fetching card data:',error);
  }
}

// Event listener for category buttons
const categoryButtons=document.querySelectorAll('[aria-controls^="filter-section-"]');
categoryButtons.forEach((button) => {
  button.addEventListener('click',() => {
    const category=button.getAttribute('aria-controls').replace('filter-section-','');
    const expanded=button.getAttribute('aria-expanded')==='true';

    // Toggle expanded state
    button.setAttribute('aria-expanded',!expanded);

    // Populate filter options if expanded
    if(!expanded) {
      populateFilterOptions(category);
    }
  });
});

// Event listener for form submission
const form=document.querySelector('form');
form.addEventListener('submit',async (e) => {
  e.preventDefault();

  try {
    // Fetch data from cardData.json
    const response=await fetch('cardData.json');
    const jsonData=await response.json();
    const data=jsonData[0].listingData;

    // Get selected filters
    const selectedFilters={};
    const filterCheckboxes=document.querySelectorAll('[name$="Filter"]:checked');
    filterCheckboxes.forEach((checkbox) => {
      const category=checkbox.name.replace('Filter','');
      const value=checkbox.value;
      if(!selectedFilters[category]) {
        selectedFilters[category]=[];
      }
      selectedFilters[category].push(value);
    });

    // Perform further actions with the selected filters (e.g., filter card display)
    console.log('Selected Filters:',selectedFilters);
  } catch(error) {
    console.error('Error fetching card data:',error);
  }
});
