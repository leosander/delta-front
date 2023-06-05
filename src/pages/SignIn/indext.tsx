import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/delta-logo.png';
import AuthRepository from '../../repositories/AuthRepository';
import UserModalComponent from '../../components/UserModalComponent';
import { Container, Form,  Input, Button, Link, Logo } from './styles';
import { toast } from 'react-toastify';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const credentials = {
            email: email,
            password: password,
        };

        try {
            const response = await AuthRepository.login(credentials);
            if (response && response.token) {
                sessionStorage.setItem('jwtToken', response.token);
                sessionStorage.setItem('user_name', response.user.name); 
                sessionStorage.setItem('user_photo', response.user.photo); 
                toast.success('Login bem sucedido!');
                navigate('/');
            }   
        } catch (error) {
            toast.error('E-mail ou senha incorretos!');
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
            <Logo src={logoImg} alt="Logo da empresa" />
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                 <Link type="button" onClick={handleOpenModal}>Criar uma conta</Link>
                <Button type="submit">Entrar</Button>
            </Form>
            <UserModalComponent
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </Container>
    );
};