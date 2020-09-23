class Rat{
    constructor(name) {
        this.name = name;
        this.data = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
        this.data.push(otherRat);
        }
    }

    getRats() {
        return this.data;
    }

    toString() {
        let array = [];
        array.push(this.name);
        this.data.forEach(e=>{
            array.push(`##${e.name}`);
        });

        return array.join("\n");
    }
 }


