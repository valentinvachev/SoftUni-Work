function createRegister(input) {
    let register = new Map();

    input.forEach(element => {
        let [brand,model,quantity] = element.split(' | ');

        if (!register.has(brand)) {
            register.set(brand,new Map);
        }

        if (register.get(brand).has(model)) {
            register.get(brand).set(model,register.get(brand).get(model)+Number(quantity));
        } else {
            register.get(brand).set(model,Number(quantity));
        }
    });


    for (let i of register.entries()) {
        console.log(i[0]);
        for (let y of i[1].entries()) {
        console.log(`###${y[0]} -> ${y[1]}`);
      }
    }
}

