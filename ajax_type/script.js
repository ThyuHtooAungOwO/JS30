const endpoint = "./data.json";
const input = document.getElementById("input");
const suggestions = document.querySelector(".suggestions");

const cities = [];

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatch() {
  const matchedArray = findMatches(this.value, cities);
  const html = matchedArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");

      const cityName = place.city.replace(
        regex,
        (match) => `<span class='hl'>${match}</span>`
      );

      const stateName = place.state.replace(
        regex,
        (match) => `<span class='hl'>${match}</span>`
      );

      return `
            <li class="matchedCity">
                <span class="city-name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(
                  place.population
                )}</span>
            </li>
        `;
    })
    .join("");

  suggestions.innerHTML = html;

  const defaultHtml = `
    <li class="matchedCity">
          <span class="city-name">City, State</span>
          <span class="population">Population</span>
    </li>
  `;

  if (input.value.trim() === "") {
    suggestions.innerHTML = defaultHtml;
  }
}

input.addEventListener("change", displayMatch);
input.addEventListener("keyup", displayMatch);
