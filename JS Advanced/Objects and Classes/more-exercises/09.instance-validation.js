class CheckingAccount{
    constructor(clientId,email,firstName,lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(clientId) {
        
        if (clientId.length!==6 || !this.validateNumber(clientId)) {
            throw new TypeError('Client ID must be a 6-digit number');
        } 
        this._clientId = clientId;
    }

    set email(email) {
        if (!email.match(/\w+\@[a-zA-Z\.]+/)) {
            throw new TypeError('Invalid e-mail');
        } 
        this._email = email;
    }

    set firstName(firstName) {
        if (firstName.length<3 || firstName.length>20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        } else if (firstName.match(/[^a-zA-z]/)) {
            throw new TypeError('First name must contain only Latin characters');
        }
        this._firstName = firstName;
    }

    set lastName(lastName) {
        if (lastName.length<3 || lastName.length>20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        } else if (lastName.match(/[^a-zA-z]/)) {
            throw new TypeError('Last name must contain only Latin characters');
        }
        this._lastName = lastName;
    }


    validateNumber(number) {
        let numbers = [0,1,2,3,4,5,6,7,8,9];
        let array = number.split('');
        for (let i=0;i<=array.length-1;i++) {
            if (!numbers.includes(Number(array[i]))) {
                return false;
            }
        }
        return true;
    }

} 
