const filterMenu=document.getElementById('filter-menu');
const filterBtn=document.getElementById('filter-button');
const cancelButton=document.getElementById('cancel-button');
const updateBtn=document.getElementById('update-button');
const tcgSelect=document.getElementById('tcg-select');
const raritySelect=document.getElementById('rarity-select');
const printingSelect=document.getElementById('printing-select');
const setSelect=document.getElementById('set-select');
const conditionSelect=document.getElementById('condition-select');
const toggleButton=document.getElementById("toggleButton");
const productCardGrid=document.getElementById("productCardGrid");
const productCardList=document.getElementById("productCardList");
const cards=document.querySelectorAll(".product-card");

function toggleView() {
  toggleButton.addEventListener("click",() => {
    if(productCardGrid.classList.contains("hidden")) {
      // Switch to grid view
      productCardGrid.classList.remove("hidden");
      productCardList.classList.add("hidden");
      toggleButton.textContent="Switch to List View";
      // Ensure cards in the grid view are visible
      for(let i=0;i<cards.length;i++) {
        cards[i
        ].classList.remove("hidden");
      }
    } else {
      // Switch to list view
      productCardGrid.classList.add("hidden");
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
}
toggleView();

function updateBtn() {
  updateBtn.addEventListener('click',() => {

    console.log('Filters:',{ tcg,rarity,printing,set,condition });
    filterMenu.classList.add('-translate-x-full');
  });
}
updateBtn();


function filterBtn() {
  filterBtn.addEventListener('click',() => {
    filterMenu.classList.remove('-translate-x-full');
  });
}
filterBtn();


function cancelButton() {
  cancelButton.addEventListener('click',() => {
    filterMenu.classList.add('-translate-x-full');
  });
}
cancelButton();


function applyFilters() {
  const tcg=tcgSelect.checked;
  const rarity=raritySelect.value;
  const printing=printingSelect.value;
  const set=setSelect.value;
  const condition=conditionSelect.value;
  tcgSelect.addEventListener('change',applyFilters);
  raritySelect.addEventListener('change',applyFilters);
  printingSelect.addEventListener('change',applyFilters);
  setSelect.addEventListener('change',applyFilters);
  conditionSelect.addEventListener('change',applyFilters);
  console.log('Filters:',{ tcg,rarity,printing,set,condition });
}