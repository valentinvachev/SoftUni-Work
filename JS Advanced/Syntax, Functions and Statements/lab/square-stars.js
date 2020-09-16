let squareOfStars = function(size = 5) {
    for (let i=1;i<=size;i++) {
        const arr = [];
        for (let y=1;y<=size;y++) {
            arr.push("*");
        }
        console.log(arr.join(" "));
    }
}

squareOfStars(10);