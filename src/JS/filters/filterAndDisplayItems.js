function openFiltersModal() {
  const modal=document.getElementById("filtersModal");
  modal.style.display="block";
  modal.classList.add("slide-in");
}

function closeFiltersModal() {
  const modal=document.getElementById("filtersModal");
  modal.classList.add("slide-out");

  setTimeout(() => {
    modal.style.display="none";
    modal.classList.remove("slide-out");
  },500);
}

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
}

function fetchFilterValues() {
  fetch("./src/CardData/cardData.json")
    .then((response) => response.json())
    .then((data) => populateFilterOptions(data[0].cardData))
    .catch((error) => console.error("Error fetching filter values:",error));
}

function populateFilterOptions(data) {
  const attributeFilter=document.getElementById("attributeFilter");
  const conditionFilter=document.getElementById("conditionFilter");
  const printingFilter=document.getElementById("printingFilter");
  const gameFilter=document.getElementById("gameFilter");
  const languageFilter=document.getElementById("languageFilter");
  const rarityFilter=document.getElementById("rarityFilter");

  // Clear existing options
  attributeFilter.innerHTML="";
  conditionFilter.innerHTML="";
  printingFilter.innerHTML="";
  gameFilter.innerHTML="";
  languageFilter.innerHTML="";
  rarityFilter.innerHTML="";

  // Add options to the filter dropdowns based on the data
  data.forEach((item) => {
    // Add unique attributes to the attribute filter
    if(!attributeFilter.querySelector(`option[value="${item.attribute}"]`)) {
      attributeFilter.innerHTML+=`<option value="${item.attribute}">${item.attribute}</option>`;
    }

    // Add unique conditions to the condition filter
    if(!conditionFilter.querySelector(`option[value="${item.condition}"]`)) {
      conditionFilter.innerHTML+=`<option value="${item.condition}">${item.condition}</option>`;
    }

    // Add unique printings to the printing filter
    if(!printingFilter.querySelector(`option[value="${item.printing}"]`)) {
      printingFilter.innerHTML+=`<option value="${item.printing}">${item.printing}</option>`;
    }

    // Add unique games to the game filter
    if(!gameFilter.querySelector(`option[value="${item.game}"]`)) {
      gameFilter.innerHTML+=`<option value="${item.game}">${item.game}</option>`;
    }

    // Add unique languages to the language filter
    if(!languageFilter.querySelector(`option[value="${item.language}"]`)) {
      languageFilter.innerHTML+=`<option value="${item.language}">${item.language}</option>`;
    }

    // Add unique rarities to the rarity filter
    if(!rarityFilter.querySelector(`option[value="${item.rarity}"]`)) {
      rarityFilter.innerHTML+=`<option value="${item.rarity}">${item.rarity}</option>`;
    }

  });
}

// Call the function to fetch and populate the filter options
fetchFilterValues();

// Event listeners
document.getElementById("openButton").addEventListener("click",openFiltersModal);
document.getElementById("cancelButton").addEventListener("click",closeFiltersModal);
document.getElementById("applyButton").addEventListener("click",applyFilters);
