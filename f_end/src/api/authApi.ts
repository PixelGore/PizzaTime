import store from '../Redux/reduxStore';
import { instance } from './api';


export const authAPI = {
    Register(username: string, password: string, password2: string) {
        return instance.post('auth/', { username, password, password2 }).then(res => res.data)
    },
    Login(username: string, password: string) {
        return instance.post('login/', { username, password }).then(res => res.data)
    },
    Me(token: string) {
        // axios.defaults.headers.common['Authorization'] = `Token ${token}`
        instance.interceptors.request.use(function (config) {
            const token = store.getState().auth.auth;
            config.headers.Authorization = `Token ${token}`;

            return config;
        });
        return instance.get('auth/').then(res => res.data)
    }
}