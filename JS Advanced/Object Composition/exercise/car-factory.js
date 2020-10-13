function carBuilder(requirements) {

    let {model,power,color,carriage,wheelsize} = requirements; 

    let engines = [{ power: 90, volume: 1800 },{ power: 120, volume: 2400 },{ power: 200, volume: 3500 }];

    let carriages = {
        hatchback: (color) => {
          let c = { type: 'hatchback'};
          c.color = color;
          return c;
        },
        coupe: (color) => {
            let c = { type: 'coupe'};
            c.color = color;
            return c;
          },
    };

    function wheelsBuilder(wheelsize) {
            if (wheelsize%2===0) {
                return [wheelsize-1,wheelsize-1,wheelsize-1,wheelsize-1];
            }
        	return [wheelsize,wheelsize,wheelsize,wheelsize];
    }


    return {
        model,
        engine: engines.find(e=>e.power>=power),
        carriage: carriages[carriage](color),
        wheels: wheelsBuilder(wheelsize)
    };
}

