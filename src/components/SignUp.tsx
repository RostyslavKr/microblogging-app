"use client";
import TypeUser from "./TypeUser";
import SignUpForm from "./SignUpForm";
import { useAuthContext } from "@/context";

export default function SignUp() {
    const { userType } = useAuthContext();
    console.log('usertype',userType);
    return ( <>{ userType === null ? <TypeUser /> : <SignUpForm />}</>);
}