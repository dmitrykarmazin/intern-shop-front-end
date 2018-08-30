import { Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/shared/models/product.model';

export default abstract class BasicItem {

    @Input() product: Product;

    @Output() emitAddToCart: EventEmitter<Product> = new EventEmitter<Product>();

    protected addToCart(): void {
        this.emitAddToCart.emit(this.product);
    }
}
