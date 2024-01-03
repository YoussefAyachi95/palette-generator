import React from 'react'
import { useImageContext } from '../context/imageContext';

type Props = {}

export default function DisplayImage({}: Props) {
    const { uploadedImage, colorPalette } = useImageContext();

    return (
        <div>
            <div>
                {uploadedImage ? "Hello" : "No"}
            </div>
        </div>
    )
}