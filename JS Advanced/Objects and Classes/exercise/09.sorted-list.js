class List{
    constructor() {
         this.data = [];
         this.size = 0;
    }

    add(element) {
        this.data.push(element);
        this.size++;
        this.sort();
    }

    remove(index) {
        if (index>=0 && index<=this.data.length-1) {
        this.data.splice(index,1);
        this.size--;
        }
    }

    get (index) {
        if (index>=0 && index<=this.data.length-1) {
        return this.data[index];
        }
    }

    sort() {
        this.data.sort((a,b)=>a-b);
    }


}
