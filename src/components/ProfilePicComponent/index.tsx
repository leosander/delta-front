import React, {useState, useEffect} from 'react';
import { ProfilePic } from './styles';
import { FaUserCircle } from 'react-icons/fa';

interface ProfilePicComponentProps {
    image?: string;
    alt: string;
    width: string;
    height: string;
  }

  
  const ProfilePicComponent: React.FC<ProfilePicComponentProps> = ({ image, alt, width, height }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

      useEffect(() => {
        const img = new Image();
        img.onload = () => {
          setIsImageLoaded(true);
        };
        img.onerror = () => {
          setIsImageLoaded(false);
        };
        img.src = `http://localhost:8080/uploads/${image}`;
      }, [image]);

      if (isImageLoaded) {
        return <ProfilePic src={`http://localhost:8080/uploads/${image}`} alt={alt} width={width} height={height} />;
      } else {
        return <FaUserCircle size={width} />;
      }
};

export default ProfilePicComponent;