"use client"

import {QueryClientProvider,QueryClient} from "@tanstack/react-query"
import {  useState } from "react"


interface QueryProps{
    children:React.ReactNode
}
export  const QueryProvider = ({children}:QueryProps) => {
    const [query] = useState(()=> new QueryClient())

    return <QueryClientProvider client={query}>{children}</QueryClientProvider>

}