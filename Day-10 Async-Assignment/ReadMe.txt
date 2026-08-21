# Country Facts

A simple beginner-friendly web application that searches for countries and displays useful information using a public API.

## Features

* Search for a country by name
* Shows Ethiopia by default
* Supports multiple matching countries
* Displays:

  * Country name
  * Capital
  * Population
  * Region
  * Currency
  * Country flag
* Shows a loading message while fetching data
* Shows an error message when a country cannot be found
* Uses `async/await` and `try/catch`
* Checks `response.ok` for HTTP errors
* Creates results dynamically with JavaScript DOM methods
* Responsive design for smaller screens

## Technologies

* HTML5
* CSS3
* JavaScript
* Fetch API
* REST API


## API

This project uses the Countries.dev public API:

https://countries.dev/

The application searches countries using the country name endpoint.

Example:

```text
https://countries.dev/name/Ethiopia
```

## How to Run

1. Download or clone the project.
2. Open the project folder in VS Code.
3. Make sure these files are in the same folder:

   * `index.html`
   * `styles.css`
   * `app.js`
4. Open `index.html` using VS Code Live Server.
5. The page will automatically load Ethiopia.
6. Enter another country in the search box and click **Search**.

## Example Searches

You can search for:

```text
Ethiopia
France
Japan


Partial searches can return multiple matching countries.

## What I Practiced

This project was created to practice asynchronous JavaScript and working with APIs.

