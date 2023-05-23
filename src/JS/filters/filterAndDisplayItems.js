var cardData={};

function fetchCardData() {
  fetch('./src/CardData/cardData.json')
    .then(response => response.json())
    .then(data => {
      cardData=data;
      updateCardData();
    })
    .catch(error => {
      console.log('Error fetching card data:',error);
    });
}

function updateCardData() {
  var cardGame=data.Game;
  var cardSet=data.Set;
  var cardRarity=data.Rarity;
  var cardTitle=data.Title;
  var cardPrice=data.Price;
  var cardAttribute=data.Attribute;
  var cardNumber=data.Number;
  var monsterType=data.monsterType;
  var cardType=data.cardType;
  var cardPrinting=data.Printing;
  var cardLanguage=data.Language;

  document.getElementById('game').innerText=cardGame;
  document.getElementById('set').innerText=cardSet;
  document.getElementById('rarity').innerText=cardRarity;
  document.getElementById('title').innerText=cardTitle;
  document.getElementById('price').innerText=cardPrice;
  document.getElementById('attribute').innerText=cardAttribute;
  document.getElementById('number').innerText=cardNumber;
  document.getElementById('mtype').innerText=monsterType;
  document.getElementById('ctype').innerText=cardType;
  document.getElementById('printing').innerText=cardPrinting;
  document.getElementById('language').innerText=cardLanguage;
}

// Toggle menu visibility when "Filters" button is pressed
document.getElementById('filtersButton').addEventListener('click',function () {
  var menu=document.getElementById('menu');
  menu.classList.toggle('menu-visible');
});

fetchCardData();