export function toHex(rgb: number): string {
    let hex = Number(rgb).toString(16)
    if (hex.length < 2) hex = "0" + hex
    return hex
}