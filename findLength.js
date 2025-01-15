// Find the Length of a String Without Using .length

const string = 'Shatak'

function length(str) {
    let arrayOfStr = str.split('')

    let i = 0
    
    arrayOfStr.forEach(elm => {
        i++
    });

    console.log('length is ', i);

}

length(string)
