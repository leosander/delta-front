import React from 'react';
import Modal from 'react-modal';
import { FaExclamationCircle } from 'react-icons/fa';
import { modalStyles, IconContainer,  ModalTitle, ModalContent, ModalActions, CancelButton, ConfirmButton } from './styles';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={modalStyles}
    >
        <IconContainer>
            <FaExclamationCircle size={32} style={{ fontSize: '14px', color: 'red', padding: '2px' }} />
        </IconContainer>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>
          <p>{description}</p>
        </ModalContent>
        <ModalActions>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <ConfirmButton onClick={onConfirm}>Confirmar</ConfirmButton>
        </ModalActions>
    </Modal>
  );
};

export default ConfirmationModal;

