function cookByNumbers([num,...operations]) {
    let startValue = Number(num);

    const cooker = {
        chop: () => startValue/=2,
        dice: () => startValue = Math.sqrt(startValue),
        spice: () => startValue+=1,
        bake:() => startValue*=3,
        fillet:()=> startValue*=0.8
    }

    operations.forEach(e=> {
        cooker[e]();
        console.log(startValue);
    });
}


cookByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
