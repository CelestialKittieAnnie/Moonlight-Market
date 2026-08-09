console.log('🌸 LOADED CHOOSE_FACTION.JS (fresh version)');

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

async function loadTestPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  console.log('Sealed crate (Response object):', response);

  const data = await response.json();
  console.log('Unpacked potions (parsed JSON):', data);
}

console.log('🧪 ABOUT TO CALL loadTestPost');

loadTestPost();

async function loadTestUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  console.log('Sealed crate (Response object):', response);

  const data = await response.json();
  console.log('Unpacked user data (parsed JSON):', data);
}

console.log('ABOUT TO CALL loadTestUser');

loadTestUser();