// Fetch the products and card attributes data
fetch('products.json')
  .then(response => response.json())
  .then(products => {
    fetch('cardAttributes.json')
      .then(response => response.json())
      .then(cardAttributes => {
        populateProductCards(products,cardAttributes);
      });
  })
  .catch(error => console.log(error));

// Function to populate the product cards
function populateProductCards() {
  const cardList=document.getElementById("cardList");

  // Clear previous card list
  cardList.innerHTML="";

  // Loop through the product cards and create HTML elements
  productCards.forEach((card) => {
    const cardItem=document.createElement("div");
    cardItem.classList.add("bg-white","border","rounded","p-4");

    const cardImage=document.createElement("img");
    cardImage.setAttribute("src",card.imageUrl);
    cardImage.setAttribute("alt",card.name);
    cardImage.classList.add("mx-auto","h-40","w-40","object-cover");

    const cardName=document.createElement("h2");
    cardName.classList.add("text-xl","font-bold","mt-2");
    cardName.textContent=card.name;

    const cardDetails=document.createElement("div");
    cardDetails.classList.add("mt-2");

    const game=document.createElement("p");
    game.textContent=`Game: ${card.game}`;

    const attribute=document.createElement("p");
    attribute.textContent=`Attribute: ${card.attribute}`;

    const condition=document.createElement("p");
    condition.textContent=`Condition: ${card.condition}`;

    const rarity=document.createElement("p");
    rarity.textContent=`Rarity: ${card.rarity}`;

    // Append elements to the card item
    cardDetails.append(game,attribute,condition,rarity);
    cardItem.append(cardImage,cardName,cardDetails);
    cardList.appendChild(cardItem);
  });
}

// Call the function to populate the initial card list
populateProductCards();