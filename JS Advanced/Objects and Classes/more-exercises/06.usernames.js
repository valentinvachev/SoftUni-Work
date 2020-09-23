function sortNames(input) {
    input.reduce((acc,curr)=>{
        if (!acc.includes(curr)) {
            acc.push(curr);
        }
        return acc;
    },[]).sort((a,b)=>{
        return a.length-b.length || a.localeCompare(b);
    }).forEach(element => {
      console.log(element);  
    });
}

