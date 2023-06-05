import styled from 'styled-components';

export const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
      border: 'none',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '24px',
      maxWidth: '400px',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9999,
    },
  };

  export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
`;
  export const ModalTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
  `;
  
  export const ModalContent = styled.div`
    margin-bottom: 16px;
    text-align: center;
  `;
  
  export const ModalActions = styled.div`
    display: flex;
    justify-content: flex-end;
  `;
  
  export const Button = styled.button`
    background-color: #fff;
    padding: 8px 16px;
    margin-left: 8px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    
    &:active {
        box-shadow: none;
    }
  `;
  
  export const CancelButton = styled(Button)`
    border: 1px solid red;

    &:hover {
        background-color: rgba(239, 33, 40, 0.1);
    }
  `;
  
  export const ConfirmButton = styled(Button)`
    border: 1px solid green;

    &:hover {
        background-color: rgba(30, 255, 131, 0.1);
    }
  
  `;