export type UserType = {
    id: number,
    username: string
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
