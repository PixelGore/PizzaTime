import { instance } from "./api";
import { MenuType } from "./../types/types";

export const menuAPI = {
  getMenu() {
    return instance.get<MenuType[]>("product-list/").then((res) => res.data);
  },
};
