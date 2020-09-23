function citySales(input) {
    let data = new Map();

    input.forEach(row=>{
        let [city,product,quantity] = row.split(" -> ");
        let quantitySplit = quantity.split(" : ");
        let totalQuantity = Number(quantitySplit[0])*Number(quantitySplit[1]);

        if (data.has(city)) {

            if (data.get(city).has(product)) {
                let currentQuantity = data.get(city).get(product);
                data.get(city).set(product,currentQuantity+totalQuantity);
            } else {
                data.get(city).set(product,totalQuantity);
            }   
        } else {
            data.set(city,new Map());
            data.get(city).set(product,totalQuantity);
        }
    });

    for (let i of data.keys()) {
        console.log(`Town - ${i}`);
        for (let y of data.get(i).entries()) {
            console.log(`$$$${y[0]} : ${y[1]}`);
        }
    }
}

