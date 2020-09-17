function modifyArray(input) {
    let number = 1;
    let arr = [];

   let calc = {
       add: function() {arr.push(number)},
       remove: () => arr.pop()
   }

   input.forEach(e=>{
       calc[e]();
       number++;
   });

   return arr.length===0? "Empty" : arr.join("\n"); 
}
