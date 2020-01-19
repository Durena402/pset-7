function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  if(a.length < 1 || b.length < 1){
    return false;
  }
  if (a === undefined || b === undefined){
    return undefined;
  }
  if(a[0] == b[0] || a[a.length - 1] == b[b.length -1]){
    return true;
  } else {
    return false;
  }
}

function endsMeet(values, n) {
  let array = [];

  if (!values || values.length < n || !Number.isInteger(n) || n < 0) {
    return array;
  } else {
    if (n === 0) {
      return values;
    }

      for (let i = 0; i < n; i++) {
          array.push(values[i]);
      }

      for (let i = n; i > 0; i--) {
          array.push(values[values.length - i]);
      }
      return array;
    }
}

function difference(numbers) {
  if (numbers == undefined||numbers < 1||numbers.some(isNaN)) {
    return undefined;
  } else {
    let largestNum = Math.max.apply(Math, numbers);
    let smallestNum = Math.min.apply(Math, numbers);
    return largestNum - smallestNum;
  }
}

function max(number) {
  if (number === undefined || number === null || number.length < 3 || number.length % 2 === 0 || number.some(isNaN)){
    return undefined;
  } else {
    let first = number[0];
    let middle = number[Math.floor((number.length - 1) / 2)];
    let last = number[number.length - 1];
    let output = [first, middle, last];

    return Math.max.apply(Math, output);
  }
}
function middle(values) {
  if (values === undefined || values === null || values.length < 3 || values.length % 2 === 0){
    return [];
  } else {
    let middleOne = values [Math.floor((values.length - 1) / 2) - 1];
    let middleTwo = values[(values.length - 1) / 2];

    return [middleOne, middleTwo];
  }
}

function increasing(numbers) {
if (numbers === undefined || numbers === null || numbers.length < 3 || numbers.some(isNaN) || !Number.isInteger())
  return false;
} else {

}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
