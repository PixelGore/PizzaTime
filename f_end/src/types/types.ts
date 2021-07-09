export type UserType = {
    id: number,
    username: string
}

export interface CheckoutType {
    form: {
        name: string;
        phone: string;
    }
    address: string;
    items: ProductsType[]
    total: number
}

export type ProductsType = {
    id: number;
    name: string;
    description: string;
    price: number;
    category_name: string;
    image: string | null;
    quantity: number;
}
