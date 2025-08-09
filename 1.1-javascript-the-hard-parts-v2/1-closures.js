// CHALLENGE 1
function createFunction() {
  function printHello() {
    console.log("hello");
  }
  return printHello;
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  function printInput() {
    console.log(input);
  }

  return printInput;
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter("sample");
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter("hello");
// printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter(); // 1
// willCounter(); // 2
// willCounter(); // 3

// jasCounter(); // 1
// willCounter(); // 4

function addByX(x) {
  function addInput(input) {
    return input + x;
  }

  return addInput;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// console.log(addByTwo(1)); // => should return 3
// console.log(addByTwo(2)); // => should return 4
// console.log(addByTwo(3)); // => should return 5

// const addByThree = addByX(3);
// console.log(addByThree(1)); // => should return 4
// console.log(addByThree(2)); // => should return 5

// const addByFour = addByX(4);
// console.log(addByFour(4)); // => should return 8
// console.log(addByFour(5)); // => should return 9

// CHALLENGE 4
function once(func) {
  let hasRun = false;
  let result;

  function returnFunction(...params) {
    if (!hasRun) {
      hasRun = true;
      result = func(...params);
    }
    return result;
  }

  return returnFunction;
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc);
// console.log(onceFunc(4)); // => should log 6
// console.log(onceFunc(10)); // => should log 6
// console.log(onceFunc(9001)); // => should log 6

// CHALLENGE 5
function after(count, func) {
  let counter = 0;

  function retFunction(...params) {
    counter++;
    if (counter === count) {
      return func(...params);
    }
  }

  return retFunction;
}

// /*** Uncomment these to check your work! ***/
// const called = function () {
//   console.log("hello");
// };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6
function delay(func, wait, ...params) {
  return setTimeout(() => func(...params), wait);
}
// const cb = function (...params) {
//   console.log("called!", ...params);
// };
// delay(cb, 1000); // "called!" printed after 1000 ms
// delay(cb, 2000, "param1", "param2"); // "called! param1 param2" printed after 2000 ms

// CHALLENGE 7
function rollCall(names) {
  let currIndex = 0;
  function call() {
    if (currIndex >= names.length) {
      console.log("Everyone accounter for");
      return;
    }
    console.log(names[currIndex]);
    currIndex++;
    return;
  }

  return call;
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
// rollCaller(); // => should log 'Victoria'
// rollCaller(); // => should log 'Juan'
// rollCaller(); // => should log 'Ruth'
// rollCaller(); // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  const history = {};

  function checkPassword(password) {
    if (password === magicWord) {
      return history;
    }

    const result = func(password);
    history[password] = result;
    return result;
  }

  return checkPassword;
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function (num) {
//   return num * 2;
// };
// const multBy2AndLog = saveOutput(multiplyBy2, "boo");
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog("boo")); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
  let currentIndex = 0;

  return function () {
    const el = array[currentIndex % array.length];
    currentIndex++;
    return el;
  };
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ["Fri", "Sat", "Sun"];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  return function (innerArg) {
    return func(arg, innerArg);
  };
}

// /*** Uncomment these to check your work! ***/
// const subtract = function (big, small) {
//   return big - small;
// };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
  return function (...params) {
    return {
      date: Date.now(),
      output: func(...params),
    };
  };
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp((n) => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
  const pairs = {};
  return function (s1, s2) {
    if (s1 && s2) {
      pairs[s1] = s2;
      return;
    }

    let parsedString = s1;
    // only 1 string passed
    Object.entries(pairs).map(([key, value]) => {
      parsedString = parsedString.replace(key, value);
    });
    return parsedString;
  };
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene("dogs", "cats");
// changeScene("quick", "slow");
// console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
  let mySecret = secret;
  return {
    getSecret: () => mySecret,
    setSecret: (newSecret) => (mySecret = newSecret),
  };
}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5);
// console.log(obj.getSecret()); // => returns 5
// obj.setSecret(2);
// console.log(obj.getSecret()); // => returns 2

// CHALLENGE 14
function callTimes() {
  let counter = 0;

  return function () {
    counter++;
    console.log(counter);
    return counter;
  };
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2

// CHALLENGE 15
function roulette(num) {
  let runCounter = 0;
  return function () {
    runCounter++;
    if (runCounter < num) return "spin";
    if (runCounter === num) return "win";
    return "pick a number to play again";
  };
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'

// CHALLENGE 16
function average() {
  let numbers = [];
  return function (num) {
    if (num !== undefined) {
      numbers.push(num);
    }

    if (!numbers.length) return 0;

    const sum = numbers.reduce((acc, current) => {
      acc += current;
      return acc;
    }, 0);

    return sum / numbers.length || 0;
  };
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  return function (cb) {
    for (const [key, value] of arrOfTests) {
      if (cb(key) !== value) return false;
    }
    return true;
  };
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(["hello", "hellO"]);
// capLastTestCases.push(["goodbye", "goodbyE"]);
// capLastTestCases.push(["howdy", "howdY"]);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = (str) => str.toUpperCase();
// const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();

// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {
  const history = [];
  return function (str) {
    if (str === "undo") {
      if (!history.length) return "nothing to undo";
      const removed = history.pop();
      return `${removed} undone`;
    }

    if (history.length === limit) {
      history.shift();
    }
    history.push(str);
    return `${str} done`;
  };
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions("jump")); // => should log 'jump done'
// console.log(myActions("undo")); // => should log 'jump undone'
// console.log(myActions("walk")); // => should log 'walk done'
// console.log(myActions("code")); // => should log 'code done'
// console.log(myActions("pose")); // => should log 'pose done'
// console.log(myActions("undo")); // => should log 'pose undone'
// console.log(myActions("undo")); // => should log 'code undone'
// console.log(myActions("undo")); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {
  return function dealer(n1, n2) {
    let firstRun = true;
    let sum = n1 + n2;
    return function player() {
      if (firstRun) {
        firstRun = false;
        return sum;
      }

      if (sum > 21) return "you are done";
      sum += array.shift();
      if (sum > 21) return "bust";
      return sum;
    };
  };
}

// /*** Uncomment these to check your work! ***/

/*** DEALER ***/
const deal = blackjack([
  2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
