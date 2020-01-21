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

  if (!values || values.length < n || n <= 0 || !Number.isInteger(n)) {
    return array;
  } else {
      if (n === 0) {
        return values;
      } else {
        for (let y = 0; y < n; y++) {
          if (!(values[y] === undefined)) {
            array.push(values[y]);
          }
        }
        for (let y = n; y > 0; y--) {
          if (!(values[values.length - y] === undefined)) {
            array.push(values[values.length - y]);
          }
        }
        return array;
      }
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
if (numbers === undefined || numbers === null || numbers.length < 3 || numbers.some(isNaN) ||Number.isInteger()){
  return undefined;
} else {
    for (i = 0; i < numbers.length; i++){
      if((numbers[i] + 1) == numbers[i + 1] && (numbers[i+ 1] + 1) == numbers[i + 2]){
        return true;
        break;
    }
  }
  return false;
}
}

function everywhere(values, x) {
 if (values === undefined || values === null || values.length < 1 || x === undefined){
   return false;
 } else {
   for (let i = 0; i < values.length; i++) {
     if (values[i] !== x) {
       if (values[i - 1] === x || values[i + 1] === x) {
          nums = false;
       } else {
         return false;
       }
     }
   }
 }
 return true;
}


function consecutive(numbers) {

   if (!numbers || numbers.length < 3 || numbers.some(isNaN) || numbers.some(Number.isInteger) === false) {
    return false;
  } else {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0 && numbers[i + 2] % 2 === 0) {
        return true;
        break;
      } else if (numbers[i] % 2 !== 0 && numbers[i + 1] % 2 !== 0 && numbers[i + 2] % 2 !== 0) {
        return true;
        break;
      }
    }
    return false;
  }
}


function balance(numbers) {
  let sumHalf;
  let sumTwo = 0;
  let sum;
  let sumOne = 0;

  if (!numbers || numbers.length < 2 || numbers.some(isNaN)) {
      return false;
      sum = false;
      } else {
      for (let x = 0; x < numbers.length - 1; x++) {
          if (Number.isInteger(numbers[x]) === false){
              return false;
              sum = false;
          }
      }
      for (let i = 0; i < numbers.length; i++){
          sumOne += numbers[i];
        }
      sumHalf = sumOne / 2;
      if(sumOne % 2 === 1) {
          return false;
          sum = false;
      }
      for (let y = 0; y < numbers.length - 1; y++) {
          sumTwo += numbers[y];
          if (sumTwo === sumHalf) {
              return true;
              sum = true;
          }
      }
      if (sum === true) {
          return true;
      } else {
          return false;
      }
  }
}

function clumps(values) {
  if (!values) {
     return -1;
   } else {
     let count = 0;
     let clump = null;
     for (i = values.length - 1; i >= 0; i--){
       if (values[i] === values[i - 1] && values[i] !== clump){
         count++;
         clump = values[i];
       } else if (clump !== values[i]){
         clump = null;
       }
     }
     return count;
   }
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
