"use client"

import { FileImage } from 'lucide-react';
import ColorThief from 'colorthief'
import { useImageContext } from '../context/imageContext';

type Props = {}

export default function Navbar({}: Props) {
  const { setImageAndPalette } = useImageContext();

  const uploadImage = (e: any): void => {
    const file = e.target.files[0]
    
    if (e.target && file) {
      const reader = new FileReader();
  
      reader.onload = async (event: ProgressEvent<FileReader>) => {
        const img = new Image();
  
        img.onload = () => {
          const colorThief = new ColorThief();
          const colorPalette = colorThief.getPalette(img, 6);

          setImageAndPalette(file, colorPalette)
  
        };
  
        img.src = event.target?.result as string;
      };
  
      reader.readAsDataURL(file);
    }
  }



  return (
    <nav className="py-8 px-16 w-full min-h-[10vh] bg-black/40 shadow-md border-b-2 border-black/40 flex items-center justify-between gap-12">
        <h1 className="text-3xl font-bold">Palette Generator</h1>
        <div>
            <label htmlFor="file" className="py-2 px-8 rounded-lg border border-gray-800 cursor-pointer flex items-center justify-center gap-4">
                <FileImage  />
                Upload Image
            </label>
            <input onChange={uploadImage} type="file" id="file" className="items-center justify-center hidden" />
        </div>
    </nav>
  )
}