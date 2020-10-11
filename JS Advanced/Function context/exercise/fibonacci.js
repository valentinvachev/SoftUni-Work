function getFibonator() {
    let firstNum = 0;
    let secondNum = 0;

    return function nextNumber() {

        if (firstNum===0 && secondNum ===0) {
            secondNum++;
            return 1;
        }

        let result = firstNum+secondNum;
        firstNum = secondNum;
        secondNum = result;
        return result;
    };
}
