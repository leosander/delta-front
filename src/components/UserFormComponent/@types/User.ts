export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    cep: string;
    uf: string;
    city: string;
    number: string;
    password: string;
    confirmPassword: string;
    photo: string | null;
  }