const form = document.querySelector("#searchForm");
const input = document.querySelector("#countryInput");
const facts = document.querySelector("#facts");

function createFact(label, value) {
  const p = document.createElement("p");

  p.className = "fact";
  p.textContent = label + ": " + value;

  return p;
}

async function showCountry(country) {
  facts.textContent = "Loading...";

  try {
    const response = await fetch(
      "https://countries.dev/name/" + encodeURIComponent(country)
    );

    if (!response.ok) {
      throw new Error("Country not found");
    }

    const countries = await response.json();

    facts.innerHTML = "";

    countries.forEach(function (countryInfo) {
      const card = document.createElement("div");
      card.className = "country";

      const title = document.createElement("h2");
      title.textContent = countryInfo.name;
      card.appendChild(title);

      const capital = countryInfo.capital || "Not available";
      card.appendChild(createFact("Capital", capital));

      const population = countryInfo.population
        ? countryInfo.population.toLocaleString()
        : "Not available";

      card.appendChild(createFact("Population", population));

      card.appendChild(
        createFact("Region", countryInfo.region || "Not available")
      );

      const currencies = countryInfo.currencies || [];
      const currency = currencies[0];

      card.appendChild(
        createFact(
          "Currency",
          currency ? currency.name : "Not available"
        )
      );

      const flag = document.createElement("img");

      flag.src = countryInfo.flags?.png || countryInfo.flags?.svg;
      flag.alt = countryInfo.name + " flag";
      flag.className = "flag";

      card.appendChild(flag);

      facts.appendChild(card);
    });

  } catch (error) {
    console.log(error);

    facts.textContent = error.message;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const country = input.value.trim();

  if (country !== "") {
    showCountry(country);
  }
});

showCountry("Ethiopia");