function populateProductCard(data) {
  const gridContainer=document.getElementById("gridContainer");

  // Clear existing product cards
  gridContainer.innerHTML="";

  // Populate product cards
  data.forEach((product) => {
    const card=document.createElement("div");
    card.classList.add("product-card");
    card.setAttribute("data-game",product.game);
    card.setAttribute("data-rarity",product.rarity);
    card.setAttribute("data-printing",product.printing);
    card.setAttribute("data-condition",product.condition);
    card.setAttribute("data-attribute",product.attribute);

    const image=document.createElement("img");
    image.classList.add("product-image");
    image.src=product.image;
    card.appendChild(image);

    const title=document.createElement("div");
    title.classList.add("product-title");
    title.textContent=product.title;
    card.appendChild(title);

    const price=document.createElement("div");
    price.classList.add("product-price");
    price.textContent=product.price;
    card.appendChild(price);

    gridContainer.appendChild(card);
  });
}
