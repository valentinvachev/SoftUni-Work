function staticParams(input) {
    let data = new Map();

    Array.from(arguments).forEach(p=>{
        let type = typeof p;
        console.log(`${type}: ${p}`);
        
        if (data.has(type)) {
            data.set(type,(data.get(type)+1));
        } else {
            data.set(type,1);
        }
    });

    Array.from(data.keys()).sort((a,b)=>data.get(b)-data.get(a))
    .forEach(e=>console.log(`${e} = ${data.get(e)}`));
}
