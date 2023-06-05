import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 16px;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
`;

export const StudentList = styled.ul`
  list-style: none;
  font-size: 12px;
  padding: 0;
`;

export const StudentItemHeader = styled.li`
  display: grid;
  grid-template-columns: repeat(7, 2fr);
  align-items: center;
  justify-items: center;
  background-color: green;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  color: white;
  font-size: 14px;
  padding: 0px;
  margin-bottom: 8px;
`;

export const StudentItem = styled.li`
  display: grid;
  grid-template-columns: repeat(7, 2fr);
  align-items: center;
  border-radius: 12px;
  justify-items: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  background-color: white;
  font-size: 14px;
  padding: 8px;
  margin-bottom: 8px;
`;

export const ActionButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid  #d9d9d9;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin-right: 10px;

  &:active {
    box-shadow: none;
  }
`;

export const Actions = styled.div`
  align-items: center;
`;

export const ButtonEnroll = styled.button`
  padding: 10px;
  border: 1px solid green;
  border-radius: 6px;
  background: #FFF;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  &:active {
    box-shadow: none;
  }

  &:hover {
    background-color: rgba(30, 255, 131, 0.1);
  }
`;