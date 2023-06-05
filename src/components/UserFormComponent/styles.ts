import styled from 'styled-components';
import { FaUserCircle} from 'react-icons/fa';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormTitle = styled.h1`
font-size: 16px;
`;

export const FormField = styled.div`
  margin-bottom: 14px;
  label {
    display: block;
    margin-bottom: 2px;
    font-size: 12px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;
export const FormRow = styled.div`
  display: flex;
  gap: 130px;
  margin-bottom: 5px;
`;

export const FormButton = styled.button`
  margin-left: 440px;
  padding: 12px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #45a049;
  }
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const MissingImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const MissingImageIcon = styled(FaUserCircle)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  color: #ccc;
`;

export const EditIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20px;
  transform: translate(-50%, -50%);
  transition: opacity 0.2s;
  background-color: rgba(58, 58, 58, 0.34);
  border-radius: 50%;
  cursor: pointer;
`;

export const HiddenInput = styled.input`
  display: none;
`;