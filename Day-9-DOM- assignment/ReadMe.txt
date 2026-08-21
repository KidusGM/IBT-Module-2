# Addis Market List

A simple **Addis Market List** web application built with **HTML, CSS, and JavaScript**.

The application allows users to add products with a name, image, price, and quantity. Added products are displayed in a product grid, and users can click **Order** to add a product to the shopping cart table.

## Features

* Add a new product
* Enter product name
* Upload a product image
* Enter product price
* Enter product quantity
* Display added products in a grid
* Order products
* Display ordered products in a table
* Calculate the total price automatically
* Show product status
* Remove products from the cart
* Responsive layout for smaller screens

## Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* `URL.createObjectURL()` for displaying uploaded images



## How It Works

### 1. Add a Product

Fill in the form:

```text
Product Name
Product Image
Product Price
Quantity
```

Then click:

```text
Add Item
```

The product will appear in the market grid.

### 2. Order a Product

Each product has an:

```text
Order
```

button.

When the button is clicked, the product is added to the table.

### 3. Calculate Total Price

The application automatically calculates:

```text
Total Price = Unit Price × Quantity
```

```

### 4. Remove an Order

Click the **Remove** button in the cart table to remove the product from the cart.

## JavaScript State

The application uses two arrays to manage its data:

```javascript
let items = [];
let cart = [];
```

`items` stores products displayed in the market grid.

`cart` stores products that the user has ordered.

## Product Object

Each product is stored with information such as:

```javascript
{
  id: Date.now(),
  name: "Fresh Tibis",
  image: "...",
  price: 2000,
  quantity: 3,
  done: false
}
```



## Running the Project

1. Download or clone the project.
2. Open the project folder in VS Code.
3. Make sure the `Gallery` folder contains the product images.
4. Open `index.html` in your browser.

You can also use the **Live Server** extension in VS Code for a better development experience.

## Author

**Kidus Girum**

Built as a frontend JavaScript project for practicing:

* HTML
* CSS
* JavaScript
* Arrays
* Objects
* DOM manipulation
* Events
* Dynamic rendering
