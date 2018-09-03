
import { Product } from '../../../shared/models/product.model';
import * as fromCart from './../actions';
export interface CartItem {
    product: Product;
    quantity: number;
}
export interface CartState {
    isEmpty: boolean;
    ids: string[];
    products: { [id: string]: CartItem };
    totalCount: number;
    totalSum: number;
}

export const initialCartState: CartState = {
    isEmpty: true,
    ids: [],
    products: {},
    totalCount: 0,
    totalSum: 0
};

export function reducer( state: CartState = initialCartState, action: fromCart.Actions): CartState {
    switch (action.type) {
        case fromCart.ADD_TO_CART: {
          const id: string = action.payload['product'].id;
          let prevQuantity: number = state.products[id] ? state.products[id].quantity : 0;
          let newQuantity: number = prevQuantity + action.payload['quantity'];
          
          if (state.products[id]) {
            if (newQuantity > state.products[id]['product'].stock) {
              newQuantity = state.products[id]['product'].stock;
              action.payload['quantity'] = action.payload['quantity'] - prevQuantity;
            }
          }

          const additionalSum: number = action.payload['quantity'] * Number(action.payload['product'].price);
          const searchId: string = state.ids.find((ids: string) => ids === id);

          // check adding duplicate product
          if (searchId === id) {
            return {
              ...state,
              products: {
                ...state.products,
                [id]: {
                  ...state.products[id],
                  quantity: newQuantity
                }
              },
              totalCount: state.totalCount + action.payload['quantity'],
              totalSum: state.totalSum + additionalSum
            };
          } else {
            return {
              ...state,
              isEmpty: false,
              ids: [...state.ids, id],
              products: {
                ...state.products,
                [id]: {
                  ...state.products[id],
                  product: action.payload['product'],
                  quantity: newQuantity
                }
              },
              totalCount: state.totalCount + action.payload['quantity'],
              totalSum: state.totalSum + additionalSum
            };
          }
        }

        case fromCart.DECREASE: {
            const id: string = <string>action.payload;

            return {
                ...state,
                isEmpty: false,
                products: {
                    ...state.products,
                    [id]: {
                        ...state.products[id],
                        quantity: state.products[id].quantity - 1
                    }
                },
                totalSum: state.totalSum - Number(state.products[id].product.price),
                totalCount: state.totalCount - 1,
            };
        }
        case fromCart.INCREASE: {
            const id: string = <string>action.payload;

            return {
                ...state,
                isEmpty: false,
                products: {
                    ...state.products,
                    [id]: {
                        ...state.products[id],
                        quantity: state.products[id].quantity + 1
                    }
                },
                totalSum: state.totalSum + Number(state.products[id].product.price),
                totalCount: state.totalCount + 1
            };
        }
        case fromCart.REMOVE_PRODUCT_FROM_CART: {
            const id: string = state.ids.find((t_id: string) => t_id === action['payload']);

            state.ids.splice(state.ids.indexOf(id), 1);
            state.totalCount = state.totalCount - state.products[id].quantity;
            state.totalSum = (state.totalSum - (state.products[id].quantity * Number(state.products[id].product.price))) + 1.98;
            delete state.products[id];

            const newstate: any = {
               ...state
            };

            return newstate;
        }

        case fromCart.CLEAR_CART: {
            return {
                isEmpty: true,
                ids: [],
                products: {},
                totalCount: 0,
                totalSum: 0
            };
        }
        default:
            return state;
    }
}
