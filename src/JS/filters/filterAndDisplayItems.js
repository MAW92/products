function updateCardData() {
  var cardGame=cardData.Game;
  var cardSet=cardData.Set;
  var cardRarity=cardData.Rarity;
  var cardTitle=cardData.Title;
  var cardPrice=cardData.Price;
  var cardAttribute=cardData.Attribute;
  var cardNumber=cardData.Number;
  var monsterType=cardData.monsterType;
  var cardType=cardData.cardType;
  var cardPrinting=cardData.Printing;
  var cardLanguage=cardData.Language;

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