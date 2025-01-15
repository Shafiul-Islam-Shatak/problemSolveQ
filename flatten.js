// Write a function to flatten a nested array into a single array.

const input = [[1, 2], [3, 4], [5]];

function flattenTheArray(arr) {
    let flattenArray = arr.reduce((emptyArray, value) => emptyArray.concat(value))
    console.log(flattenArray);
}

flattenTheArray(input)
