

function subtract() {   
    let elements = {
        firstNum: Number(document.getElementById("firstNumber").value),    
        secondNum: Number(document.getElementById("secondNumber").value),    
        result: document.getElementById("result")    
    };
    
   elements.result.textContent = elements.firstNum-elements.secondNum;
}