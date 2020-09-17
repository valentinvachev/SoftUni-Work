function findTwoSmallestNumbers(arr) {
   let sorted = arr.sort((a,b)=>a-b);
    
   return `${sorted[0]} ${sorted[1]}`
}


console.log(findTwoSmallestNumbers([8, 0, 10, 4, 7, 3]));