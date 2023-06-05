import React, { useState, useRef, useEffect } from 'react';
import { User } from './@types/User';
import StudentsRepository from '../../repositories/StudentsRepository';
import { useAddress } from '../../hooks/useAddress';
import { toast } from 'react-toastify';
import { useImage } from '../../hooks/useImage';

import 
{ 
    FormContainer, 
    FormTitle, 
    FormField, 
    FormButton, 
    ProfileImageContainer, 
    ProfileImage, 
    MissingImageContainer, 
    MissingImageIcon, 
    EditIcon, 
    HiddenInput, 
    FormRow,
} from './styles';
import { FaEdit } from 'react-icons/fa';

interface UserFormComponentProps {
  user: User | null;
  onClose: () => void;
}

export function UserFormComponent({ user, onClose }: UserFormComponentProps) {
    const [id, setId] = useState<string | null>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cep, setCep] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { address, city, uf } = useAddress(cep);

    const userImage = user?.photo ? `http://localhost:8080/uploads/${user.photo}` : null;  
    const {
      selectedImage,
      image,
      isHovered,
      fileInputRef,
      handleImageClick,
      handleImageChange,
      setIsHovered
    } = useImage(userImage);

    const resetForm = () => {
      setId(null);
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setConfirmPassword('');
      setNumber('');
    };

    useEffect(() => {
      if (user) {
        setId(user.id|| null);
        setName(user.name || '');
        setEmail(user.email || '');
        setPhone(user.phone || '');
        setCep(user.cep || '');
        setNumber(user.number || '');
        setPassword(user.password || '');
        setConfirmPassword(user.password || '');
      }
    }, [user]);

  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (password != confirmPassword) {
        toast.error('As senhas digitadas não são iguais');
      }
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('cep', cep);
      formData.append('uf', uf);
      formData.append('city', city);
      formData.append('address', address);
      formData.append('number', number);
      formData.append('password', password);

      if (image !== null) {
        formData.append('photo', image, image.name);
      }
    
      try {
        let response;

        if (id) {
          formData.append('id', id);
          response = await StudentsRepository.updateStudent(formData);
          toast.success('Aluno atualizado!');
        } else {
          response = await StudentsRepository.createStudent(formData);
          toast.success('Aluno cadastrado!');
        }
      } catch (error) {
        if (error && error.response && error.response.data && error.response.data.messages) {
          toast.error(error.response.data.messages.error);
        } else {
          toast.error("Ocorreu um erro desconhecido.");
        }
        return
      }
    
       resetForm();
       onClose();
    };
  
    return (
      <FormContainer>
        <FormTitle>Novo Usuário</FormTitle>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
        <FormField>
            <ProfileImageContainer
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             >
              {selectedImage ? (
                <ProfileImage src={selectedImage} alt="Preview" onClick={handleImageClick} />
              ) : (
                <MissingImageContainer>
                  <MissingImageIcon onClick={handleImageClick} />
                </MissingImageContainer>
              )}
               {isHovered && (
                  <EditIcon onClick={handleImageClick}>
                    <FaEdit style={{ fontSize: '20px', color: 'white', padding: '2px' }} />
                  </EditIcon>
              )}
            </ProfileImageContainer>
            <HiddenInput type="text" value={id || ''} readOnly/>
            <HiddenInput type="file" ref={fileInputRef} onChange={handleImageChange}/>
          </FormField>
          <FormField>
                  <label>Nome:</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </FormField>   
          <FormField>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </FormField>
          <FormRow>
            <FormField>
              <label>Telefone:</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </FormField>
            <FormField>
              <label>CEP:</label>
              <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} required />
            </FormField>
          </FormRow>
          <FormRow>
            <FormField>
              <label>Estado:</label>
              <input type="text" value={uf} required />
            </FormField>
            <FormField>
              <label>Cidade:</label>
              <input type="text" value={city} required />
            </FormField>
          </FormRow>
          <FormRow>
            <FormField>
              <label>Endereço:</label>
              <input type="text" value={address} required />
            </FormField>
            <FormField>
              <label>Número:</label>
              <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} required />
            </FormField>
          </FormRow>
          <FormRow>
            <FormField>
              <label>Senha:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </FormField>
            <FormField>
              <label>Repita sua senha:</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </FormField>
          </FormRow>
          <FormButton type="submit">Cadastrar</FormButton>
        </form>
      </FormContainer>
    );
  };
  
  export default UserFormComponent;