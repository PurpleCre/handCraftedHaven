"use client"

import { useEffect } from "react"

export default function SetLocalStorage(param: string){
    const username = param
    useEffect(() => {
        localStorage.setItem('myCount', username);
    }, [username]); 
}