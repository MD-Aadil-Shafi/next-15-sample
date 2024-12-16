'use client'
import { useGlobalState } from "@/context/GlobalContext"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"

const AuthWrapper = ({children}:{children:React.ReactNode}) => {

    const {user} = useGlobalState();
    const router = useRouter();

    useEffect(()=>{
        if(!user?.email){
            router.push('/login')
        }
    },[user])

    return (
    <>
    {children}
    </>
  )
}

export default AuthWrapper