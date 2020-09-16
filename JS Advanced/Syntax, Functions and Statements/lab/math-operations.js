function mathOperation(num1,num2,stringInput) {

    let calculator = {
        "+": (num1,num2) => num1+num2,
        "-": (num1,num2) => num1-num2,
        "*": (num1,num2) => num1*num2,
        "/": (num1,num2) => num1/num2,
        "%": (num1,num2) => num1%num2,
        "**": (num1,num2) => num1**num2,
    }

    console.log(calculator[stringInput](num1,num2));
}


