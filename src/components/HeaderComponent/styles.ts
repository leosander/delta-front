import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #eee;
    background: green;
    color: white;
`;

export const ProfilePic = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    object-fit: cover;
`;

export const Name = styled.span`
    position: relative;
    top: -10px;
    font-size: 16px;
    margin-left: 10px;
`;

export const LogoutButton = styled.button`
    font-size: 16px;
    padding: 6px;
    border-radius: 8px;
    border: 1px solid white;
    color: white;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        background-color: rgba(255,255,255,0.2)
    }
`;