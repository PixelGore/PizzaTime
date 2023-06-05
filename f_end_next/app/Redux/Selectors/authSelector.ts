import { AppStateType } from '../reduxStore';

export const getRegError = (state: AppStateType) => {
    return Object.values(state.auth.RegError)
}

export const getRegMsg = (state: AppStateType) => {
    return Object.values(state.auth.RegMsg)
}

export const getLogError = (state: AppStateType) => {
    return Object.values(state.auth.LogError)
}
export const getAuthMe = (state: AppStateType) => {
    return Object.values(state.auth.me)
}

export const getisFetchingLogin = (state: AppStateType) => {
    return state.auth.isFetchingLogin
}

export const getisFetchingRegister = (state: AppStateType) => {
    return state.auth.isFetchingRegister
}