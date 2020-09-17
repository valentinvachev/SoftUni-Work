function matrixPairs(input) {
    let pairs = 0;

    for (let r = 0; r <= input.length - 1; r++) {
        for (let c = 0; c <= input[r].length - 1; c++) {


            let element = input[r][c];
            let belowElement = r===input.length-1? undefined : input[r + 1][c];
            let rightElement = c===input[r].length-1? undefined : input[r][c + 1];

            if (element === belowElement) {
                    pairs++;
                }

            if(element ===rightElement) {
                pairs++;
            }
        }
    }
          
    console.log(pairs);
}