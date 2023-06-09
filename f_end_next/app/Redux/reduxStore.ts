import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Action,
} from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import cartReducer, { InitialStorageStateType } from "./Reducers/cartReducer";
import authReducer from "./Reducers/authReducer";
import menuReducer from "./Reducers/menuReducer";

// Root Reducer
let rootReducer = combineReducers({
  menuPage: menuReducer,
  cart: cartReducer,
  auth: authReducer,
});
export type AppStateType = ReturnType<typeof rootReducer>;

// LocalStorage Functionality
type localStorageType = {
  cart: InitialStorageStateType;
};

// convert object to string and store in localStorage
function saveToLocalStorage(state: localStorageType) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistentState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// ActionTypes
export type InferActionTypes<T> = T extends {
  [keys: string]: (...args: [any]) => infer U;
}
  ? U
  : never;

// ThunkTypes
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

const composeEnhancers =
  // @ts-ignore
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage({ cart: store.getState().cart }));

// @ts-ignore
if (typeof window !== "undefined") {
  // @ts-ignore
  window.__store__ = store;
}

export default store;
