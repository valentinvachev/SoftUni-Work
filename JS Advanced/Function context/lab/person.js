class Person{
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        let name = fullName.split(' ');
        if (name.length === 2) {
            this.firstName = name[0];
            this.lastName = name[1];
        }
    }
}
