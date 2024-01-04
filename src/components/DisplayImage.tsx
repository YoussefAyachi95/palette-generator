import React from 'react'
import { useImageContext } from '../context/imageContext';
import Image from 'next/image';
import { toHex } from '@/utils/toHex';
import ListItem from './ListItem';

type Props = {}

export default function DisplayImage({}: Props) {
    const { uploadedImage, colorPalette } = useImageContext();

    return (
        <div className="flex items-center justify-center flex-col gap-8">
            <div className="w-[48rem] h-[25rem] flex items-center justify-center border-2 border-black/40 rounded-lg overflow-hidden transition-all ease-in-out hover:shadow-md">
                {uploadedImage ? 
                    <Image 
                        src={URL.createObjectURL(uploadedImage)}
                        alt="Uploaded Image" 
                        width={0} 
                        height={0} 
                        className="object-cover object-center rounded-lg w-full h-full"
                    /> : 
                    "Put an Image here..."
                }  
            </div>

            {colorPalette && 
                    <ul className="flex items-center justify-center flex-wrap gap-4">
                        {
                            colorPalette.map((color, index) => {
                                const rgb = `rgb(${color.join(", ")})`;
                                const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(color[2])}`
                                return <ListItem key={index} hex={hex} rgb={rgb} />
                            })
                        }
                    </ul>

            }
        </div>
    )
}