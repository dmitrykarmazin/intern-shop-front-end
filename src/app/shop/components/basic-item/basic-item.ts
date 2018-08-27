import { Input, Output, EventEmitter } from '@angular/core';

import Product from '../../models/product';

export default class BasicItem {

    @Input() product: Product;

    @Output() emitAddToCard: EventEmitter<string> = new EventEmitter<string>();

    private addToCard(): void {
        console.log('Buy me!!!. My id:', this.product.id);
        this.emitAddToCard.emit(this.product.id);
    }
}
