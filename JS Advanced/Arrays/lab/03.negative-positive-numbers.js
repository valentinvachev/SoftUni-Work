function operations(input) {

    const result = [];

    input.forEach(e => {
        if (e<0) {
            result.unshift(e);
        } else {
            result.push(e);
        }
    });

    result.forEach(e=>console.log(e));
}


operations([7, -2, 8, 9]);