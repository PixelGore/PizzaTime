import { AppStateType } from '../reduxStore';

export const getCart = (state: AppStateType) => {
    return state.cart.cartItems
}

export const getCartCount = (state: AppStateType) => {
    return state.cart.cartCount
}

export const getSubTotal = (state: AppStateType) => {
    return state.cart.subTotal
}

export const getGrandTotal = (state: AppStateType) => {
    return state.cart.grandTotal
}

export const getShippingPrice = (state: AppStateType) => {
    return state.cart.shippingPrice
}