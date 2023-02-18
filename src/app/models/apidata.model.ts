import { Product } from "./product.model";

export class ApiData {
    limit: number;
    products: Product[];
    skip: number;
    total: number;

    constructor() {
        this.limit = 0;
        this.products = [];
        this.skip = 0;
        this.total = 0;
    }
}