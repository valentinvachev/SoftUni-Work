function sortArrayOfStrings(input) {
    input.sort((a,b)=>{
        if (a.length-b.length===0) {
            return (a.toLowerCase()).localeCompare(b.toLowerCase());
        } 
        return a.length - b.length;    
    }).forEach(element => console.log(element));
}