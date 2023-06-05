import { useState, useRef, ChangeEvent, useEffect } from 'react';

export function useImage(defaultImage: string | null) {
  const [selectedImage, setSelectedImage] = useState<string | null>(defaultImage);
  const [image, setImage] = useState<File | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
   
    setImage(file);
  };

  useEffect(() => {
    setSelectedImage(defaultImage);
  }, [defaultImage]);

  return {
    selectedImage,
    image,
    isHovered,
    fileInputRef,
    handleImageClick,
    handleImageChange,
    setIsHovered
  };
}