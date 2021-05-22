import { authAPI } from './../../api/authApi';
import { Dispatch } from 'react';
import { BaseThunkType, InferActionTypes } from './../reduxStore';
//Action Creators
export const actions = {
    getAuthTokenAC: (token: string) => ({ type: 'auth/LOGIN', token } as const),
    getAuthMeAC: (me: string) => ({ type: 'auth/ME', me } as const)
}
type ActionTypes = InferActionTypes<typeof actions>


//InitialState
let initialState = {
    auth: "",
    me: ""
}
export type InitialStorageStateType = typeof initialState


//Reducer
const authReducer = (state = initialState, action: ActionTypes): InitialStorageStateType => {
    switch (action.type) {
        case "auth/LOGIN":
            return {
                ...state,
                auth: action.token
            }
        case "auth/ME":
            return {
                ...state,
                me: action.me
            }

        default:
            return state
    }
}

// Thunks
type DispatchType = Dispatch<ActionTypes>
type ThunkType = BaseThunkType<ActionTypes>

export const login = (username: string, password: string): ThunkType => {
    return async (dispatch: DispatchType) => {
        let loginData = await authAPI.Login(username, password)
        let token = Object.values(loginData).toLocaleString()
        dispatch(actions.getAuthTokenAC(token))
        let meData = await authAPI.Me(token)
        dispatch(actions.getAuthMeAC(meData))
    }
}

export const register = async (username: string, password: string, password2: string) => {
    await authAPI.Register(username, password, password2)
}


export default authReducer;