console.log('🌸 LOADED CHOOSE_FACTION.JS (fresh version)');

const searchInput = document.getElementById('faction-search-input');
const searchButton = document.getElementById('faction-search-button');
const resultsList = document.getElementById('faction-list-api');

function renderFactions(factions) {
  resultsList.innerHTML = '';

  for (const faction of factions) {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${faction.name}</h3>
      <p><strong>Continent:</strong> ${faction.continent}</p>
      <p>${faction.tagline}</p>
    `;
    resultsList.appendChild(li);
  }
}

searchButton.addEventListener('click', function () {
  const term = searchInput.value.trim();
  console.log('Searching for:', term);

  const lowerTerm = term.toLowerCase();

  const matchingFactions = factionsData.filter(function (faction) {
    return (
      faction.name.toLowerCase().includes(lowerTerm) ||
      faction.continent.toLowerCase().includes(lowerTerm)
    );
  });

  console.log('Matching factions:', matchingFactions);
  renderFactions(matchingFactions);
});