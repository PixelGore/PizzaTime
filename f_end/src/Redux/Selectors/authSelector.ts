import { AppStateType } from '../reduxStore';

export const getRegError = (state: AppStateType) => {
    return Object.values(state.auth.RegError) || null
}

export const getRegMsg = (state: AppStateType) => {
    return Object.values(state.auth.RegMsg) || null
}

export const getLogError = (state: AppStateType) => {
    return Object.values(state.auth.LogError) || null
}
export const getAuthMe = (state: AppStateType) => {
    return Object.values(state.auth.me) || null
}