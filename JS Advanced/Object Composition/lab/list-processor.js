function solve(input) {
    let list = [];

    let processor = {
        add: (str) => list.push(str),
        remove: (str) => list = list.filter(e=>e.localeCompare(str)!==0),
        print: () => console.log(list.join(","))
    };

    Array.from(input).forEach(c=>{
       let [command,string] = c.split(' ');
       processor[command](string);
    });
}



