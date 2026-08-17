# Student Signup Form

## What this project does

This is a simple student signup form made with HTML, CSS, and JavaScript.

The form allows a user to enter:

* Full name
* Ethiopian phone number
* Email address
* Age

When the user submits the form, the information is checked before it is saved. The name must have at least two characters and the phone number must be a valid Ethiopian phone number.

The valid signup information is saved in `localStorage` as JSON. The saved information is also displayed in a table below the form.

The number of registered people is shown above the table.

The information stays saved even after refreshing the page.

## Files

* `index.html` - Contains the structure of the signup form and table.
* `style.css` - Contains the styling for the page.
* `app.js` - Handles validation, localStorage, JSON, and displaying the students.
* `README.md` - Explains the project.

## How to open it

Open the `index.html` file in a web browser.

## What I checked

* [ ] The form rejects an empty or too-short name with a clear message.
* [ ] The phone regex accepts both `0...` and `+251...` Ethiopian numbers.
* [ ] Invalid phone numbers are rejected.
* [ ] Valid entries are saved to `localStorage` as JSON.
* [ ] Saved entries remain after refreshing the page.
* [ ] User information is displayed using `textContent`.
* [ ] Null or corrupt localStorage data is handled using `try/catch`.
