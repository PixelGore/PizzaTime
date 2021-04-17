import { menuAPI } from './../../api/menuAPI';
import { InferActionTypes, BaseThunkType } from './../reduxStore';
import { ProductsType } from './../../types/types';
import { Dispatch } from 'redux';


// ActionCreators
export const actions = {
    setMenuAC: (products: ProductsType[]) => ({ type: 'menuPage/SET_MENU', products } as const),
    setInitiatedAC: () => ({ type: 'menuPage/InitiatedMenu'} as const)
}
type ActonTypes = InferActionTypes<typeof actions>

let initialState = {
    products: [] as ProductsType[],
    menuInitiated: false
}
type InitialStateType = typeof initialState


// Reducer
const menuReducer = (state = initialState, action: ActonTypes): InitialStateType => {
    switch (action.type) {
        case "menuPage/SET_MENU":
            return {
                ...state,
                products: action.products
            }
        case "menuPage/InitiatedMenu":
            return {
                ...state,
                menuInitiated: true
            }

        default:
            return state
    }
}

// Thunks
type DispatchType = Dispatch<ActonTypes>
type ThunkType = BaseThunkType<ActonTypes>

export const requestMenu = (): ThunkType => {
    return async (dispatch:DispatchType) => {
        let data = await menuAPI.getMenu()
        dispatch(actions.setInitiatedAC())
        dispatch(actions.setMenuAC(data))
    }
}


export default menuReducer;