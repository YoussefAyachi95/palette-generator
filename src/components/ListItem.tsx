import React, { useState } from 'react'
import { Copy } from 'lucide-react';
import { copyToClipboard } from '@/utils/copyToClipboard';

interface ListItemProps {
  hex: string;
  rgb: string;
}

export default function ListItem(props: ListItemProps){
  const [copied, setCopied] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    copyToClipboard(e)
    setCopied(true)
    setTimeout(() => {
      setCopied(false) 
     }, 1000)
  }

  return (
    <li style={{background: props.rgb}} className="relative list-none w-[16rem] h-[16rem] rounded-lg shadow-lg transition-all ease-in-out hover:translate-y-[-5px]">
      <span 
        className="absolute bottom-0 cursor-pointer w-full px-4 py-2 border-yellow-200 
        border-t-2 rounded-b-lg flex items-center justify-between font-semibold bg-white/20"
        onClick={handleClick}>
        {copied ? "Copied!" : props.hex} <Copy />
      </span>
    </li>
  )
}