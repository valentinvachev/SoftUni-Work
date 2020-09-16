function transform(stringInput) {
  let arr = stringInput.split(/[\W]+/);
    console.log(arr
        .filter(a=>a.trim()!=="")
        .map(a=>a.toLocaleUpperCase())
        .join(", "));
} 

transform(`Hi, how are you`);