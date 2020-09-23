function storeTicketsAndSortThem(input,criteria) {

class Ticket {
    constructor(destination,price,status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
        return this;
    }
}

const database = [];


input.forEach(element => {
    let [destination,price,status] = element.split("|");
    let ticket = new Ticket(destination,Number(price),status);
    database.push(ticket);
});

if (criteria==="price") {
   return database.sort((a,b)=>a.price-b.price).reduce((acc,curr)=>{
        acc.push(curr);
        return acc;
    },[]);
} else {
  return database.sort((a,b)=>a[criteria].localeCompare(b[criteria])).reduce((acc,curr)=>{
        acc.push(curr);
        return acc;
    },[]);
  }
}
