import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f2f2f2;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    width: 300px;
    padding: 2rem;
    border: 1px solid #000;
    border-radius: 8px;
    background-color: #fff;
    box-sizing: border-box;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
`;

export const Button = styled.button`
    align-self: flex-end;
    padding: 0.5rem;
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

export const Link = styled.button`
    background: transparent;
    border: none;
    color: blue;  // A cor padrão dos links é azul
    text-decoration: underline;  // Links são geralmente sublinhados
    cursor: pointer;  // Muda o cursor para indicar que é clicável
    font-size: 12px;
    align-self: flex-start;

    &:hover {
        text-decoration: none;
    }

    &:focus {
        outline: none;
    }
`;

export const Logo = styled.img`
    width: 190px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;
    display: block;
`;
