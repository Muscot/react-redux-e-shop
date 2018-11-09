import * as money from 'money-math'
import ICartSummerize from 'src/models/CartSummarize';
import { Action, ActionTypes } from '../actions/carts'
import config from '../config';
import ICart from '../models/Cart'

export interface IState {
  carts: ICart[],
  summerize: ICartSummerize 
}

export const initialState: IState = {
  carts: [],
  summerize: {
    amount: (0).toFixed(2),
    formatAmount: money.format(config.currency, (0).toFixed(2)),
    currency: config.currency,
    numberOfItems: 0
  }
}

export function reducer(state: IState = initialState, action: Action) {
  switch (action.type) {

    case ActionTypes.ADD_CART: {

      const {product, quantity} = action.payload

      const arr = {}  
      state.carts.forEach((c) => arr[c.product.id] = c);
      if (product.id in arr) {
        arr[product.id] = {...arr[product.id], quantity: arr[product.id].quantity + quantity}
      } else {
        arr[product.id] = {
          quantity: 1,
          product
        }
      }

      return {
        ...state,
        carts: Object.keys(arr).map(key => arr[key])
      }
    }
    case ActionTypes.REMOVE_CART: {

      const {product, quantity} = action.payload
  
      const arr = {}
      state.carts.forEach((c) => arr[c.product.id] = c);
      if (product.id in arr && arr[product.id].quantity >= quantity) {
        arr[product.id] = {...arr[product.id], quantity: arr[product.id].quantity - quantity}
      }

      return {
        ...state,
        carts: Object.keys(arr).map(key => arr[key])
      }
    }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {

      const product = action.payload.product
      const idx = state.carts.findIndex((c) => c.product.id === product.id);
      return {
        ...state,
        carts: [
          ...state.carts.slice(0, idx),
          ...state.carts.slice(idx + 1)
        ]
      };
    }
    default:
      return state
  }
}