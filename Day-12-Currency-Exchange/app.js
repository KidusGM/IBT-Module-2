// The single source of truth
const state = {
  base: "ETB",
  rates: {},
  exchanges: [],
  et_birr: 100,
  fr_currency: "EUR",
};

const API = "https://open.er-api.com/v6/latest/ETB";

const status = document.querySelector("#status");


// ==============================
// LOAD EXCHANGE RATES
// ==============================

async function loadRates() {
  status.textContent = "Loading rates...";

  try {
    const res = await fetch(API);

    if (!res.ok) {
      throw new Error("HTTP " + res.status);
    }

    const data = await res.json();

    state.rates = data.rates;

    status.textContent = "";

    render();

  } catch (err) {
    status.textContent = "Could not load rates.";
  }
}


// ==============================
// CURRENCY SELECT
// ==============================

const select = document.querySelector("#fr_currency");

function render() {

  // Fill the dropdown with currencies
  const codes = Object.keys(state.rates);

  select.innerHTML = codes
    .map((c) => `<option value="${c}">${c}</option>`)
    .join("");

  // Restore previously selected currency
  select.value = state.fr_currency;

  // Display exchange history
  displayCurrency();
}


// ==============================
// FORM ELEMENTS
// ==============================

const form = document.querySelector("#et_currency");
const amount = document.querySelector("#et_birr");
const result = document.querySelector("#result");
const currencyList = document.querySelector("#currency-list");


// ==============================
// EXCHANGE
// ==============================

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const amt = Number(amount.value);

  // Validate amount
  if (!amt || amt <= 0) {
    result.textContent = "Enter a valid amount.";
    return;
  }

  // Save current values
  state.et_birr = amt;
  state.fr_currency = select.value;

  // Get exchange rate
  const rate = state.rates[state.fr_currency];

  // Calculate the amount requested by the user
  const out = (amt * rate).toFixed(2);

  // Show conversion result
  result.textContent =
    `${amt} ETB = ${out} ${state.fr_currency}`;


  // ==============================
  // ADD EXCHANGE TO HISTORY
  // ==============================

  state.exchanges.push({
    amount: amt,
    currency: state.fr_currency,
    rate: rate,
    converted: out,
  });


  // Save exchange history
  save();

  // Update table
  displayCurrency();
});


// ==============================
// LOCAL STORAGE
// ==============================

const KEY = "birrwatch";


// Save data
function save() {

  localStorage.setItem(
    KEY,
    JSON.stringify({
      exchanges: state.exchanges,
      fr_currency: state.fr_currency,
      et_birr: state.et_birr,
    })
  );
}


// Load saved data
function load() {

  try {

    const saved = localStorage.getItem(KEY);

    // Nothing saved yet
    if (!saved) {
      return;
    }

    const data = JSON.parse(saved);


    // Restore exchange history
    if (Array.isArray(data.exchanges)) {
      state.exchanges = data.exchanges;
    }


    // Restore selected currency
    if (data.fr_currency) {
      state.fr_currency = data.fr_currency;
    }


    // Restore last entered amount
    if (data.et_birr) {
      state.et_birr = data.et_birr;
    }

  } catch (error) {

    console.log("Could not load saved data.");

  }
}


// ==============================
// DISPLAY EXCHANGE HISTORY
// ==============================

function displayCurrency() {

  // Clear current table
  currencyList.textContent = "";


  // Display every exchange
  state.exchanges.forEach(function (exchange, index) {

    const row = document.createElement("tr");


    // Row number
    const numberCell = document.createElement("td");


    // ETB amount
    const ETBCell = document.createElement("td");


    // Foreign currency
    const foreignCell = document.createElement("td");


    // Rate
    const rateCell = document.createElement("td");


    // Row number
    numberCell.textContent = index + 1;


    // IMPORTANT:
    // Always show 1 ETB in the table.
    //
    // Even if the user entered:
    // 300 ETB
    // 400 ETB
    // 1000 ETB
    //
    // the table still shows 1 ETB.
    ETBCell.textContent = 1;


    // Currency used for this exchange
    foreignCell.textContent = exchange.currency;


    // Rate for 1 ETB
    rateCell.textContent = exchange.rate;


    // Add cells to row
    row.appendChild(numberCell);
    row.appendChild(ETBCell);
    row.appendChild(foreignCell);
    row.appendChild(rateCell);


    // Add row to table
    currencyList.appendChild(row);

  });
}


// ==============================
// INITIALIZE
// ==============================

async function init() {

  // Load saved exchange history
  load();

  // Get live exchange rates
  await loadRates();

}


// Start application
init();