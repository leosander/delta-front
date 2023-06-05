import {HeaderContainer, Name, LogoutButton} from './styles';
import ProfilePicComponent from '../ProfilePicComponent';


const Header = ({ onLogout }: { onLogout: () => void })  => {
    const avatar = sessionStorage.getItem('user_photo') ?? '';
    const userName = sessionStorage.getItem('user_name')
    return (
        <HeaderContainer>
            <div>
            <ProfilePicComponent image={avatar} alt="Profile" width="40px" height="40px" />
                <Name>{userName}</Name>
            </div>
            <LogoutButton onClick={onLogout}>Logout</LogoutButton>
        </HeaderContainer>
    );
};

export default Header;