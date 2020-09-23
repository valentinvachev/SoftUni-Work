class Request{
    constructor(method,uri,version,message) {
        this.method = method;
        this._uri  = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }

    sayMethod() {
        console.log("The method is:"+this.method);
    }

    get uri() {
        return this._uri;
    }
 }

 

function Request2(method,uri,version,message) {
        this.method = method;
        this._uri  = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;


        this.sayMethod = function() {
            console.log("The method is:"+this.method);
        };
        

        function uri() {
            return this._uri;
        }
}

