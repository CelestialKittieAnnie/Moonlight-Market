const allSections = document.querySelectorAll("section");

const questItems = document.querySelectorAll('li');

function handleItemClick() {
  this.classList.toggle('done');
}

questItems.forEach(function (item) {
  item.addEventListener('click', handleItemClick);
});

document.body.style.backgroundColor = "black";

console.log(allSections);

console.log(allSections[0]);

console.log(allSections[1]);