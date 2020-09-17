function rotateArr(arr) {
    const arrayToRotate = arr.slice(0,arr.length-1);
    const times = Number(arr[arr.length-1])%arrayToRotate.length;

    for (let i=1;i<=times;i++) {
        arrayToRotate.unshift(arrayToRotate.pop());
    };

    console.log(arrayToRotate.join(" "));
}

