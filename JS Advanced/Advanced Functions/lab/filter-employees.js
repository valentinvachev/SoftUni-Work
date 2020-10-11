function solve(data,criteria) {    
  return JSON.parse(data).reduce((acc,current,index)=>{
        if (criteria.localeCompare('all')===0) {
           acc.push(`${index}. ${current.first_name} ${current.last_name} - ${current.email}`);
        } else {
            let [property,requirement] = criteria.split('-');
            if (current[property]===requirement) {
            acc.push(`${acc.length}. ${current.first_name} ${current.last_name} - ${current.email}`);
            }
        }

        return acc;
    },[]).join('\n');
};

