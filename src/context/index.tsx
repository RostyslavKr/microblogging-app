"use client";
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import Header from "@/components/Header";
import TypeUser from '@/components/TypeUser';
import supabase from "../../supabase";

const AuthContext = createContext({});
export const AuthContextProvider = ({children}:any) => {
    const [userData, setUser] = useState(false);
    const [typeUser, setTypeUser] = useState("");

    const onAuthStateChange = async () => {
        try {
           
           const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                setUser(user)
                console.log(userData);
        }
        } catch (error) {
            console.log(error);
        }
        
        
    }

    useEffect(() => {
        onAuthStateChange();
    }, [typeUser]);

    const value = useMemo(() => {
        return {
            userData,typeUser, signOut: () => supabase.auth.signOut()

        }
    }, [userData]);
     
    return <AuthContext.Provider value={value}><Header /> {typeUser === "" && userData ? (<TypeUser setTypeUser={setTypeUser} />) : children}</AuthContext.Provider>
}


export const useAuthContext = () => {
    const { userData, signOut, typeUser }: any = useContext(AuthContext);
    return { userData, signOut, typeUser };
}