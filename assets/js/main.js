alert("Welcome to the Aesopian Realm.");

const subTitle = document.getElementById("sub-title");
const subTitle2 = document.querySelector("#sub-title");
const firstNav = document.querySelector(".top-nav");
const factionLink = document.getElementById('faction-link');

const signupForm = document.querySelector('form');
const recruitList = document.querySelector('#recruit-list');

signupForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const usernameInput = document.querySelector('#signup-username');
  console.log('New faction account:', usernameInput.value);

  const newRecruit = document.createElement('li');
  newRecruit.textContent = usernameInput.value;

  recruitList.appendChild(newRecruit);
});

function handleFactionClick() {
  alert('✨ Choosing your faction... ✨');
}

factionLink.addEventListener('click', handleFactionClick);

subTitle.innerHTML = "Welcome back to the <strong>Aesopian Realm</strong>!";
subTitle.style.color = "red";

console.log(subTitle);
console.log(subTitle2);
console.log(firstNav);