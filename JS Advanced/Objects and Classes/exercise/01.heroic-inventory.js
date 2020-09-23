function createRegister(input) {
    const register = [];

    input.forEach(element => {
        let [name,level,items] = element.split(" / ");   // using rest

        register.push({
            name: name,
            level: Number(level),
            items: items? items.split(", ") : []
        });
    });


    console.log(JSON.stringify(register));
}

