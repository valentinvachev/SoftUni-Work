function biggestElementOfMatrix(arr) {
    let max = arr[0][0];

    arr.forEach(innerArray => {
        innerArray.forEach(e=>{
            if (e>max) {
                max = e;
            };
        })
    });

    return max;
}

