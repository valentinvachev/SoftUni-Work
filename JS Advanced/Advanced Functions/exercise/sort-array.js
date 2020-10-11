function solve(input,criteria) {

   return Array.from(input).sort((a,b)=>{
       let result = criteria.localeCompare('asc') === 0 ? a-b : b-a;
       return result;
    });
}

