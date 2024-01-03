"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ImageContextProps {
  uploadedImage: string | null;
  colorPalette: string[] | null;
  setImageAndPalette: (image: string, palette: string[]) => void;
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
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [colorPalette, setColorPalette] = useState<string[] | null>(null);

  const setImageAndPalette = (image: string, palette: string[]): void => {
    setUploadedImage(image);
    setColorPalette(palette);
  };

  return (
    <ImageContext.Provider value={{ uploadedImage, colorPalette, setImageAndPalette }}>
      {children}
    </ImageContext.Provider>
  );
};