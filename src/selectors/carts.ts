import * as money from 'money-math'
import { createSelector } from 'reselect'
import config from '../config';
import { IState } from '../reducers'

const getCartsState = ((state: IState) => state.carts)

export const getCarts = createSelector([getCartsState], s => {
    return s.carts.map(cart => {
        cart.amount = money.mul(cart.product.amount, cart.quantity.toFixed(2));
        cart.currency = cart.product.currency;
        cart.formatAmount = money.format(cart.product.currency, cart.amount)
        return cart;
    })
})

export const getCartSummerize = createSelector([getCarts], s => {
    const total = s.reduce((acc, cart) => money.add(acc, cart.amount), (0).toFixed(2))
    const numberOfItems = s.reduce((acc, cart) => acc + cart.quantity, 0)
    return {
        formatAmount: money.format(config.currency, total),
        amount: total,
        currency: config.currency,
        numberOfItems
    }
})