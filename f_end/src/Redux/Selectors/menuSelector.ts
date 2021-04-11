import { AppStateType } from './../reduxStore';

export const getMenu = (state:AppStateType) => {
    return state.menuPage.products
}