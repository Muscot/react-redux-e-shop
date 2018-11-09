import { combineReducers } from 'redux'
import * as fromCarts from './carts'
import * as fromProducts from './products'

export interface IState {
  carts: fromCarts.IState,
  products: fromProducts.IState
}

export const initialState: IState = {
  carts: fromCarts.initialState,
  products: fromProducts.initialState
}

export const reducer = combineReducers<IState>({
  carts: fromCarts.reducer,
  products: fromProducts.reducer
})