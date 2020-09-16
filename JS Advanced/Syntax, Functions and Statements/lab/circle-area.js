function findCircleArea(a) {
    if (typeof a !== "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeof a}.`)
        return;
    }
    let result = Math.PI*(a**2);
    console.log(result.toFixed(2));
}

