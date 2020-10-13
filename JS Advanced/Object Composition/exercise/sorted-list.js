function sortedList() {

     const list = [];
     let size = 0;

     function add(element) {
         list.push(element);
         size++;
         sort();
     }

     function sort() {
        list.sort((a,b)=>a-b);
     }

     function remove(index) {
         if(checkIndex(index)) {
         list.splice(index,1);
         size--;
         }
     }

     function get(index) {
         if (checkIndex(index)) {
         return list[index];
         }
     }

     function checkIndex(index) {
         if (index<0 || index>=list.length) {
             return false;
         } 
         return true;
     }

    

     return {
         add,
         remove,
         get,
         get size() {
            return size;
        } 
     };
}
