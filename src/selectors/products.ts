import * as money from 'money-math'
import { createSelector } from 'reselect'
import IProduct from 'src/models/Product';
import config from '../config';
import { IState } from '../reducers'

/*
 * Get the carts state from the root state
 */
const getProductsState = ((state: IState) => state.products)

/*
 * Getting carts array from carts State
 */
export const getProducts = createSelector([getProductsState], s => {
    const arrInitialValue: IProduct[] = [];
    return s.products.reduce((result, product) => {
        const price = product.prices.find((value) => value.currency === config.currency )
        // remove product if no price is found
        if (!price) {
            return result;
        }

        product.amount = money.floatToAmount(price.amount)
        product.formatAmount = money.format(config.currency, product.amount)
        product.currency = config.currency
        result.push(product)
        return result
    }, arrInitialValue)
})