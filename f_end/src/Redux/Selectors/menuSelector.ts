import { AppStateType } from './../reduxStore';

export const getMenu = (state:AppStateType) => {
    return state.menuPage.products
}
export const getInitiated = (state:AppStateType) => {
    return state.menuPage.menuInitiated
}