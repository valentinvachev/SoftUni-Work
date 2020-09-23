function produceJuice(input) {
    const bottleStorage = new Map();

    const quantityStorage = {};

    input.forEach(element => {
       let [juice,quantity] = element.split(" => ");

       if (quantityStorage.hasOwnProperty(juice)) {
           quantityStorage[juice] += Number(quantity); 
       } else {
        quantityStorage[juice] = Number(quantity);
       }

       checkIfQuantityIsEnoughForBottle(juice);
    });



    for (let pair of bottleStorage.entries()) {
        console.log(`${pair[0]} => ${pair[1]}`);
    }


  function checkIfQuantityIsEnoughForBottle(juice) {
        let bottles = Math.floor(quantityStorage[juice]/1000);
        if (bottles) {
            if (bottleStorage.has(juice)) {
                bottleStorage.set(juice,bottleStorage.get(juice)+bottles);
            } else {
                bottleStorage.set(juice,bottles);
            }
            quantityStorage[juice] -= bottles*1000;
        }
    }
}

