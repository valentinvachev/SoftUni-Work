function checkValidityOfPoints([x1,y1,x2,y2]) {
 
    let distanceX1Y1ToMid = Math.sqrt((0-x1)**2+(0-y1)**2);
    let valid1 = distanceX1Y1ToMid%1
    let distanceX2Y2ToMid = Math.sqrt((x2-0)**2+(y2-0)**2);
    let valid2 = distanceX2Y2ToMid%1
    let distanceX1Y1ToX2Xy = Math.sqrt((x2-x1)**2+(y2-y1)**2);
    let valid3 = distanceX1Y1ToX2Xy%1;

    let result1 = valid1>0? 'invalid' : 'valid';
    let result2 = valid2>0? 'invalid' : 'valid';
    let result3 = valid3>0? 'invalid' : 'valid';

    console.log(`{${x1}, ${y1}} to {0, 0} is ${result1}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${result2}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result3}`)
}