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


  // Fetch the filter values from the JSON file
  function fetchFilterValues() {
    fetch("./src/cardData.json")
      .then((response) => response.json())
      .then((data) => populateFilterOptions(data[0].cardData))
      .catch((error) => console.error("Error fetching filter values:",error));
  }

  // Populate the filter options with the fetched values
  function populateFilterOptions(filterData) {
    const filterOptions=Object.keys(filterData[0]);

    filterOptions.forEach((option) => {
      const selectElement=document.getElementById(`${option}Filter`);
      const filterValues=Array.from(new Set(filterData.map((item) => item[option])));

      filterValues.forEach((value) => {
        const optionElement=document.createElement("option");
        optionElement.value=value;
        optionElement.textContent=value;
        selectElement.appendChild(optionElement);
      });
    });
  }

  // Call the function to fetch and populate the filter options
  fetchFilterValues();




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

  // Add options to the filter dropdowns based on the data
  // Replace this with your own code to populate the filter options

  data.forEach((item) => {
    // Add unique attributes to the attribute filter
    if(!attributeFilter.querySelector(`option[value="${item.attribute}"]`)) {
      attributeFilter.innerHTML+=`<option value="${item.attribute}">${item.attribute}</option>`;
    }

    // Add unique conditions to the condition filter
    if(!conditionFilter.querySelector(`option[value="${item.condition}"]`)) {
      conditionFilter.innerHTML+=`<option value="${item.condition}">${item.condition}</option>`;
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

    // Add unique sets to the set filter
    if(!setFilter.querySelector(`option[value="${item.set}"]`)) {
      setFilter.innerHTML+=`<option value="${item.set}">${item.set}</option>`;
    }
  });
}

// Populate the filter options on page load
populateFilterOptions();

// Event listeners
document.getElementById("openButton").addEventListener("click",openFiltersModal);
document.getElementById("cancelButton").addEventListener("click",closeFiltersModal);
document.getElementById("applyButton").addEventListener("click",applyFilters);