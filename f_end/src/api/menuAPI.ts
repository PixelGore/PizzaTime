import { instance } from './api';
import { ProductsType } from './../types/types';

export const menuAPI = {
    getMenu() {
        return instance.get<ProductsType[]>('product-list/').then(res => res.data)
    }
}