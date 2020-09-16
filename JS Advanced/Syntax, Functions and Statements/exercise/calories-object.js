function buildCaloriesObject(arr=[]) {
    const calorieObject = arr.reduce((acc,curr,index,array)=>{
        if (index%2===0) {
            acc[curr] = Number(array[index+1]);
        }
        return acc;
    },{});

    console.log(calorieObject);
}


buildCaloriesObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);