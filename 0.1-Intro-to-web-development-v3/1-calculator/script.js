const display = document.querySelector(".display");
let runningResult = 0;
// add, subtract, multiply, divide
let operation = null;

const numberButtons = document.querySelectorAll("button.number");
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    if (display.innerHTML === "0") {
      display.innerHTML = "";
    }
    display.innerHTML += numberButtons[i].innerHTML;
  });
}

document
  .querySelector(".clear")
  .addEventListener("click", () => (display.innerHTML = 0));

document.querySelector(".back").addEventListener("click", () => {
  const currentDisplay = display.innerHTML;
  if (display.innerHTML.length === 1) {
    display.innerHTML = 0;
    return;
  }

  display.innerHTML = currentDisplay.substring(0, currentDisplay.length - 1);
});

const handleAritmeticOperation = (op) => {
  runningResult = parseInt(display.innerHTML);
  operation = op;
  display.innerHTML = 0;
};

const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => handleAritmeticOperation("add"));

const subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener("click", () =>
  handleAritmeticOperation("subtract")
);

const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener("click", () =>
  handleAritmeticOperation("multiply")
);

const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", () =>
  handleAritmeticOperation("divide")
);

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
  switch (operation) {
    case "add":
      runningResult += parseInt(display.innerHTML);
      break;
    case "subtract":
      runningResult -= parseInt(display.innerHTML);
      break;
    case "multiply":
      runningResult *= parseInt(display.innerHTML);
      break;
    case "divide":
      runningResult /= parseInt(display.innerHTML);
      break;
  }
  operation = null;
  display.innerHTML = runningResult;
});
