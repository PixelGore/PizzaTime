export type UserType = {
  id: number;
  username: string;
};

export interface CheckoutType {
  form: {
    name: string;
    phone: string;
  };
  address: string;
  items: ProductsType[];
  total: number;
}

export type ProductsType = {
  id: number;
  name: string;
  description: string;
  price: number;
  category_name: string;
  image: string | null;
  quantity: number;
};

export type MenuType = {
  id: number;
  name: string;
  products: ProductsType[];
};

export enum ContactLinkIcon {
  YouTube = "YouTube",
  Instagram = "Instagram",
  Facebook = "Facebook",
  Twitter = "Twitter",
  Vk = "Vk",
}

export enum ContactInfoIcon {
  OpenHours = "OpenHours",
  Location = "Location",
  Phone = "Phone",
  Email = "Email",
}
