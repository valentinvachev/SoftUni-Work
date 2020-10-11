function solution(input) {

    // this === post    

    if (input==="upvote") {
        upvote.call(this);
    } else if (input==="downvote") {
        downvote.call(this);
    } else if (input === "score") {
       return score.call(this);
    }

    function upvote() {
        this.upvotes++;
    }

    function downvote() {
        this.downvotes++;
    }

    function score() {
        let result = [];

        if (this.upvotes + this.downvotes > 50) {

            let numberToAdd = Math.ceil(Math.max(this.upvotes,this.downvotes)*0.25);

            result[0] = this.upvotes+numberToAdd;
            result[1] = this.downvotes+numberToAdd;
            result[2] = result[0]-result[1];
            result[3] = determineRating(this.upvotes,this.downvotes,numberToAdd);
            

        } else {
            result[0] = this.upvotes;
            result[1] = this.downvotes;
            result[2] = this.upvotes - this.downvotes;
            result[3] = determineRating(this.upvotes,this.downvotes,0);
            
        }
        

        function determineRating(upvotesInput,downvotesInput,numberToAdd) {
            let balance = upvotesInput/(upvotesInput+downvotesInput)*100;
            let totalVotes = upvotesInput+downvotesInput;
            if (totalVotes<10) {
                return "new";
            } else if (balance>66) {
                return "hot";
            }  else if (balance>=50 && upvotesInput+numberToAdd>100 && downvotesInput+numberToAdd>100) {
                return "controversial";
            } else if (balance<50) {
                return "unpopular";
            } else {
                return "new";
            }
        }

        return result;
    }


}