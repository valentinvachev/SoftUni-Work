function storeOnlyUnique(input) {
    let storage = new Map();

    input.forEach(element => {
        let array = JSON.parse(element).sort((a,b)=>b-a);
        storage.set(array.join(","),array);
    });

    for (let i of Array.from(storage.values()).sort((a,b)=>a.length-b.length)) {
        console.log(`[${i.join(", ")}]`);
    }
}
