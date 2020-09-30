class Extensible{
    static id = 0;
    constructor() {
        this.id = Extensible.id++;
    }

    extend(template) {
        for (let i in template) {
            if (typeof template[i] === "function") {
                Extensible.prototype[i] = template[i];
            } else {
                this[i] = template[i];
            }
        }
    }
}

