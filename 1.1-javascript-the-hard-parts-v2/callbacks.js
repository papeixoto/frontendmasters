// from http://csbin.io/callbacks
// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
// console.log(addS("pizza"));
// console.log(addS("bagel"));

// Challenge 3
function map(array, callback) {
  const newArray = [];

  for (let element of array) {
    const newEl = callback(element);
    newArray.push(newEl);
  }

  return newArray;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
}

// see for yourself if your forEach works!
// const foods = ["pizza", "bagel"];
// forEach(foods, addS);
// console.log(foods);

// Challenge 5
function mapWith(array, callback) {
  const arrayCopy = [...array];
  forEach(arrayCopy, callback);
  return arrayCopy;
}

// const foods = ["pizza", "bagel"];
// const foodsWithS = mapWith(foods, addS);
// console.log("FOODS (should stay the same): ", foods);
// console.log("foodsWithS: ", foodsWithS);

// Challenge 6
// first try
function reduce(array, callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc;
}

// recursive
// function reduce(array, callback, initialValue) {
//   if (array.length === 0) return initialValue;

//   const arrayCopy = [...array];
//   const firstEl = arrayCopy.shift();
//   const newInitialValue = callback(initialValue, firstEl);

//   return reduce(arrayCopy, callback, newInitialValue);
// }

// const nums = [4, 1, 3];
// const add = function (a, b) {
//   return a + b;
// };
// console.log(reduce(nums, add, 0)); //-> 8

// Challenge 7
// first try
// function intersection(arrays) {
//   if (arrays.length === 0) return [];
//   let commonEls = [...arrays[0]];

//   for (let i = 1; i < arrays.length; i++) {
//     const newCommonEls = [];
//     for (let j = 0; j < commonEls.length; j++) {
//       if (arrays[i].includes(commonEls[j])) {
//         newCommonEls.push(commonEls[j]);
//       }
//     }
//     commonEls = newCommonEls;
//   }

//   return commonEls;
// }

// using reduce
function intersection(arrays) {
  function callback(acc, array) {
    const newAcc = [];
    for (let i = 0; i < acc.length; i++)
      if (array.includes(acc[i])) newAcc.push(acc[i]);
    return newAcc;
  }

  return reduce(arrays, callback, [...arrays[0]]);
}

// different version using set
function intersection(arrays) {
  if (arrays.length === 0) return [];

  // Start with the first array as a Set
  let commonEls = new Set(arrays[0]);

  for (let i = 1; i < arrays.length; i++) {
    const currentSet = new Set(arrays[i]);
    commonEls = new Set([...commonEls].filter((el) => currentSet.has(el)));
  }
  return Array.from(commonEls);
}

// console.log(
//   intersection([
//     [5, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20],
//   ])
// );
// should log: [5, 15]

// Challenge 8
// function union(arrays) {
//   const acc = [];
//   for (let i = 0; i < arrays.length; i++) {
//     const currentArray = arrays[i];
//     for (let j = 0; j < currentArray.length; j++) {
//       if (!acc.includes(currentArray[j])) acc.push(currentArray[j]);
//     }
//   }

//   return acc;
// }

// using reduce
function union(arrays) {
  return reduce(
    arrays,
    (acc, array) => {
      acc.push(...array.filter((el) => !acc.includes(el)));
      return acc;
    },
    []
  );
}

// using Set
// function union(arrays) {
//   const acc = new Set();
//   arrays.forEach((array) => array.forEach((el) => acc.add(el)));

//   return Array.from(acc);
// }

// console.log(
//   union([
//     [5, 10, 15],
//     [15, 88, 1, 5, 7],
//     [100, 15, 10, 1, 5],
//   ])
// );
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {
  const matches = {};

  array1.forEach((el, i) => {
    if (callback(el) === array2[i]) {
      matches[el] = array2[i];
    }
  });

  return matches;
}

// console.log(
//   objOfMatches(
//     ["hi", "howdy", "bye", "later", "hello"],
//     ["HI", "Howdy", "BYE", "LATER", "hello"],
//     function (str) {
//       return str.toUpperCase();
//     }
//   )
// );
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  const res = {};

  arrVals.forEach((value) => {
    res[value] = [];
    arrCallbacks.forEach((callback) => {
      res[value].push(callback(value));
    });
  });

  return res;
}

// console.log(
//   multiMap(
//     ["catfood", "glue", "beer"],
//     [
//       function (str) {
//         return str.toUpperCase();
//       },
//       function (str) {
//         return str[0].toUpperCase() + str.slice(1).toLowerCase();
//       },
//       function (str) {
//         return str + str;
//       },
//     ]
//   )
// );
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  const res = {};
  console.log(Object.entries(obj));
  Object.entries(obj).forEach(([key, value]) => {
    if (value === callback(key)) res[key] = value;
  });

  return res;
}

// const cities = {
//   London: "LONDON",
//   LA: "Los Angeles",
//   Paris: "PARIS",
// };
// console.log(objectFilter(cities, (city) => city.toUpperCase()));
// // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  const numOfTrue = array.filter((el) => callback(el)).length;
  return numOfTrue > array.length / 2;
}

/*** Uncomment these to check your work! ***/
// const isOdd = function (num) {
//   return num % 2 === 1;
// };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
function prioritize(array, callback) {
  const store = {
    trueValues: [],
    falseValues: [],
  };

  array.forEach((el) => {
    if (callback(el)) store.trueValues.push(el);
    else store.falseValues.push(el);
  });

  return [...store.trueValues, ...store.falseValues];
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function (str) {
//   return str[0] === "s" || str[0] === "S";
// };
// console.log(
//   prioritize(
//     ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
//     startsWithS
//   )
// );
// should log: ["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

// Challenge 14
function countBy(array, callback) {
  const counter = {};

  array.forEach((el) => {
    const res = callback(el);
    if (counter[res]) counter[res]++;
    else counter[res] = 1;
  });

  return counter;
}

// /*** Uncomment these to check your work! ***/
// console.log(
//   countBy([1, 2, 3, 4, 5], function (num) {
//     if (num % 2 === 0) return "even";
//     else return "odd";
//   })
// );
// should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  const group = {};

  array.forEach((el) => {
    const res = callback(el);
    if (group[res]) group[res].push(el);
    else group[res] = [el];
  });

  return group;
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function (num) {
//   return Math.floor(num);
// };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  return Object.entries(obj)
    .filter(([key, value]) => callback(value))
    .map(([key, value]) => key);
}

// /*** Uncomment these to check your work! ***/
// const sunny = {
//   mac: "priest",
//   dennis: "calculating",
//   charlie: "birdlaw",
//   dee: "bird",
//   frank: "warthog",
// };
// const startsWithBird = function (str) {
//   return str.slice(0, 4).toLowerCase() === "bird";
// };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  const firstValue = func2(func1(value));
  const secondValue = func1(func2(value));

  return firstValue === secondValue;
}

// /*** Uncomment these to check your work! ***/
// const multBy3 = (n) => n * 3;
// const divBy4 = (n) => n / 4;
// const subtract5 = (n) => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {
  const res = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (callback(key) === value) res[key] = value;
  });

  return res;
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = (n) => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {
  const numOfTrue = arrOfFuncs.filter((func) => func(value)).length;
  return (numOfTrue / arrOfFuncs.length) * 100;
}

// /*** Uncomment these to check your work! ***/
// const isEven = (n) => n % 2 === 0;
// const greaterThanFour = (n) => n > 4;
// const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// const hasSix = (n) => n.toString().includes("6");
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {
  return arrOfFuncs.reduce((acc, current) => {
    return current(acc);
  }, value);
}

// /*** Uncomment these to check your work! ***/
// const capitalize = (str) => str.toUpperCase();
// const addLowerCase = (str) => str + str.toLowerCase();
// const repeat = (str) => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, "cat")); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {
  let localMax = -Infinity;
  let maxKey;

  Object.entries(objOfFuncs).forEach(([key, value]) => {
    if (value(subject) > localMax) {
      localMax = value(subject);
      maxKey = key;
    }
  });

  return maxKey;
}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = (n) => n * 2;
// groupOfFuncs.addTen = (n) => n + 10;
// groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  return arrOfFuncs.reduce((acc, current) => current(acc), startVal);
}

function add100(num) {
  return num + 100;
}

function addTen(num) {
  return num + 10;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
function myFunc(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) return i;
  }

  return -1;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6
