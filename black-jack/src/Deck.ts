export class Deck {

    cards: any[] = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
    suits: any[] = ['♦','♣','♥','♠'];

    deck: any[] = [];

    constructor() {
        this.deck = this.generateDeck();
        this.deck = this.shuffleDeck();
    }

    generateDeck() {
    for (let i = 0; i < this.cards.length; i++) {
        for (let j = 0; j < this.suits.length; j++) {
            this.deck.push({value: this.cards[i], suit: this.suits[j]});            
        }
        
    }
    return this.deck;
    }

    shuffleDeck() {
        const deck  = this.deck;
        let m=deck.length,i;
        while(m) {
            i= Math.floor(Math.random()*m--);
            [deck[i],deck[m]] = [deck [m], deck[i]];
        }

        return this.deck;
    }

    removeOneCard() {
       if(this.deck.length === 0)
        return 'No cards left to play';
       else {
        const {value,suit} = this.deck.pop();
        return {value, suit};
       }
    }
}