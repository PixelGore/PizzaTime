import { Dispatch } from 'react';
import { ProductsType } from './../../types/types';
import { BaseThunkType, InferActionTypes } from './../reduxStore';
//Action Creators
export const actions = {
    setCartAC: (product: ProductsType) => ({ type: 'CART/SET_CART_ITEM', payload: product } as const),
    RMCartAC: (product: ProductsType) => ({ type: 'CART/REMOVE_CART_ITEM', payload: product } as const),
    setCartTotalAC: () => ({ type: 'CART/SET_TOTAL_PRICE' } as const),
    setCartCountAC: () => ({ type: 'CART/SET_CART_COUNT' } as const),
    setShippingPriceAC: () => ({ type: 'CART/SET_SHIPPING_PRICE' } as const),
    setGrandTotalAC: () => ({ type: 'CART/SET_GRAND_TOTAL' } as const),
}
type ActionTypes = InferActionTypes<typeof actions>


//InitialState
let initialState = {
    cartItems: [] as ProductsType[],
    subTotal: 0,
    grandTotal: 0,
    cartCount: 0,
    shippingPrice: 2,
}
type InitialStateType = typeof initialState


//Reducer
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

        case "CART/SET_TOTAL_PRICE":
            return {
                ...state,
                subTotal: +state.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
            }

        case "CART/SET_SHIPPING_PRICE":
            return {
                ...state,
                shippingPrice: state.subTotal >= 50 ? 0 : 2,
            }

        case "CART/SET_GRAND_TOTAL":
            return {
                ...state,
                grandTotal: state.subTotal + state.shippingPrice
            }

        case "CART/SET_CART_COUNT":
            return {
                ...state,
                cartCount: state.cartItems.reduce((items, product) => items + product.quantity, 0)
            }
        default:
            return state
    }
}

// Thunks
type DispatchType = Dispatch<ActionTypes>
type ThunkType = BaseThunkType<ActionTypes>

export const AddToCart = (product: ProductsType): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(actions.setCartAC(product))
        dispatch(actions.setCartCountAC())
        dispatch(actions.setCartTotalAC())
        dispatch(actions.setShippingPriceAC())
        dispatch(actions.setGrandTotalAC())
    }
}

export const RemoveFromCart = (product: ProductsType): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(actions.RMCartAC(product))
        dispatch(actions.setCartCountAC())
        dispatch(actions.setCartTotalAC())
        dispatch(actions.setShippingPriceAC())
        dispatch(actions.setGrandTotalAC())
    }
}

export default cartReducer;