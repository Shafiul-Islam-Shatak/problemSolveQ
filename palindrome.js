// Given an integer x, return true if x is a palindrome and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.


function isPalindrome(x){
// method 1 using for loop
let str = x.toString() //convert the integer to string

let arrayOfStr = str.split('')
let revArrayOfStr = str.split('').reverse()

for(i =0 ; i<arrayOfStr.length ; i++){
    if(arrayOfStr[i]=== revArrayOfStr[i]){
        return true
    } else return false
}

 // method 2
// let revStr = revArrayOfStr.join('')
// if(revStr === str){
//     return true
// }else return false


}

console.log(isPalindrome(125))