let result = (function solve(){

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['♠','♥','♦', '♣'];
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };

    class Card{
        constructor(face,suit) {
            this.face = face;
            this.suit = suit;
        }

        set face(face) {
            if (!faces.includes(face)) {
                throw new Error;
            } 
            this._face = face;
        }

        set suit(suit) {
            if (!validSuits.includes(suit)) {
                throw new Error;
            } 
            this._suit = suit;
        }

        get face() {
            return this._face;
        }

        get suit() {
            return this._suit;
        }
    }

    return {
        Card,
        Suits
    };
})();




