function solve() {

    let a;
    let b;
    let result;

    function init(selector1,selector2,resultSelector) {
        a = document.getElementById('num1');
        b = document.getElementById('num2');
        result = document.getElementById('result');
    } 

    function add() {
        result.value = Number(a.value) + Number(b.value);
    }

    function subtract() {
        result.value = Number(a.value) - Number(b.value);
    }

    return {
        init,
        add,
        subtract
    };
}


