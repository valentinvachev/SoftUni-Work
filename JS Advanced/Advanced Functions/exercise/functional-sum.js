function add(n) {
    let calc = function(x) {
        return add(n + x);
    };

    calc.valueOf = function() {
        return n;   
    };

    return calc;
}


let b = add(1)(6);
console.log(b);