export class Player{
    name: string;
    cards: any[];
    points: number;

    constructor(name: string, cards: any[], points: number) {
        this.name = name;
        this.cards = cards;
        this.points = points;
    }
}