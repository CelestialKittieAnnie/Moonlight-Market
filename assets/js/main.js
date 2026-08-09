alert("Welcome to the Aesopian Realm.");

const subTitle = document.getElementById("sub-title");

const subTitle2 = document.querySelector("#sub-title");

const firstNav = document.querySelector(".top-nav");

const factionLink = document.getElementById("faction-link");

factionLink.href = "profile.html";

subTitle.innerHTML = "Welcome back to the <strong>Aesopian Realm</strong>!";

subTitle.style.color = "red";

console.log(subTitle);

console.log(subTitle2);

console.log(firstNav);