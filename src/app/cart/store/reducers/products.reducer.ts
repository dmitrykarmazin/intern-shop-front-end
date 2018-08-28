import * as FromProducts from '../actions/products.action';
import { Product } from '../../../shared/models/product';

export interface CartState {
    products: { product: Product, quantity: number }[],
    total: number;
}

export const initialState: CartState = {
    products: [
        {
            product: {
                "id": 1,
                "title": "The Motorcycle Diaries",
                "description": "The Motorcycle Diaries is a story which revolves around 2 men who embark on a road journey on a 1939 Norton 500cc cylinder motorcycle from Buenos Aires. They are out to discover and explore South America. This book had been written 8 years prior to the Cuban Revolution. The person who wrote the memoirs of this journey was one of those 2 bikers, Ernesto Guevara. He focused on the injustices that were prevalent at that time in South America.",
                "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/41PhxnsPE4L._SX327_BO1,204,203,200_.jpg",
                "price": 188,
                "quantity": 2
            },
            quantity: 0
        },
        {
            product:  {
                "id": 2,
                "title": "Destinations of a Lifetime",
                "description": "National Geographic takes you on a photographic tour of our world in this spellbinding new coffee table travel gift book. Hundreds of Earth's most breath taking locales are illustrated with vivid, oversized full-color images taken by Nat Geo's world-class photographers.",
                "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/61DQw411nRL._SX399_BO1,204,203,200_.jpg",
                "price": 1615,
                "quantity": 3
            },
            quantity: 0
        }
    ],
    total: 0
}

export function reducer(
    state = initialState,
    action: FromProducts.ProductsAction
): CartState {
    switch(action.type) {
        case FromProducts.LOAD_PRODUCTS: {
            return {
                ...state
            }
        }
    }

    return state;
}

export const getItems = (state: CartState) => state.products;