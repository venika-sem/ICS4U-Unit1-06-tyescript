/* This program calculates the median and mean of a set of numbers
 * By Venika Sem
 * @version 1.0
 * @since Feb-2024
 */

// get arguments
import { readFileSync } from 'fs'

function Mean (newArray) {
  // This function calculates the mean
  let mean = 0
  let sum = 0
  for (let counter1 = 0; counter1 < newArray.length; counter1++) {
    sum += parseFloat(newArray[counter1])
  }
  mean = sum / newArray.length 
  return mean
}

function Median (sortedArray) {
  // This function calculates the median
  let median = 0
  if (sortedArray.length % 2) {
    median = Math.floor(sortedArray.length / 2)
  } else {
    median = (
      parseInt(newArray[sortedArray.length / 2]) +
      parseInt(newArray[sortedArray.length / 2 - 1])
    ) / 2
  }
  return median
}

// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val)
})

console.log(process.argv[2])


const file = readFileSync(process.argv[2], 'utf8')
//console.log(file)

const newArray = file.split(/\r?\n/)
// pop EOF if empty
if (newArray[newArray.length - 1] == "") {
  newArray.pop()
}
const sortedArray = newArray.sort((a, b) => a - b) //sort low to high
// process
console.log(newArray)
let mean = Mean(newArray)
let median = Median(sortedArray)

console.log("\nMean:", mean)
console.log("Median:", median)


console.log("\nDone.")