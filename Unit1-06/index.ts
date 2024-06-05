/*This program fiunms the mean of an array of numbers
 * *By Venika Sem
 * *@version 1.0
 * *@since Feb-2024
 * */

import { readFileSync } from 'fs';

// Finds the mean of an array of numbers
function findMean(list: number[]): number {
  let sumOfNumbers = 0;
  for (let counter = 0; counter < list.length; counter++) {
    sumOfNumbers = sumOfNumbers + list[counter];
  }
  const mean = sumOfNumbers / list.length;
  return mean;
}

// Finds the median of an array of numbers
function findMedian(list: number[]): number {
  list.sort(function(a, b){return a - b});
  const halfLength = list.length / 2;
  const remainder = halfLength % 1;
  let median = 0;
  if (remainder != 0) {
    median = list[halfLength - 0.5];
  } else {
    median = (list[halfLength - 1] + list[halfLength]) / 2;
  }
  return median;
}

// Get file path from command line argument
const filePath = process.argv[2];

// Read file and split contents into array
const fileContents = readFileSync(filePath, 'utf8');
const array = fileContents.trim().split("\n").map(str => parseInt(str, 10)); // Convert string to int

// Error check
let errorPassed = true;
for (let counter = 0; counter < array.length; counter++) {
  if (isNaN(array[counter]) == true) {
    console.log('Array contains a NaN value.');
    errorPassed = false;
    break;
  }
}

if (errorPassed == true) {
  // Find mean and median
  console.log(`Current array: ${array}\n`);
  const mean = findMean(array);
  const median = findMedian(array);
  console.log(`The mean is ${mean}`);
  console.log(`The median is ${median}`);
}

// Show the program as done
console.log('\nDone.');
