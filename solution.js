// ------------------------------ Solution 3 --------------------------------

const array = [23,43,83,45,64]

function findMax(arr){
  let max = arr[0];
  for(let i = 1; i <arr.length ; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max
}

console.log(findMax(array))