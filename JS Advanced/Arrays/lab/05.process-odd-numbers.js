function processOddNumbers(arr) {
  return arr
    .filter((value,index,arr)=>index%2!==0)
    .map(e=>e*2)
    .reverse()
    .join(" ");
}


