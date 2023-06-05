import api from "../services/api";
import { API_BASE } from "../config/globals";

const BASE = `${API_BASE}`;
class StudentsRepository {
    private static instance: StudentsRepository;

    private constructor() {}

    static getInstance() {
        if (!StudentsRepository.instance) {
            StudentsRepository.instance = new StudentsRepository();
        }
        return StudentsRepository.instance;
    }

    async getAll(): Promise<any> {
        const response = await api.get(`${BASE}students`);
        return response.data;
    }

    async createStudent(formData: FormData): Promise<any> {
        const response = await api.post(`${BASE}students`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
        });
        return response.data;
    }

    async updateStudent(formData: FormData): Promise<any> {
        const response = await api.post(`${BASE}students/updateStudent`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }
    
    async deleteStudent(id: string): Promise<any> {
        const response = await api.delete(`${BASE}students/${id}`);
        return response.data;
    }

    async getUserAddress(cep: string) {
        const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    }
   
}

export default StudentsRepository.getInstance();
