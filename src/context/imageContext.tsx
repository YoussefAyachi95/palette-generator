"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ImageContextProps {
  uploadedImage: File | null;
  colorPalette: number[][] | null;
  setImageAndPalette: (image: File | null, palette: number[][] | null) => void;
}

const ImageContext = createContext<ImageContextProps | undefined>(undefined);

export const useImageContext = (): ImageContextProps => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};

interface ImageProviderProps {
  children: ReactNode;
}

export const ImageProvider = ({ children }: ImageProviderProps): JSX.Element => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [colorPalette, setColorPalette] = useState<number[][] | null>(null);

  const setImageAndPalette = (image: File | null, palette: number[][] | null): void => {
    setUploadedImage(image);
    setColorPalette(palette);
  };

  const contextValue: ImageContextProps = {
    uploadedImage,
    colorPalette,
    setImageAndPalette,
  };

  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  );
};