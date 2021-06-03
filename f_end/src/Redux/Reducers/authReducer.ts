import { authAPI } from './../../api/authApi';
import { Dispatch } from 'react';
import { BaseThunkType, InferActionTypes } from './../reduxStore';

//Action Creators
export const actions = {
    getAuthTokenAC: (token: string) => ({ type: 'auth/LOGIN', payload: token } as const),
    getAuthMeAC: (me: string) => ({ type: 'auth/ME', payload: me } as const),
    FetchRegisterErrorAC: (error: string) => ({ type: 'auth/FETCH_REGISTER_ERROR', payload: error } as const),
    FetchRegisterAC: (response: string) => ({ type: 'auth/FETCH_REGISTER', payload: response } as const),
    FetchLogErrorAC: (error: string) => ({ type: 'auth/FETCH_LOGIN_ERROR', payload: error } as const),
    FetchLoginAC: (response: string) => ({ type: 'auth/FETCH_LOGIN', payload: response } as const)
}
type ActionTypes = InferActionTypes<typeof actions>


//InitialState
let initialState = {
    token: "",
    me: "",
    RegMsg: "",
    RegError: "",
    LogError: "",
}
export type InitialStorageStateType = typeof initialState


//Reducer
const authReducer = (state = initialState, action: ActionTypes): InitialStorageStateType => {
    switch (action.type) {
        case "auth/LOGIN":
            return {
                ...state,
                token: action.payload,
                LogError: ""
            }
        case "auth/ME":
            return {
                ...state,
                me: action.payload
            }
        case "auth/FETCH_REGISTER":
            return {
                ...state,
                RegMsg: action.payload,
                RegError: ""
            }
        case "auth/FETCH_REGISTER_ERROR":
            return {
                ...state,
                RegError: action.payload
            }
        case "auth/FETCH_LOGIN_ERROR":
            return {
                ...state,
                LogError: action.payload
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
            .then(res => res.data)
            .catch(err => dispatch(actions.FetchLogErrorAC(err.response.data)))
        let token = Object.values(loginData).toLocaleString()
        dispatch(actions.getAuthTokenAC(token))
        let meData = await authAPI.Me(token)
        dispatch(actions.getAuthMeAC(meData))
    }
}

export const register = (username: string, password: string, password2: string): ThunkType => {
    return async (dispatch: DispatchType) => {
        await authAPI.Register(username, password, password2)
            .then(res => dispatch(actions.FetchRegisterAC(res.data)))
            .catch(err => dispatch(actions.FetchRegisterErrorAC(err.response.data)))
    }

}


export default authReducer;