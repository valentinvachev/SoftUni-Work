function printArrayWithDelimiterLastElement(arr) {
    console.log(arr.join(arr.pop(arr[arr.length-1])));
}
