function objectFactory(input) {
    let data = new Map();

    
       function create(name) {
            data.set(name,{});
       }

       function inherit (name,parentName) { 
            let parent  = data.get(parentName);
            data.set(name,Object.create(parent)); 
        }

        function set (name,key,value) {
             data.get(name)[key] = value;
        }

        function print (name) {
            let array = [];

            for (let i in data.get(name)) {
                array.push(`${i}:${data.get(name)[i]}`);
            }

            console.log(array.join(', '));
        }
 

    Array.from(input).forEach(c=>{
        const array = c.split(' ');
        const command = array[0];
        switch (command) {
            case 'create':

                if (array.length> 2) {
                    inherit(array[1],array[3]);
                } else {
                    create(array[1]);
                }

                break;
            case 'set':
                set(array[1],array[2],array[3]);
                break;
            case 'print':
                print(array[1]);
                break;        
        }
    });
}
