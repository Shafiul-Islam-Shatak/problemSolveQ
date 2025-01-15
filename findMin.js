// Find the Minimum Number in an Array

const input = [1, 2, 3, 5]

function findMin(arr) {
    let minNumber = Math.min(...arr)
    console.log(minNumber);

}

findMin(input)