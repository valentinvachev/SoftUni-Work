function storeCatalogue(input) {
    const catalogue = {};

    input.forEach(element => {
        let [name,price] = element.split(' : ');
        if (catalogue.hasOwnProperty(name.charAt(0))) {
            catalogue[name.charAt(0)].push({name,price});
        } else {
            catalogue[name.charAt(0)] = [];
            catalogue[name.charAt(0)].push({name,price});
        }
    });


   Object.keys(catalogue).sort().forEach(key=>{
        console.log(`${key}`);
        catalogue[key].sort((a,b)=>a.name.localeCompare(b.name)).forEach(innerObj=>{
        console.log(`  ${innerObj.name}: ${innerObj.price}`);
        });
    });
}
