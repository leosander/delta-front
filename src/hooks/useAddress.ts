import { useEffect, useState } from 'react';
import StudentsRepository from '../repositories/StudentsRepository';

export function useAddress(cep: string) {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    useEffect(() => {
        if (cep.length < 8) {
            setCity('');
            setUf('');
            setAddress('');
            return;
        }
        const fetchAddress = async () => {
            try {
                const response = await StudentsRepository.getUserAddress(cep);
                setCity(response.localidade);
                setUf(response.uf);
                setAddress(response.logradouro);
            } catch (error) {
                alert('Erro ao encontrar endereço');
            }
        };

        fetchAddress();

    }, [cep]);

    return { address, city, uf };
}
