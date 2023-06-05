import { AppStateType } from './../reduxStore';

export const getMenu = (state: AppStateType) => {
    return state.menuPage.menu
}
export const getIsFetching = (state: AppStateType) => {
    return state.menuPage.isFetching;
}