import {BlackJack} from './BlackJack';
import { Deck } from './Deck';
import {Notifications} from './Notifications';

test('black class on load', () => {
    const blackJack = new BlackJack();
    expect(blackJack.deck.deck.length).toBe(52);
    expect(blackJack.player).toEqual({name:'Harman',cards:[],points:0});
    expect(blackJack.dealer).toEqual({name:'Dealer',cards:[],points:0});
    expect(blackJack.notification).toBe('');
});

test('distribute cards', () => {
    const mockDeck = new Deck();
    mockDeck.deck = [
        {value:'A',suit:'♥'},
        {value:10,suit:'♦'},
        {value:2,suit:'♥'},
        {value:6,suit:'♣'},
        {value:'J',suit:'♦'},
        {value:3,suit:'♠'},
        {value:'K',suit:'♣'}
    ];
    const blackJack = new BlackJack();
    blackJack.deck = mockDeck;

    const resp = blackJack.distributeCards();
    expect(resp.notification).toBe('');
});

test('push immediately after deal', () => {
    const mockDeck = new Deck();
    mockDeck.deck = [
        {value:'J',suit:'♦'},
        {value:3,suit:'♠'},
        {value:'K',suit:'♣'},
        {value:'Q',suit:'♥'},
        {value:'A',suit:'♦'},
        {value:'A',suit:'♥'},
        {value:'K',suit:'♣'}
    ];
    const blackJack = new BlackJack();
    blackJack.deck = mockDeck;
    const resp = blackJack.distributeCards();
    expect(resp.notification).toBe(Notifications.PUSH);
});

test('player wins with a blackjack immediately after deal', () => {
    const mockDeck = new Deck();
    mockDeck.deck = [
        {value:'J',suit:'♦'},
        {value:3,suit:'♠'},
        {value:'K',suit:'♣'},
        {value:'Q',suit:'♥'},
        {value:'A',suit:'♦'},
        {value:2,suit:'♥'},
        {value:'K',suit:'♣'}
    ];
    const blackJack = new BlackJack();
    blackJack.deck = mockDeck;
    const resp = blackJack.distributeCards();
    expect(resp.notification).toBe(Notifications.PLAYER_BLACKJACK);
});

test('player hits and busts', () => {
    const mockDeck = new Deck();
    mockDeck.deck = [
        {value:'J',suit:'♦'},
        {value:3,suit:'♠'},
        {value:3,suit:'♣'},
        {value:'Q',suit:'♥'},
        {value:10,suit:'♦'},
        {value:'A',suit:'♥'},
        {value:'K',suit:'♣'}
    ];
    const blackJack = new BlackJack();
    blackJack.deck = mockDeck;
    blackJack.distributeCards();
    const resp = blackJack.hit();
    expect(resp).toBe(Notifications.PLAYER_BUST);
});

test('player hits and gets 21 but dealer has blackjack', () => {
    const mockDeck = new Deck();
    mockDeck.deck = [
        {value:'J',suit:'♦'},
        {value:3,suit:'♠'},
        {value:'A',suit:'♣'},
        {value:'Q',suit:'♥'},
        {value:10,suit:'♦'},
        {value:'A',suit:'♥'},
        {value:'K',suit:'♣'}
    ];
    const blackJack = new BlackJack();
    blackJack.deck = mockDeck;
    blackJack.distributeCards();
    const resp = blackJack.hit();
    expect(resp).toBe(Notifications.DEALER_BLACKJACK);
});


test('delear has soft 17', () => {
    const mockDeck = new Deck();
    mockDeck.deck = [
        {value:7,suit:'♦'},
        {value:'J',suit:'♦'},
        {value:'Q',suit:'♠'},
        {value:'A',suit:'♣'},
        {value:6,suit:'♥'},
        {value:8,suit:'♦'},
        {value:'A',suit:'♥'},
        {value:'K',suit:'♣'}
    ];
    const blackJack = new BlackJack();
    blackJack.deck = mockDeck;
    blackJack.distributeCards();
    const resp = blackJack.stand();
    expect(resp).toBe(Notifications.PUSH);
});


test('dealer busts', () => {
    const mockDeck = new Deck();
    mockDeck.deck = [
        {value:7,suit:'♦'},
        {value:'J',suit:'♦'},
        {value:'Q',suit:'♠'},
        {value:'K',suit:'♣'},
        {value:6,suit:'♥'},
        {value:8,suit:'♦'},
        {value:10,suit:'♥'},
        {value:'K',suit:'♣'}
    ];
    const blackJack = new BlackJack();
    blackJack.deck = mockDeck;
    blackJack.distributeCards();
    const resp = blackJack.stand();
    expect(resp).toBe(Notifications.DEALER_BUST);
});


test('delear wins with more points', () => {
    const mockDeck = new Deck();
    mockDeck.deck = [
        {value:7,suit:'♦'},
        {value:'J',suit:'♦'},
        {value:'Q',suit:'♠'},
        {value:3,suit:'♣'},
        {value:6,suit:'♥'},
        {value:8,suit:'♦'},
        {value:'Q',suit:'♥'},
        {value:'K',suit:'♣'}
    ];
    const blackJack = new BlackJack();
    blackJack.deck = mockDeck;
    blackJack.distributeCards();
    const resp = blackJack.stand();
    expect(resp).toBe(Notifications.DEALER_WINS);
});


test('player wins with more points', () => {
    const mockDeck = new Deck();
    mockDeck.deck = [
        {value:7,suit:'♦'},
        {value:'J',suit:'♦'},
        {value:'Q',suit:'♠'},
        {value:'A',suit:'♣'},
        {value:7,suit:'♥'},
        {value:8,suit:'♦'},
        {value:'Q',suit:'♥'},
        {value:'K',suit:'♣'}
    ];
    const blackJack = new BlackJack();
    blackJack.deck = mockDeck;
    blackJack.distributeCards();
    const resp = blackJack.stand();
    expect(resp).toBe(Notifications.PLAYER_WINS);
});

test('push condition', () => {
    const mockDeck = new Deck();
    mockDeck.deck = [
        {value:7,suit:'♦'},
        {value:'J',suit:'♦'},
        {value:3,suit:'♠'},
        {value:'A',suit:'♣'},
        {value:6,suit:'♥'},
        {value:8,suit:'♦'},
        {value:'Q',suit:'♥'},
        {value:'K',suit:'♣'}
    ];
    const blackJack = new BlackJack();
    blackJack.deck = mockDeck;
    blackJack.distributeCards();
    blackJack.hit();
    const resp = blackJack.stand();
    expect(resp).toBe(Notifications.PUSH);
});
