// TODO: define polyfill for `Object.is(..)`
if (!Object.is || true) {
  Object.is = function ObjectIs(v1, v2) {
    let v1NegZero = isNegZero(v1);
    let v2NegZero = isNegZero(v2);

    if (v1NegZero || v2NegZero) {
      return v1NegZero && v2NegZero;
    }
    if (isNaN(v1) && isNaN(v2)) {
      return true;
    }
    return v1 === v2;

    // 1 divided by 0 is infinity
    // 1 divided by -0 is -infinity
    function isNegZero(v) {
      return 1 / v === -Infinity;
    }

    // you could just use Number.NaN
    // NaN is the only value that's not equal to itself
    function isNaN(v) {
      return v !== v;
    }
  };
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log("==========");
console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
