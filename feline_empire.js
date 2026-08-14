const factionName = document.getElementById('feline-name');
const renameInput = document.getElementById('feline-rename-input');
const renameButton = document.getElementById('feline-rename-btn');

renameButton.addEventListener('click', function () {
  const newName = renameInput.value.trim();

  if (newName !== '') {
    factionName.textContent = newName;
    renameInput.value = '';
    renameInput.focus();
  }
});