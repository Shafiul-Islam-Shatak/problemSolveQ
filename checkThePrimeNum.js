// Write a function that checks if a number is prime.



function isPrime(num) {
    if (num <= 1) return false;

    if (num % 2 === 0 || num % 3 === 0) return false
    else return true
}


console.log(isPrime(11));