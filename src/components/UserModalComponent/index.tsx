import Modal from 'react-modal';
import { UserFormComponent } from '../UserFormComponent';
import { modalStyles } from './styles';
import { User } from '../UserFormComponent/@types/User';
interface UserModalComponentProps {
    isOpen: boolean;
    user: User | null;
    onClose: () => void;
}

export function UserModalComponent({ isOpen, user, onClose }: UserModalComponentProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={modalStyles}
            ariaHideApp={false}
        >
            <UserFormComponent  user={user} onClose={onClose} />
        </Modal>
    );
}

export default UserModalComponent;           
           
