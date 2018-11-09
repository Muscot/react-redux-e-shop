import { Action, ActionTypes } from '../actions/products'
import IProduct from '../models/Product'

export interface IState {
  products: IProduct[]
  loading: boolean,
  error: null
}

export const initialState: IState = {
  products: [],
  loading: false,
  error: null
}

export function reducer(state: IState = initialState, action: Action) : IState {
  switch (action.type) {

        case ActionTypes.FETCH_PRODUCTS_BEGIN:
          return {
            ...state,
            loading: true,
            error: null
          };
    
        case ActionTypes.FETCH_PRODUCTS_SUCCESS:
          return {
            ...state,
            loading: false,
            products: action.payload.products
          };
    
        case ActionTypes.FETCH_PRODUCTS_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            products: []
          };

    default:
      return state
  }
}