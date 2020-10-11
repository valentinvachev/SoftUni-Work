function arrayMap(arr,fn) {
   return arr.reduce((acc,el)=>{
        acc.push(fn.call(null,el));
        return acc;
    },[]);
}