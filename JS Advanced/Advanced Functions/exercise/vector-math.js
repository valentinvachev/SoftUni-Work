(function solve() {

    
     let add = function (vec1,vec2) {
         return [vec1[0]+vec2[0],vec1[1]+vec2[1]];
        };

     let multiply = function (vec1,scalar) {
         return [vec1[0]*scalar,vec1[1]*scalar];
        };

     let length = function (vec1) {
         return Math.sqrt(Math.pow(vec1[0],2)+Math.pow(vec1[1],2));
        };

     let dot = function (vec1,vec2){
         return vec1[0]*vec2[0]+vec1[1]*vec2[1];
        };

     let cross = function (vec1,vec2) {
         return vec1[0]*vec2[1]-vec1[1]*vec2[0];
        };



    return {
        add,
        multiply,
        length,
        dot,
        cross
    };  
}());






