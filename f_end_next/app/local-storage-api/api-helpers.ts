import { InitialStorageStateType as InitialCartState } from "@/app/Redux/Reducers/cartReducer";

export function getLocalStoragePersistentState() {
  if (typeof localStorage === "undefined") return;
  const state = localStorage.getItem("persistentState");
  if (!state) return null;
  return JSON.parse(state);
}

export function getCartFromLocalStorage(): InitialCartState | null {
  const state = getLocalStoragePersistentState();
  if (!state) return null;
  return state.cart;
}
