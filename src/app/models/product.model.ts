export class Product {
    id: number;
    title: string;
    images: string[];
    price: number;
    description: string; 
    quantity: number

    constructor() {
        this.id = 1;
        this.title = '';
        this.images = [];
        this.price = 0;
        this.description = '';
        this.quantity = 1;
    }
}