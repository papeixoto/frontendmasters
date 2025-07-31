// Finding Elements
// 1.
document.querySelectorAll("p");
document.getElementsByTagName("p");
// 2.
document.querySelector("#p1-symbol").textContent;
document.querySelector("#p1-symbol").innerText;

document.getElementById("p1-symbol").textContent;

// 3.
document.getElementsByClassName("square").length;
document.querySelectorAll(".square").length;

// 4.
document.getElementsByTagName("h2")[0].textContent;

// Changing a webpage
// 1.
document.querySelector("#p2-name").innerText = "you";
document.querySelector("#p2-name").innerText = "neighbour";

// 2.
const p1Symbol = document.querySelector("#p1-symbol").innerText;
const p2Symbol = document.querySelector("#p2-symbol").innerText;

document.querySelector("#p1-symbol").innerHTML = p2Symbol;
document.querySelector("#p2-symbol").innerHTML = p1Symbol;

// 3.
document.querySelector("h2").innerText = "A game you know and love";
