function solve() {

    function mageCasting(cast) {
        this.mana--;
        console.log(`${this.name} cast ${cast}`);
    }

    function fight() {
        this.stamina--;
        console.log(`${this.name} slashes at the foe!`);
    }

    function mage(name) {
       let newObj = {name,health:100,mana:100,cast:mageCasting};
       return newObj;
    }

    function fighter(name) {
        let newObj = {name,health:100,stamina:100,fight:fight};
       return newObj;
    }

    return {
        mage,
        fighter
    };
}


