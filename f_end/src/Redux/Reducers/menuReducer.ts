import { menuAPI } from './../../api/menuAPI';
import { InferActionTypes, BaseThunkType } from './../reduxStore';
import { ProductsType } from './../../types/types';
import { Dispatch } from 'redux';


// ActionCreators
export const actions = {
    setMenuAC: (products: ProductsType[]) => ({ type: 'menuPage/SET_MENU', products } as const),
    toggleIsFetchingAC: (isFetching: boolean) => ({ type: 'menuPage/TOGGLE_IS_FETCHING', isFetching } as const),
}
type ActonTypes = InferActionTypes<typeof actions>

let initialState = {
    products: [] as ProductsType[],
    isFetching: true,
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

        case "menuPage/TOGGLE_IS_FETCHING":
            return { ...state, isFetching: action.isFetching }
        default:
            return state
    }
}

// Thunks
type DispatchType = Dispatch<ActonTypes>
type ThunkType = BaseThunkType<ActonTypes>

export const requestMenu = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        let data = await menuAPI.getMenu()
        dispatch(actions.setMenuAC(data))
        dispatch(actions.toggleIsFetchingAC(false))
    }
}


export default menuReducer;