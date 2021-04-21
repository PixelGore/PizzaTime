import { ProductsType } from './../../types/types';
import { InferActionTypes } from './../reduxStore';
//Action Creators
export const actions = {
    setCartAC: (product: ProductsType) => ({ type: 'CART/SET_CART_ITEM', payload: product } as const),
    RMCartAC: (product: ProductsType) => ({ type: 'CART/REMOVE_CART_ITEM', payload: product } as const),
}
type ActionTypes = InferActionTypes<typeof actions>


let initialState = {
    cartItems: [] as ProductsType[],
}
type InitialStateType = typeof initialState


const cartReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "CART/SET_CART_ITEM":
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.id === item.id)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(stateItem =>
                        stateItem.id === existItem.id ? item : stateItem)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case "CART/REMOVE_CART_ITEM":
            return {
                ...state,
                cartItems: [...state.cartItems.filter(x => x.id !== action.payload.id)]
            }

        default:
            return state
    }
}


export default cartReducer;