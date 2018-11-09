// import * as randomWords from 'random-words'
import * as faker from 'faker'
// import config from '../config';
import IProduct from '../models/Product'

export enum ActionTypes {
    FETCH_PRODUCTS_BEGIN = '[products] FETCH_PRODUCTS_BEGIN',
    FETCH_PRODUCTS_SUCCESS = '[products] FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE = '[products] FETCH_PRODUCTS_FAILURE'
  }

export interface IFetchProductBegin { type: ActionTypes.FETCH_PRODUCTS_BEGIN, payload: { } }
export interface IFetchProductSuccess { type: ActionTypes.FETCH_PRODUCTS_SUCCESS, payload: { products: IProduct[] } }
export interface IFetchProductFailure { type: ActionTypes.FETCH_PRODUCTS_FAILURE, payload: { error: any } }

  
 function getProductData(idx: number) {
    return {
        "id": "_" + idx,
        "title": faker.lorem.sentence(5),
        "imageUrl": `https://picsum.photos/400/300/?image=${idx * 4}`,
        "description": faker.lorem.sentence(20, 30),
        "url": "",
        "prices": [{
            "amount": faker.commerce.price(100, 2000, 2),
            "currency": "SEK"
        }, {
            "amount": faker.commerce.price(10, 2000, 2),
            "currency": "EUR"
        }]
    }
 }

  function generateData() {
    return new Promise(resolve => {setTimeout(() => resolve(Array.from(Array(10), (v, k) => getProductData(k))), 100)})
  }
   
  export function fetchProducts() : any {
    return (dispatch: any) => {
      dispatch(fetchProductsBegin());
      return generateData()
        .then((json : any) => {
          dispatch(fetchProductsSuccess(json));
          return json;
        })
        .catch((error : any) =>
          dispatch(fetchProductsFailure(error))
        );
    };
  }

  /*
  function fetchAllProducts() { 
    return fetch(config.host + "/products")
      .then(handleErrors)
      .then(res => res.json())
  }

  // Handle HTTP errors since fetch won't.
  function handleErrors(response: any) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  */
  
  export const fetchProductsBegin = () => ({
    type: ActionTypes.FETCH_PRODUCTS_BEGIN
  });
  
  export const fetchProductsSuccess = (products: IProduct[]) => ({
    type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: { products }
  });
  
  export const fetchProductsFailure = (error: any) => ({
    type: ActionTypes.FETCH_PRODUCTS_FAILURE,
    payload: { error }
  });


  export type Action = IFetchProductBegin | IFetchProductSuccess | IFetchProductFailure