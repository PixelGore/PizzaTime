import { createStore, combineReducers, Action, applyMiddleware } from "redux"
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import menuReducer from "./Reducers/menuReducer"


let RootReducer = combineReducers({
    menuPage: menuReducer
})
export type AppStateType = ReturnType<typeof RootReducer>


//ActionTypes
export type InferActionTypes<T> = T extends {
    [keys: string]: (...args: [any]) => infer U
}
    ? U
    : never

//ThunkTypes
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
    R,
    AppStateType,
    unknown,
    A
>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);
// @ts-ignore
window.__store__ = store;

export default store;