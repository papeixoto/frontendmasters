const MAX_WORD_LENGHT = 5;
const MAX_GUESSES = 6;

let wordOfTheDay;
let tryNumber = 0;
let currentGuess = "";
const loadingDiv = document.querySelector(".info-bar");
const rows = document.querySelectorAll(".row");
let done = false;
let isLoading = true;

function setLoading(isLoadingParam) {
  loadingDiv.classList.toggle("hidden", isLoading);
  isLoading = isLoadingParam;
}

function validateRow() {
  const row = document.querySelectorAll(".row")[tryNumber];
  const map = makeMap(wordOfTheDay);

  // first pass to mark as correct
  for (let i = 0; i < MAX_WORD_LENGHT; i++) {
    if (wordOfTheDay[i] === currentGuess[i]) {
      row.children[i].classList.add("right");
      map[currentGuess[i]]--;
    }
  }

  // second pass to mark the others
  for (let i = 0; i < MAX_WORD_LENGHT; i++) {
    if (wordOfTheDay[i] === currentGuess[i]) {
      // do nothing, already dealt with
    } else if (map[currentGuess[i]]) {
      row.children[i].classList.add("position");
      map[wordOfTheDay[i]]--;
    } else {
      row.children[i].classList.add("wrong");
    }
  }

  // win
  if (currentGuess === wordOfTheDay) {
    document.querySelector("h1").classList.add("winner");
    done = true;
    return;
  }

  currentGuess = "";
  tryNumber++;

  if (tryNumber >= MAX_GUESSES) {
    done = true;
  }
}

getWordOfTheDay();

function init() {
  document.querySelector("body").addEventListener("keydown", async (e) => {
    if (done || isLoading) return;
    const row = document.querySelectorAll(".row")[tryNumber];
    const key = e.key;

    if (key === "Enter") {
      if (currentGuess.length !== MAX_WORD_LENGHT) {
        return;
      }

      const validWord = await validateWord();
      if (!validWord) {
        for (let i = 0; i < row.children.length; i++) {
          row.children[i].classList.remove("invalid");
        }
        setTimeout(() => {
          for (let i = 0; i < row.children.length; i++) {
            row.children[i].classList.add("invalid");
          }
        }, 10);
      } else {
        validateRow();
      }
    }

    if (key === "Backspace") {
      currentGuess = currentGuess.substring(0, currentGuess.length - 1);
      row.children[currentGuess.length].innerHTML = "";
      return;
    }

    if (isLetter(key)) {
      if (currentGuess.length === MAX_WORD_LENGHT) {
        return;
      }
      row.children[currentGuess.length].innerHTML = key;
      currentGuess += key;
      return;
    }
  });
}

// api calls
async function getWordOfTheDay() {
  const res = await fetch("https://words.dev-apis.com/word-of-the-day");
  const json = await res.json();
  wordOfTheDay = json.word;
  setLoading(false);
}

async function validateWord() {
  setLoading(true);
  const res = await fetch("https://words.dev-apis.com/validate-word", {
    method: "POST",
    body: JSON.stringify({ word: currentGuess }),
  });
  const json = await res.json();
  setLoading(false);
  return json.validWord;
}

// utils
const isLetter = (letter) => {
  return /^[a-zA-Z]$/.test(letter);
};

function makeMap(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    const letter = array[i];
    if (obj[letter]) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }

  return obj;
}

init();
