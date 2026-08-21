const form = document.querySelector("#item-form");
const prodName = document.querySelector("#p-name");
const prodImage = document.querySelector("#p-image");
const prodPrice = document.querySelector("#p-price");
const prodQuantity = document.querySelector("#p-quantity");

let items = [];
let cart = [];

const cartList = document.querySelector("#cart-list");
const itemCount = document.querySelector("#item-count");

function render() {
  const marketList = document.querySelector("div.market-list");

  marketList.innerHTML = "";

  items.forEach((item) => {
    const product = document.createElement("div");
    product.classList.add("rend");

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;

    const name = document.createElement("span");
    name.textContent = item.name;

    const price = document.createElement("span");
    price.textContent = `Price: $${item.price.toFixed(2)}`;

    const quantity = document.createElement("span");
    quantity.textContent = `Quantity: ${item.quantity}`;

    const button = document.createElement("button");
    button.textContent = "Order";

    button.addEventListener("click", () => {
      orderProduct(item);
    });

    product.appendChild(image);
    product.appendChild(name);
    product.appendChild(price);
    product.appendChild(quantity);
    product.appendChild(button);

    marketList.appendChild(product);
  });

  itemCount.textContent = `${items.length} items remaining`;
}

function orderProduct(item) {
  const existingProduct = cart.find(
    (product) => product.id === item.id
  );

  if (existingProduct) {
    existingProduct.quantity += item.quantity;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
      done: false,
    });
  }

  renderCart();
}

function renderCart() {
  cartList.innerHTML = "";

  cart.forEach((item) => {
    const row = document.createElement("tr");

    const imageCell = document.createElement("td");
    const image = document.createElement("img");

    image.src = item.image;
    image.alt = item.name;

    imageCell.appendChild(image);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;

    const priceCell = document.createElement("td");
    priceCell.textContent = `$${item.price.toFixed(2)}`;

    const quantityCell = document.createElement("td");
    quantityCell.textContent = item.quantity;

    const totalCell = document.createElement("td");

    const total = item.price * item.quantity;

    totalCell.textContent = `$${total.toFixed(2)}`;

    const statusCell = document.createElement("td");
    statusCell.textContent = item.done ? "Completed" : "Pending";

    const actionCell = document.createElement("td");

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", () => {
      cart = cart.filter((product) => product.id !== item.id);

      renderCart();
    });

    actionCell.appendChild(removeButton);

    row.appendChild(imageCell);
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(quantityCell);
    row.appendChild(totalCell);
    row.appendChild(statusCell);
    row.appendChild(actionCell);

    cartList.appendChild(row);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = prodName.value.trim();
  const imageFile = prodImage.files[0];
  const price = Number(prodPrice.value);
  const quantity = Number(prodQuantity.value);

  if (!name || !imageFile || price < 0 || quantity < 1) {
    return;
  }

  const image = URL.createObjectURL(imageFile);

  const newProduct = {
    id: Date.now(),
    name: name,
    image: image,
    price: price,
    quantity: quantity,
    done: false,
  };

  items.push(newProduct);

  prodName.value = "";
  prodImage.value = "";
  prodPrice.value = "";
  prodQuantity.value = "";

  render();
});

const header = document.querySelector("h1");

header.style.display = "flex";
header.style.justifyContent = "center";
header.style.color = "orange";

const description = document.querySelector("p.description");

description.style.display = "flex";
description.style.justifyContent = "center";
description.style.backgroundColor = "lightblue";
description.style.borderRadius = "10px";
description.style.textAlign = "center";
description.style.fontSize = "20px";
description.style.width = "100%";

const marketList = document.querySelector("div.market-list");

marketList.style.display = "grid";
marketList.style.marginTop = "50px";
marketList.style.gridTemplateColumns = "repeat(3, 1fr)";
marketList.style.gap = "20px";

//const rende = document.querySelectorAll(".rend");

rende.forEach((item) => {
  item.style.display = "flex";
  item.style.flexDirection = "column";
  item.style.gap = "10px";

  const spans = item.querySelectorAll("span");
  const button = item.querySelector("button");

  spans.forEach((span) => {
    span.style.display = "block";
  });

  button.style.width = "100px";
});