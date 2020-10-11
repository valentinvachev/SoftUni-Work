function solve(area,vol,input) {

    let objects = JSON.parse(input);
    const arrayObjects = [];

    objects.forEach(element => arrayObjects.push({area:Math.abs(area.call(element)),volume:Math.abs(vol.call(element))}));
     

    return arrayObjects;
}