function solution() {

let book = {
    apple: {
        carbohydrate:1,
        flavour:2
    },
    lemonade: {
        carbohydrate:10,
        flavour:20
    },
    burger: {
        carbohydrate:5,
        fat:7,
        flavour:3
    },
    eggs: {
        protein:5,
        fat:1,
        flavour:1
    },
    turkey: {
        protein:10,
        carbohydrate:10,
        fat:10,
        flavour:10
    } 
};


let stock = {
    carbohydrate: 0,
    flavour: 0,
    fat: 0,
    protein: 0
};

function restock(microElements,quantity) {
    stock[microElements]+= quantity;
    return 'Success';
}

function prepare(recipe,quantity) {
    let result = checkIfQuantityInStock(recipe,quantity);
    if (result.localeCompare('nothing')===0) {
        decreaseValues(recipe,quantity);
        return 'Success';
    } else {
        return `Error: not enough ${result} in stock`;
    }
}

function decreaseValues(recipe,quantity) {
    let arrayIngredientsNeeded = Array.from(Object.keys(book[recipe]));
    for (let i=0;i<=arrayIngredientsNeeded.length-1;i++) {
        let product = arrayIngredientsNeeded[i];
        let neededQuantity = book[recipe][product]*quantity;
        stock[product]-=neededQuantity;
}
}

function checkIfQuantityInStock(recipe,quantity) {
    let missingProduct = 'nothing';
    let arrayIngredientsNeeded = Array.from(Object.keys(book[recipe]));
    for (let i=0;i<=arrayIngredientsNeeded.length-1;i++) {
        let product = arrayIngredientsNeeded[i];
        let neededQuantity = book[recipe][product]*quantity;
        if (stock[product]<neededQuantity) {
            missingProduct = product;
            break;
        }
    }
    return missingProduct;
}

function report() {
    return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
}

 return function manager(input) {
    let arrayInput = input.split(' ');
    let command = arrayInput[0];
    switch (command) {
        case 'restock':
            return restock(arrayInput[1],Number(arrayInput[2]));
        break;
        case 'prepare':
            return prepare(arrayInput[1],Number(arrayInput[2]));
        break;
        case 'report':
           return report();
        break;
    }
 };
}


