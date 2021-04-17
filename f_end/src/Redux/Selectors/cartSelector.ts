import { AppStateType } from '../reduxStore';

export const getCart = (state:AppStateType) => {
    return state.cart.cartItems
}