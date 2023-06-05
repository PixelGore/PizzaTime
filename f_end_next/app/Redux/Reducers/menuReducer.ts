import { Dispatch } from 'redux';
import { menuAPI } from '../../api/menuAPI';
import { InferActionTypes, BaseThunkType } from '../reduxStore';
import { MenuType } from '../../types/types';


// ActionCreators
export const actions = {
    setMenuAC: (products: MenuType[]) => ({ type: 'menuPage/SET_MENU', products } as const),
    toggleIsFetchingAC: (isFetching: boolean) => ({ type: 'menuPage/TOGGLE_IS_FETCHING', isFetching } as const),
}
type ActonTypes = InferActionTypes<typeof actions>

let initialState = {
    menu: [] as MenuType[],
    isFetching: false,
}
type InitialStateType = typeof initialState


// Reducer
const menuReducer = (state = initialState, action: ActonTypes): InitialStateType => {
    switch (action.type) {
        case "menuPage/SET_MENU":
            return {
                ...state,
                menu: action.products
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
        dispatch(actions.toggleIsFetchingAC(true))
        let data = await menuAPI.getMenu()
        dispatch(actions.setMenuAC(data))
        dispatch(actions.toggleIsFetchingAC(false))
    }
}


export default menuReducer;
