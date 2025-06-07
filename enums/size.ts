export enum SIZE {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE" 
}

const SIZE_ARR: string[] = [
    SIZE.LARGE,
    SIZE.MEDIUM,
    SIZE.SMALL,
]
export function isSize(size: string): size is SIZE {
    return SIZE_ARR.includes(size)
}