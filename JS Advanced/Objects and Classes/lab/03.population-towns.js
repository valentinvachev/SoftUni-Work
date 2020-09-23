function townsAndPopulation(input) {
   let towns = input.reduce((acc,curr) => {
       let array = curr.split(" <-> ");

       if (acc.hasOwnProperty(array[0])) {
          acc[array[0]] += Number(array[1]); 
       } else {
        acc[array[0]] = Number(array[1]); 
       }

       return acc; 
    },{});

   for (let i in towns) {
       console.log(i+" : "+towns[i]);
   } 
}

townsAndPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);

