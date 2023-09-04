"use client";
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import {useRouter} from 'next/navigation'
import Header from "@/components/Header";
import supabase from "../../supabase";

const AuthContext = createContext({});

export const AuthContextProvider = ({children}:any) => {
    const [userData, setUserData] = useState(false);
    const [userType, setUserType] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);

    const router = useRouter();
    
    const onAuthStateChange = async () => {
        try {
           const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                router.push('/profile');
               return setUserData(user)
            }
            else {
                setUserData(false);
            }
        } catch (error) {
            console.log(error);
        }
        
        
    }

    useEffect(() => {
        onAuthStateChange();
    }, [isLoggedin]);
   
    const value = useMemo(() => {
        return {
            userData,userType,setUserType,success, setSuccess, isLoggedin,setIsLoggedin, signOut: () => supabase.auth.signOut()

        }
    }, [userData,userType,success, isLoggedin]);
    console.log("user", userData);
    return <AuthContext.Provider value={value}><Header /> {children }   </AuthContext.Provider>
}


export const useAuthContext = () => {
    const { userData,userType,setUserType,success, setSuccess,setIsLoggedin, signOut}: any = useContext(AuthContext);
    return { userData,userType,setUserType,success,setSuccess,setIsLoggedin, signOut };
}