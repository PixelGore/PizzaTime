import { ProductsType } from "./../types/types";
import { instance } from "./api";

export const checkoutAPI = {
  submit(
    form: { name: string; phone: string },
    address: string,
    items: ProductsType[],
    total: number
  ) {
    // Auth Token is provided
    return instance
      .post("cart/", { form, address, items, total })
      .then((res) => res.data);
  },
};
