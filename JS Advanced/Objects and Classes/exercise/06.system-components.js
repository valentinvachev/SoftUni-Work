function createRegister(input) {
    const register  = {};


    input.forEach(element => {
        let [system,component,subComponent] = element.split(" | ");

        if (register.hasOwnProperty(system)) {
            if (register[system].hasOwnProperty(component)) {
                register[system][component].push(subComponent);
            } else {
                register[system][component] = [subComponent];
            }
        } else {
            register[system] = {};
            register[system][component] = [subComponent];
        } 
    });


    Object.keys(register).sort((a,b)=>{
      return Object.keys(register[b]).length - Object.keys(register[a]).length || a.toLowerCase().localeCompare(b.toLowerCase()); 
    }).forEach(system=>{
        console.log(system);
        Object.keys(register[system]).sort((a,b)=>{
          return register[system][b].length - register[system][a].length;
        }).forEach(comp=>{
            console.log(`|||${comp}`);
            register[system][comp].forEach(e=>{
                console.log(`||||||${e}`);
            });
        });
    });
}


