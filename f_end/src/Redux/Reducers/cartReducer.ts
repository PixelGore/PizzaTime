import { ProductsType } from './../../types/types';
import { InferActionTypes } from './../reduxStore';

//Action Creators
export const actions = {
    setCartAC: (product:ProductsType) => ({ type: 'CART/SET_CART_ITEMS', payload:product } as const),
}
type ActonTypes = InferActionTypes<typeof actions>

let initialState = {
    cartItems: [] as ProductsType[],
}
type InitialStateType = typeof initialState

const cartReducer = (state = initialState, action: ActonTypes): InitialStateType => {
    switch (action.type) {
        case "CART/SET_CART_ITEMS":
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }

        default:
            return state
    }
}

export default cartReducer;