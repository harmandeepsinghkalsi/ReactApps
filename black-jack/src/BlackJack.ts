import {Deck} from './Deck';
import {Player} from './Player';
import {TableView} from './TableView';
import {Notifications} from './Notifications';



export class BlackJack {

    player: Player;
    dealer: Player;
    notification: string;
    deck: any;

    constructor() {

        this.deck = new Deck();
        this.player = new Player('Harman',[],0);
        this.dealer = new Player('Dealer',[],0);
        this.notification = '';
    }

    startNewGame() {
        return this.distributeCards();
    }

    distributeCards() {
        this.player.cards.push(this.deck.removeOneCard());
        this.dealer.cards.push(this.deck.removeOneCard());
        this.player.cards.push(this.deck.removeOneCard());
        this.dealer.cards.push(this.deck.removeOneCard());

        this.player.points = this.getPoints(this.player.cards);
        this.dealer.points = this.getPoints(this.dealer.cards);
        if(this.player.points === 21 && this.dealer.points === 21) {
            this.notification = Notifications.PUSH;
        } else if(this.player.points === 21 && this.dealer.points<21) {
            this.notification = Notifications.PLAYER_BLACKJACK;
        }

        return {notification: this.notification, dealer: this.dealer, player: this.player};

    }

    getPoints(cards: any[]): number {

        let totalPoints: number = 0;
        let cardValue: any[] = [];
        const tempCardValue: number[] = [];
        cards.forEach(card => {
            if(card.value === 'A') {
                cardValue.push(card.value);
            } else {
                tempCardValue.push(card.value);
            }
        });

        cardValue = [...tempCardValue,...cardValue];

        for (let index = 0; index < cardValue.length; index++) {
            if(cardValue[index]=== 'J' || cardValue[index]=== 'Q' || cardValue[index]=== 'K') {
                totalPoints+=10;
            } else if(cardValue[index] === 'A') {
                totalPoints = (totalPoints+11 > 21)?totalPoints+1:totalPoints+11;
            } else {
                totalPoints+= cardValue[index];
            }
        }
        return totalPoints;
    }

    hit() {

        const card = this.deck.removeOneCard();
        
        this.player.cards.push(card);

        this.player.points = this.getPoints(this.player.cards);

        if(this.player.points > 21) {
            this.notification = Notifications.PLAYER_BUST;
        } else if(this.player.points === 21) {
            this.notification = this.stand();
        }

        return this.notification;

    }

    stand() {

        this.dealer.points = this.getPoints(this.dealer.cards);

        if(this.player.points <= 21 &&
            (this.dealer.cards.length === 2 && this.dealer.points === 21 ) ) {
            this.notification = Notifications.DEALER_BLACKJACK;
            return this.notification;
        } 

        while((this.dealer.cards.length === 2 && this.dealer.points === 17 &&
            (this.dealer.cards[0].value === 'A' || this.dealer.cards[1].value === 'A' ))
            || this.dealer.points < 17) {
                this.dealer.cards.push(this.deck.removeOneCard());
                this.dealer.points = this.getPoints(this.dealer.cards);
            }

        if(this.dealer.points > 21) {
            this.notification = Notifications.DEALER_BUST;
        } else  {
                this.notification = this.decideWinner();
            } 
        return this.notification;
    }

        decideWinner() {

            let message = '';
            if(this.dealer.points>this.player.points) {
                message = Notifications.DEALER_WINS;
            } else if(this.dealer.points < this.player.points ) {
                message =  Notifications.PLAYER_WINS;
            } else {
                message = Notifications.PUSH;
            }

            return message;
    }

}