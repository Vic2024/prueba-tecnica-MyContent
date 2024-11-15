export const getControl = (control: any) => {
    const isControl = control instanceof HTMLInputElement
    if (!isControl || control == null) return null
    return control
}