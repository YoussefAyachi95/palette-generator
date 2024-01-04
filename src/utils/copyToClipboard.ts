export function copyToClipboard(e: React.MouseEvent<HTMLSpanElement>){
    const color = (e.target as HTMLElement)?.innerText;
    navigator.clipboard.writeText(color)
}