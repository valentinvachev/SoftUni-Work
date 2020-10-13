function solve() {

    let object = {
        extend: function (template) {
            Object.keys(template).forEach(k=>{
                if (typeof template[k] === 'function') {
                    Object.getPrototypeOf(this)[k] = template[k];
                } else {
                    this[k] = template[k];
                }
            });
        }
    };


    return object;
}

