import IProduct from 'src/models/Product';

export enum ActionTypes {
  ADD_CART = '[carts] ADD_CART',
  REMOVE_CART = '[carts] REMOVE_CART',
  REMOVE_PRODUCT_FROM_CART = '[carts] REMOVE_ITEM_FROM_CART'
}

export interface IAddCartAction { type: ActionTypes.ADD_CART, payload: { quantity: number, product: IProduct } }
export interface IRemoveCartAction { type: ActionTypes.REMOVE_CART, payload: { quantity: number, product: IProduct } }
export interface IRemoveProductFromCartAction { type: ActionTypes.REMOVE_PRODUCT_FROM_CART, payload: { product: IProduct } }

export function addCart(item: IProduct): IAddCartAction {

  return {
    type: ActionTypes.ADD_CART,
    payload: {
      quantity: 1,
      product: item
    }
  }
}

export function removeCart(item: IProduct): IRemoveCartAction {
  return { 
    type: ActionTypes.REMOVE_CART, 
    payload: {
      quantity: 1,
      product: item
    }
  }
}

export function removeProductFromCart(item: IProduct): IRemoveProductFromCartAction {
  return { 
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART, 
    payload: {
      product: item
    }
  }
}


export type Action = IAddCartAction | IRemoveCartAction | IRemoveProductFromCartAction