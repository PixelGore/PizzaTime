import store from '../Redux/reduxStore';
import { instance } from './api';


export const authAPI = {
    Register(username: string, phoneNumber: string, password: string, password2: string) {
        return instance.post('auth/', { username, phoneNumber, password, password2 })
    },
    Login(username: string, password: string) {
        return instance.post('login/', { username, password })
    },
    Me(token: string) {
        // Adding token as header
        instance.interceptors.request.use(function (config) {
            const token = store.getState().auth.token;
            config.headers.Authorization = `Token ${token}`;

            return config;
        });
        return instance.get('auth/').then(res => res.data)
    }
}