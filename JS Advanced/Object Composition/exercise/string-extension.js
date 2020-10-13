(function solve() {

    String.format = function (string, ...params) {
        let newString = string;
        for (let i=0;i<=params.length-1;i++) {
            if (newString.includes(`{${i}}`)) {
               newString = newString.replace(`{${i}}`,params[i]);
            }
        }

        return newString;
    };

    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str+this;
        } 
        return this+'';
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this+str;
        }
        return this+'';
    };

    String.prototype.isEmpty = function () {
        let result = this.trim().localeCompare('') === 0 ? true : false;
        return result;
    };

    String.prototype.truncate = function (n) {
        if (this.length<=n) {
            return this+'';

        } else if (n<4) {
            let array = [];    
            for (let i=1;i<=n;i++) {
                array.push('.');
            }
            return `${array.join('')}`;

        } else if (!this.includes(' ')) {
            return this.substr(0,n-3)+'...';
        } else {
            const array = this.split(' ');
            let result = '';
            for (let i=0;i<=array.length-1;i++) {
                if (result.length+array[i].length+3<=n) {
                    result+=array[i]+' ';
                } else {
                    break;
                }
            }

            return result.trim()+'...';
        }
    };

}());

