import { Product } from '../models/product.model';

export function productToArray(products: {[id: string]: Product}): Product[] {
    const result: Product[] = [];
    for (const id in products) {
        if (products.hasOwnProperty(id)) {
            result.push(products[id]);
        }
    }

    return result;
}
