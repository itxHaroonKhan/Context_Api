"use client"
import { createContext } from "react"

interface Coun {
    Count : number
    setCount : React.Dispatch<React.SetStateAction<number>>
}

export const CounContext = createContext({} as Coun)
