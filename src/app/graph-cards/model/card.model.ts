export class Card{ 
    _id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    grade: number;

    constructor(obj?:any){
        this._id = obj && obj._id || '';
        this.title = obj && obj.title || '';
        this.subtitle = obj && obj.subtitle || '';
        this.description = obj && obj.description || '';
        this.image = obj && obj.image || '';
        this.grade = obj && obj.grade || null;
    }
}

export class CardList{
    count: number;
    results: Card[];

    constructor(obj?:any){
        this.count = obj && obj.count || null;
        this.results = obj && obj.results.map(x => new Card(x))
    }
}