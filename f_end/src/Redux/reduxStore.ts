import { createStore, combineReducers, Action, applyMiddleware } from "redux"
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import cartReducer, { InitialStorageStateType } from "./Reducers/cartReducer";
import menuReducer from "./Reducers/menuReducer"


// Root Reducer
let RootReducer = combineReducers({
    menuPage: menuReducer,
    cart: cartReducer,
})
export type AppStateType = ReturnType<typeof RootReducer>



// LocalStorage Functionality
type localStorageType = {
    cart: InitialStorageStateType
}

// convert object to string and store in localStorage
function saveToLocalStorage(state: localStorageType) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}




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
    loadFromLocalStorage(),
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage({ cart: store.getState().cart }));


// @ts-ignore
window.__store__ = store;

export default store;