function findIncreasingNumbers(input) {
    return input.reduce((acc, curr) => {

        if (curr >= acc[acc.length - 1] || acc.length===0) {
            acc.push(curr);
        }

        return acc;
    }, []).join("\n");
}

