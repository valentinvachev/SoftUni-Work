function findCityWithLowestPrice(input) {
    let register = new Map;

    input.forEach(o=>{
       let arr = o.split(" | ");

       if (!register.has(arr[1])) {
           register.set(arr[1],{ price: Number(arr[2]),city: arr[0]});
       } else {
               if (register.get(arr[1]).city === arr[0]) {
                    register.set(arr[1],{ price: Number(arr[2]),city: arr[0]});
               } else {
                   if (register.get(arr[1]).price > Number(arr[2])) {
                        register.set(arr[1],{ price: Number(arr[2]),city: arr[0]});
                   }
               }
           }
       });

       let output = [];
       for (let i of register.keys()) {
           output.push(`${i} -> ${register.get(i).price} (${register.get(i).city})`);
       }
       console.log(output.join("\n"));
} 



findCityWithLowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);