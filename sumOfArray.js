// Write a function that calculates the sum of all the numbers in an array

const input = [1, 2, 3, 5]
function sumArray(arr) {
    let sum = 0
    arr.forEach(num => {
        sum = sum + num
    });

    console.log(sum);
    
}
sumArray(input)

// Example: Input: [1, 2, 3], Output: 6