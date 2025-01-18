// Write a function that converts a string to a number without using parseInt or Number(). 


function stringToNumber(str) {
    const arrayOfStr = str.split('')

    let i = 0;
    arrayOfStr.forEach(elem => {
        i = i + elem
    });
    console.log(typeof(i));
    
    return i;
}

console.log(stringToNumber('123'));


// Example: Input: "123", Output: 123 