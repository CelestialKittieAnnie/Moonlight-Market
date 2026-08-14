const factionName = document.getElementById('feline-name');
const renameInput = document.getElementById('feline-rename-input');
const renameButton = document.getElementById('feline-rename-btn');
const felineCapitalEl = document.getElementById('feline-capital');
const felinePopulationEl = document.getElementById('feline-population');

console.log('Feline capital element:', felineCapitalEl);
console.log('Feline capital text:', felineCapitalEl.textContent);

async function loadCountry(name) {
  const url = `https://countries.dev/name/${name}`;
  const res = await fetch(url);
  const data = await res.json();

  console.log('Countries.dev raw data:', data);

  const country = data[0];
  felineCapitalEl.textContent = country.capital;
  felinePopulationEl.textContent = `${country.population.toLocaleString()} Population, 1.5% Military`;
}

renameButton.addEventListener('click', function () {
  const newName = renameInput.value.trim();

  if (newName !== '') {
    factionName.textContent = newName;
    renameInput.value = '';
    renameInput.focus();
  }
});

loadCountry('France');