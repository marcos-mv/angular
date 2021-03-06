export class Item{
    public id: Number;
    public title: string;
    public description: string;
    public photo: string;

    constructor(i:number, t:string, d:string, p:string){
        this.id = i;
        this.title = t;
        this.description = d;
        this.photo = p;
    }

    public static create_blank_item(){
        return new Item(1, 'first Title', 'first description', 'first photo');
    }

}