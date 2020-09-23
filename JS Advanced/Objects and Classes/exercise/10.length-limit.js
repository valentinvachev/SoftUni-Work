class Stringer {
    constructor(text, initialSize) {
        this.innerLength = initialSize;
        this.innerString = this.constructString(text);
        this.initialString = this.constructString(text);
    }

    increase(length) {
        for (let i = 1; i <= length; i++) {
            let letter = this.initialString.charAt(this.innerLength);
            letter === undefined ? letter : '';
            this.innerString+=letter;
            this.innerLength++;
        }

    }

    decrease(length) {
        if (this.innerLength - length < 0) {
            this.innerLength = 0;
            this.innerString = "";
        } else {
            for (let i = 1; i <= length; i++) {
                this.innerString = this.innerString.substring(0,this.innerString.length-1);
                this.innerLength--;
            }
        }
    }

    toString() {
        if (this.innerLength > this.initialString.length) {
            return this.initialString.trim() + '...';
        } else if (this.innerLength === 0) {
            return `...`;
        } else if (this.innerLength<this.initialString.length) {
            return this.innerString + '...';
        } else {
            return this.innerString;
        }
    }

    constructString(word) {
        let stringToReturn = word;
        for (let i=1;i<=this.innerLength-word.length;i++) {
            stringToReturn+=' ';
        }
        return stringToReturn;
    }
    
}