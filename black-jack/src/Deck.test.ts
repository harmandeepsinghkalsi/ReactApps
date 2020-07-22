import {Deck} from './Deck';


test('generateDeck', () => {

    const deck = new Deck();
    expect(deck.deck.length).toBe(52);
});

test('generateDeck with custom data', () => {
    
    const deck = new Deck();
    deck.cards = [2,3,4];
    deck.suits = ['♦','♣'];
    deck.deck=[];
    deck.generateDeck();
    expect(deck.deck.length).toBe(6);
    
});

test('removeOneCard', () => {
    const deck = new Deck();
    deck.cards = [2,3];
    deck.suits = ['♦','♣'];
    deck.deck=[];
    deck.generateDeck();
    expect(deck.removeOneCard()).toEqual({value: 3, suit: '♣'});
    deck.removeOneCard();
    deck.removeOneCard();
    deck.removeOneCard();
    expect(deck.removeOneCard()).toBe('No cards left to play');
});