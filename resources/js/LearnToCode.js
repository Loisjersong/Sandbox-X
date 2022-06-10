// Create a function that prints all the integers from 1 to 20
const print1to20 = () => {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
};

// Create a function that prints/logs all the odd numbers from 3 to 20
const printOdd3to20 = () => {
    for (let i = 3; i <= 20; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
};

// Create a function that prints/logs all the even numbers from 4 to 22
const printEven4to22 = () => {
    for (let i = 4; i <= 22; i += 2) {
        console.log(i);
    }
};

// Print/log all the multiples of 7 between the numbers 7 to 62
const multipleOf7 = () => {
    for (let i = 7; i <= 62; i += 7) {
        console.log(i);
    }
};

// Log positive numbers starting at 50, counting down by fives (exclude 0)
const countdownByFives = () => {
    for (let i = 50; i >= 5; i -= 5) {
        console.log(i);
    }
};

// Given an array, print/log the sum of the first value in the array, plus the array’s length. Assume that the array is composed of numbers
const firstPlusLength = (arr) => {
    console.log(arr.length + arr[0]);
};

// Create a function that prints/logs all the even numbers from 4 to 24
// Have it also return the sum of all the numbers that were printed
const printEven4to24 = () => {
    let sum = 0;
    for (let i = 4; i <= 22; i += 2) {
        sum += i;
        console.log(i);
    }
    return sum;
};

// Add odd integers from -25,000 to 30,000 and have the function return its final sum.
const addOddInts = () => {
    let sum = 0;
    for (let i = -25000; i <= 30000; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
};

// Given an array, write a function that prints/logs each number in the array
const printArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

// Given an array, write a function that only prints/logs its positive value
// For example, printPositives([-1,3,-5, 10]) prints/logs 3, 10
const printPositives = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) console.log(arr[i]);
    }
};

/* 
    Given an array, write a function that prints the index value of its positive values
    For example, printPositiveIndex([1, 3, -10]), have it print/log 0, 1 (as the 0th index had a positive value and index 1 also had a positive value)
    printPostiiveIndex([10, 5, -5, 15]) should print/log 0, 1, and 3. In other words, it prints the index of each positive number in the array
*/
const printPositiveIndex = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) console.log(i);
    }
};

// Given an array, write a function that returns a new array where each negative value was converted to a positive value
// For example, bePositive([-1,-3,-5]) returns [1, 3, 5]. A positive number in the original array should remain as positive, so that each number in the new array is all positive
const bePositive = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] *= -1;
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }

    return newArr;
};

// Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself
// For example, squareVal( [1, 3, 5] ) should return [1, 9, 25]
const squareVal = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
        newArr.push(arr[i]);
    }
    return newArr;
};

// Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0
// When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
const noNeg = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.push(0);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Given an array of multiple values, write a function that returns the sum of its numbers
// For example, findSum([1,2,3]) should return 6
const findSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

// Given an array with multiple values, write a function that returns the maximum number in the array
// For example, findMax([-3,3,5,7]) should return 7
const findMax = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

// Given an array with multiple values, write a function that returns the minimum value in the array
// For example findMin([0,3,-5]) should return -5
const findMin = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }

    return min;
};

// Given an array with multiple values, write a function that returns a new array with two elements.
// The first value in the new array should be the minimum value in the original array. The second value in the new array should be the maximum value in the original array
// For example, findMinMax([1,3,5]) should return [1, 5]. Similarly, findMinMax([-1,-3,10]) should return [-3, 10]
const findMinMax = (arr) => {
    const newArr = [];
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];

        if (arr[i] < min) min = arr[i];
    }
    newArr.push(min);
    newArr.push(max);
    return newArr;
};

// Given array of numbers, create function to replace last value with number of positive values
// Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it
const countPositives = (arr) => {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum++;
        }
    }
    arr[arr.length - 1] = sum;
    return arr;
};

// Given an array, write a function that prints values that are greater than its 2nd value in the array
// For example, given [1,3,5,7,9,13], it should print/log 5, 7, 9, and 13. Assume that the array has at least 2 values
// Have the function also return the sum of the numbers that were printed/logged
const valGreaterThanSecond = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            console.log(arr[i]);
            sum += arr[i];
        }
    }
    return sum;
};

// Given two numbers passed to the function, return a new array of length num1 with each value num2
// For example, thisLengthThatValue(3,5) should return [5, 5, 5]. thisLengthThatValue(2, 10) should return [10, 10]
const thisLengthThatValue = (num1, num2) => {
    let newArr = [];
    for (let i = 0; i < num1; i++) {
        newArr.push(num2);
    }
    return newArr;
};

// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array
// For example, addSevenToMost([1,3,5]) should return [10, 12]. addSevenToMost([1, 3, 5, 7]) should return [10, 12, 14]
const addSevenToMost = (arr) => {
    const newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
};

// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. If the array that was passed to the function has less than two elements, have the function return false
// For example, greaterThanSecond([1,3,5,7]) should return [5, 7]. Similarly, greaterThanSecond([0, -3, 2, 5]) should return [0, 2, 5]. Also, greaterThanSecond([2]) should return false
const greaterThanSecond = (arr) => {
    const newArr = [];
    if (arr.length < 2) return false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) newArr.push(arr[i]);
    }
    return newArr;
};

// Write a function that will swap the first and last values in any given array. The default minimum length of the array is 2
// For example, swapFirstLast([1,3,5]) should return [5, 3, 1]. swapFirstLast([1,3,5,7,9]) should return [9, 3, 5, 7, 1]
const swapFirstLast = (arr) => {
    const firstVal = arr[0];
    const lastval = arr[arr.length - 1];
    arr[0] = lastval;
    arr[arr.length - 1] = firstVal;
    return arr;
};


