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
  const cardType=document.getElementById("cardTypeFilter").value;
  const monsterType=document.getElementById("monsterTypeFilter").value;
  const printing=document.getElementById("printingFilter").value;
  const game=document.getElementById("gameFilter").value;
  const language=document.getElementById("languageFilter").value;
  const rarity=document.getElementById("rarityFilter").value;
  const set=document.getElementById("setFilter").value;

  console.log("Attribute:",attribute);
  console.log("Condition:",condition);
  console.log("Card Type:",cardType);
  console.log("Monster Type:",monsterType);
  console.log("Printing:",printing);
  console.log("Game:",game);
  console.log("Language:",language);
  console.log("Rarity:",rarity);
  console.log("Set:",set);
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
  const cardTypeFilter=document.getElementById("cardTypeFilter");
  const monsterTypeFilter=document.getElementById("monsterTypeFilter");
  const printingFilter=document.getElementById("printingFilter");
  const gameFilter=document.getElementById("gameFilter");
  const languageFilter=document.getElementById("languageFilter");
  const rarityFilter=document.getElementById("rarityFilter");
  const setFilter=document.getElementById("setFilter");

  // Clear existing options
  attributeFilter.innerHTML="";
  conditionFilter.innerHTML="";
  cardTypeFilter.innerHTML="";
  monsterTypeFilter.innerHTML="";
  printingFilter.innerHTML="";
  gameFilter.innerHTML="";
  languageFilter.innerHTML="";
  rarityFilter.innerHTML="";
  setFilter.innerHTML="";

  // Add options to the filter dropdowns based on the data
  data.forEach((item) => {
    // Add unique attributes to the attribute filter
    if(!attributeFilter.querySelector(`option[value="${item.Attribute}"]`)) {
      attributeFilter.innerHTML+=`<option value="${item.Attribute}">${item.Attribute}</option>`;
    }

    // Add unique conditions to the condition filter
    if(!conditionFilter.querySelector(`option[value="${item.Condition}"]`)) {
      conditionFilter.innerHTML+=`<option value="${item.Condition}">${item.Condition}</option>`;
    }

    // Add unique card types to the card type filter
    if(!cardTypeFilter.querySelector(`option[value="${item.cardType}"]`)) {
      cardTypeFilter.innerHTML+=`<option value="${item.cardType}">${item.cardType}</option>`;
    }

    // Add unique monster types to the monster type filter
    if(!monsterTypeFilter.querySelector(`option[value="${item.monsterType}"]`)) {
      monsterTypeFilter.innerHTML+=`<option value="${item.monsterType}">${item.monsterType}</option>`;
    }

    // Add unique printings to the printing filter
    if(!printingFilter.querySelector(`option[value="${item.Printing}"]`)) {
      printingFilter.innerHTML+=`<option value="${item.Printing}">${item.Printing}</option>`;
    }

    // Add unique games to the game filter
    if(!gameFilter.querySelector(`option[value="${item.Game}"]`)) {
      gameFilter.innerHTML+=`<option value="${item.Game}">${item.Game}</option>`;
    }

    // Add unique languages to the language filter
    if(!languageFilter.querySelector(`option[value="${item.Language}"]`)) {
      languageFilter.innerHTML+=`<option value="${item.Language}">${item.Language}</option>`;
    }

    // Add unique rarities to the rarity filter
    if(!rarityFilter.querySelector(`option[value="${item.Rarity}"]`)) {
      rarityFilter.innerHTML+=`<option value="${item.Rarity}">${item.Rarity}</option>`;
    }

    // Add unique sets to the set filter
    if(!setFilter.querySelector(`option[value="${item.Set}"]`)) {
      setFilter.innerHTML+=`<option value="${item.Set}">${item.Set}</option>`;
    }
  });
}

// Call the function to fetch and populate the filter options
fetchFilterValues();

// Event listeners
document.getElementById("openButton").addEventListener("click",openFiltersModal);
document.getElementById("cancelButton").addEventListener("click",closeFiltersModal);
document.getElementById("applyButton").addEventListener("click",applyFilters);
