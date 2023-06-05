import api from "../services/api";
import { API_BASE } from "../config/globals";

const BASE = `${API_BASE}`;
class AuthRepository {
    private static instance: AuthRepository;

    private constructor() {}

    static getInstance() {
        if (!AuthRepository.instance) {
            AuthRepository.instance = new AuthRepository();
        }
        return AuthRepository.instance;
    }
    async login(credentials: { email: string; password: string }): Promise<any> {
        const response = await api.post(`${BASE}auth/login`, credentials);
        return response.data;
    }
    async me(): Promise<any> {
        const response = await api.get(`${BASE}auth/me`);
        return response.data;
    }
   
}

export default AuthRepository.getInstance();
