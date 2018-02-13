/**
2 * Provides a `Product` object
3 */
export class Product {
    constructor(
        public sku: string,
        public name: string,
        public imageUrl: string,
        public department: string[],
        public price: number) {

    }
}
