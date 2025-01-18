// Given an array of numbers from 1 to n with one missing number, write a function to find the 
// missing number. 

const input = [1, 2, 4]

function findMissingNumber(arr, n) {
    for (let i = 1; i <= n; i++) {

        if (!arr.includes(i)) {
            return i
        }
    }
    return null
}
console.log(findMissingNumber(input, 4));





