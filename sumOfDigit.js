// Write a function that returns the sum of all digits of a given number. 

const input= 123

function sumOfDigits(num) { 
    const arrayOfNums = num.toString().split('')
    
    let sum =0
    arrayOfNums.forEach(num => {

        sum = sum+parseInt(num)
    });

    return sum

} 

console.log(sumOfDigits(input));

// Example: Input: 123, Output: 6 