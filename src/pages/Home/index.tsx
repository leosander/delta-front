import StudentsRepository from "../../repositories/StudentsRepository";
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePicComponent from "../../components/ProfilePicComponent";
import Header from "../../components/HeaderComponent";
import { Student } from './@types/Student';
import { FaEdit, FaTrash } from 'react-icons/fa';
import ConfirmationModal from '../../components/ConfirmationModal';
import { Container, Title, StudentList, StudentItem, StudentItemHeader, Actions, ActionButton, ButtonEnroll } from './styles';
import UserModalComponent from "../../components/UserModalComponent";

export function Home() {
  const navigate = useNavigate();
    const [students, setStudents] = useState<Student[]>([]);
    const [userId, setUserId] = useState<string | null>(null);
    const [user, setUser] = useState<object | null>({});
    const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
    const [isModalUserOpen, setIsModalUserOpen] = useState(false);

    async function getAllStudents() {
      const allStudents: Student[] = await StudentsRepository.getAll();
      setStudents(allStudents);
    }

    const createStudent = () => {
      setUser({});
      setIsModalUserOpen(true);
    }

    const openModalDelete = (id: string) => {
      setIsModalConfirmOpen(true);
      setUserId(id);
    }

    const editStudent = (student: object) => {
      setIsModalUserOpen(true);
      setUser(student);
    }

    const handleConfirmDelete = async () => {
      try {
        if (userId != null) {
          await StudentsRepository.deleteStudent(userId);
          setIsModalConfirmOpen(false);
          getAllStudents();
          toast.success('Aluno excluido com sucesso!');
        }
      } catch (error) {
        console.error(error);
      }
    };

    const handleLogout = () => {
      sessionStorage.removeItem('jwtToken');
      navigate('/login');
    };

    useEffect(() => {
      getAllStudents();
    }, []);
    
    return(
        <>
        <Header onLogout={handleLogout} />
        <Container>
        <Title>Lista de Alunos</Title>
        <ButtonEnroll onClick={createStudent}>Nova Matricula</ButtonEnroll>
        <StudentList>
          <StudentItemHeader>
            <h3>Matrícula</h3>
            <h3>Foto</h3>
            <h3>Nome</h3>
            <h3>Email</h3>
            <h3>Telefone</h3>
            <h3>Endereço</h3>
            <h3>Ações</h3>
          </StudentItemHeader>
          {students.map((student) => (
            <StudentItem key={student.id}>
              <h5>{student.id}</h5>
              <h5><ProfilePicComponent image={student.photo} alt="Profile" width="25px" height="25px" /></h5>
              <h5> {student.name}</h5>
              <h5>{student.email}</h5>
              <h5>{student.phone}</h5>
              <h5>{student.address}, {student.number} - {student.city}/{student.uf}</h5>
              <Actions>
              <ActionButton onClick={() => editStudent(student)}>
                <FaEdit style={{ fontSize: '14px', color: 'green', padding: '2px' }} />
              </ActionButton>
              <ActionButton onClick={() => openModalDelete(student.id)}>
                <FaTrash style={{ fontSize: '14px', color: '#991818', padding: '2px'}} />
              </ActionButton>
              </Actions>
            </StudentItem>
          ))}
        </StudentList>

        <UserModalComponent
          isOpen={isModalUserOpen}
          onClose={() => {
            setIsModalUserOpen(false);
            getAllStudents();
          }}
          user={user}
        />

        <ConfirmationModal
        isOpen={isModalConfirmOpen}
        onClose={() => setIsModalConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Você tem certeza?"
        description="Ao confirmar você vai excluir todos dados do aluno."
        />
      </Container>
      </>
    )
}