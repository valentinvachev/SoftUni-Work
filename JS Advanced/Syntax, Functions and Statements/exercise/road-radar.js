function findIfSpeedIsInTheLimit([speed,area]) {

    let areaLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let difference = speed-areaLimits[area];
    
    if (difference>40) {
        console.log("reckless driving");
    } else if (difference>20) {
        console.log("excessive speeding"); 
    } else if (difference>0) {
        console.log("speeding");
    }
}

