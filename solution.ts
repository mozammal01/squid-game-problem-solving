// ------------------------------ Solution 1 --------------------------------

function reverseString(str: string) {
  if (str.length <= 1000) {
    const reverse = str.split("").reverse().join("")
    return reverse
  }
  else {
    return "String length is greater than 1000"
  }
}

// console.log(reverseString("hello"))


// ------------------------------ Solution 2 --------------------------------

function fizzBuzz(num: number) {
  if (num >= 1 && num <= 100) {
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz"
    }
    else if (num % 3 === 0) {
      return "Fizz"
    }
    else if (num % 5 === 0) {
      return "Buzz"
    }
    else {
      return "Not divisible by 3 or 5"
    }
  }
  else {
    return "Number is not between 1 and 100"
  }
}

// console.log(fizzBuzz(0))function reverseString (str){


// ------------------------------ Solution 3 --------------------------------

function findMax(arr: number[]) {
  if (arr.length > 0) {

    let max = arr[0];
    for (let i = 1; i <= arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
    return max
  }
  else {
    return "Array is empty"
  }
}
// console.log(findMax([23, 43, 83, 45, 640]))



// ------------------------------ Solution 4 --------------------------------

function isPalindrome(str: string) {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  const reverse = cleanStr.split("").reverse().join("")
  if (cleanStr === reverse) {
    return true
  }
  else {
    return false
  }
}

// console.log(isPalindrome("racecar"))


// ------------------------------ Solution 5 --------------------------------

function sumOfArray(arr: number[]) {
  let sum = 0
  if (arr.length <= 500) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum;
  }
  else {
    return "Array length is greater than 500"
  }
}

// console.log(sumOfArray([1,2,3,4,15]))


// ------------------------------ Solution 6 --------------------------------

function countVowels(str: string) {
  const vowels = "aeiou"
  let count = 0
  const lowerStr = str.toLowerCase()
  for (let i = 0; i < lowerStr.length; i++) {
    if (vowels.includes(lowerStr[i])) {
      count++
    }
  }
  return count
}

// console.log(countVowels("hello there"))


// ---------------------------------- Solution 7 --------------------------------

function findFactorial(num: number) {
  if (num < 0) {
    return "Factorial is not defined for negative numbers"
  }
  else if (num === 0) {
    return 1
  }
  else {
    let factorial = 1
    for (let i = 1; i <= num; i++) {
      factorial *= i
    }
    return factorial
  }
}

// console.log(findFactorial(0))


// ---------------------------------- Solution 8 --------------------------------

function EvenOrOdd(num: number[]) {
  const even = []
  if (num.length <= 100) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] % 2 === 0) {
        even.push(num[i])
      }
    }
    if(even.length === 0){
      return "There is no even number"
    }
    return even
  }
  else {
    return "Array length is greater than 100"
  }
}

// console.log(EvenOrOdd([1, 3, 5, 70, 9]))


// ---------------------------------- Solution 9 --------------------------------



function fibonacci(num:number) {
  if (num === 1) return [0];

  let result = [0, 1];

  for (let i = 2; i < num; i++) {
    let next = result[i - 1] + result[i - 2];
    result.push(next);
  }

  return result;
}

// console.log(fibonacci(10))



// ---------------------------------- Solution 10 --------------------------------

function findMin(nums:number[]){
 if(nums.length > 0){
  let min = nums[0]
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] < min){
      min = nums[i]
    }
  }
  return min 
 }
 else{
  return "Array is empty"
 }
}

// console.log(findMin([10,2,3,4,1,5,6,7,8,9,1]))