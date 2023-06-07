import { Dispatch } from "react";
import { checkoutAPI } from "../../api/checkoutApi";
import { ProductsType } from "@/app/types/types";
import { BaseThunkType, InferActionTypes } from "./../reduxStore";
//Action Creators
export const actions = {
  setCartAC: (product: ProductsType) =>
    ({ type: "cart/SET_CART_ITEM", payload: product } as const),
  RMCartAC: (product: ProductsType) =>
    ({ type: "cart/REMOVE_CART_ITEM", payload: product } as const),
  setCartTotalAC: () => ({ type: "cart/SET_TOTAL_PRICE" } as const),
  setCartCountAC: () => ({ type: "cart/SET_CART_COUNT" } as const),
  setShippingPriceAC: () => ({ type: "cart/SET_SHIPPING_PRICE" } as const),
  setGrandTotalAC: () => ({ type: "cart/SET_GRAND_TOTAL" } as const),
  clearCartAC: () => ({ type: "cart/CLEAR_CART" } as const),
  IsFetchingAC: (isFetching: boolean) =>
    ({ type: "cart/IS_FETCHING", payload: isFetching } as const),
};
type ActionTypes = InferActionTypes<typeof actions>;

//InitialState
let initialState = {
  cartItems: [] as ProductsType[],
  subTotal: 0,
  grandTotal: 0,
  cartCount: 0,
  shippingPrice: 2,
  isFetching: false,
};
export type InitialStorageStateType = typeof initialState;

//Reducer
const cartReducer = (
  state = initialState,
  action: ActionTypes
): InitialStorageStateType => {
  switch (action.type) {
    case "cart/SET_CART_ITEM":
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        item.quantity++;
        return {
          ...state,
          cartItems: state.cartItems.map((stateItem) =>
            stateItem.id === existItem.id ? item : stateItem
          ),
        };
      } else {
        item.quantity = 1;
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case "cart/REMOVE_CART_ITEM":
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((x) => x.id !== action.payload.id),
        ],
      };

    case "cart/SET_TOTAL_PRICE":
      return {
        ...state,
        subTotal: +state.cartItems
          .reduce(
            (total, product) => total + product.price * product.quantity,
            0
          )
          .toFixed(2),
      };

    case "cart/SET_SHIPPING_PRICE":
      return {
        ...state,
        shippingPrice: state.subTotal >= 50 ? 0 : 2,
      };

    case "cart/SET_GRAND_TOTAL":
      return {
        ...state,
        grandTotal: state.subTotal + state.shippingPrice,
      };

    case "cart/SET_CART_COUNT":
      return {
        ...state,
        cartCount: state.cartItems.reduce(
          (items, product) => items + product.quantity,
          0
        ),
      };
    case "cart/CLEAR_CART":
      return {
        ...state,
        cartItems: [],
        subTotal: 0,
        grandTotal: 0,
        cartCount: 0,
        shippingPrice: 2,
      };
    case "cart/IS_FETCHING":
      return {
        ...state,
        isFetching: action.payload,
      };
    default:
      return state;
  }
};

// Thunks
type DispatchType = Dispatch<ActionTypes>;
type ThunkType = BaseThunkType<ActionTypes>;

export const AddToCart = (product: ProductsType): ThunkType => {
  return async (dispatch: DispatchType) => {
    dispatch(actions.setCartAC(product));
    dispatch(actions.setCartCountAC());
    dispatch(actions.setCartTotalAC());
    dispatch(actions.setShippingPriceAC());
    dispatch(actions.setGrandTotalAC());
  };
};

export const RemoveFromCart = (product: ProductsType): ThunkType => {
  return async (dispatch: DispatchType) => {
    dispatch(actions.RMCartAC(product));
    dispatch(actions.setCartCountAC());
    dispatch(actions.setCartTotalAC());
    dispatch(actions.setShippingPriceAC());
    dispatch(actions.setGrandTotalAC());
  };
};

export const SubmitCart = (
  form: { name: string; phone: string },
  address: string,
  items: ProductsType[],
  total: number
): ThunkType => {
  return async (dispatch: DispatchType) => {
    dispatch(actions.IsFetchingAC(true));
    await checkoutAPI.submit(form, address, items, total);
    dispatch(actions.clearCartAC());
    dispatch(actions.IsFetchingAC(false));
  };
};

export default cartReducer;
