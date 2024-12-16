'use client'
import React, { useContext, createContext, useState, useMemo } from "react";

type userType = {
    name: string,
    email: string
}

type globalContextType  ={
    user: userType,
    handleUser:(val:userType)=>void;
    handleLogout: ()=>void;
}

const Context = createContext<globalContextType | undefined>(undefined);

const GlobalContext = ({children}:{children:React.ReactNode}) =>{
    
    const [user, setUser] = useState({
        name:'',
        email:''
    })

    const getUser = async()=>{
        try {
            let storedUser = localStorage.getItem('user') || 'false';
            const tempUser = JSON.parse(storedUser);
            if (tempUser?.name) setUser(tempUser);
          } catch (error) {
            console.error('Error parsing JSON from localStorage:', error);
          }
    }
    useMemo(()=>{
        getUser();
    },[])
console.log('user', user)

    const handleUser = (val:userType) =>{
        localStorage.setItem('user', JSON.stringify(val));
        setUser(val)
    }
    const handleLogout = () =>{
        localStorage.clear()
        setUser({name:'', email:''})
    }

    return (
        <Context.Provider value={{user, handleUser, handleLogout}}>
            {children}
        </Context.Provider>
    )
}

export const useGlobalState = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalContext Provider');
    }
    return context;
};

export default GlobalContext;