
import { useState } from "react";
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import supabase from '../../supabase';
import { useAuthContext } from "@/context";
import ConfirmEmail from "./ConfirmEmail";

export default function SignUpForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const { userType,success,setSuccess } = useAuthContext();

    const signUp = async () => {
        if (email === '') {
            alert('Please enter a valid email')
        }
        if (password === '') {
           alert('Please enter a valid password') 
        }
        try {
            setLoading(true);
          let { data, error } = await supabase.auth.signUp({
            email,
            password,
            })

        } catch (error) {
            console.log(error)
        }
        finally {
            setEmail("");
            setPassword("");
            updateTypeUser();
            setLoading(false);
            
        }
    }

    const updateTypeUser = async () => {
        try {
            const { data, error } =
                await supabase.auth.updateUser({
                    data: { type: userType }
                })
            console.log(userType);
        } catch (error) {
            console.log(error);
        }
        finally {setSuccess(true); }
    }

    return <>{success ? <ConfirmEmail /> : <form autoComplete="off" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Sign Up</h2>
                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{mb: 3}}
                    value={email}
                    
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    sx={{mb: 3}}
            />

                 <Button variant="outlined" color="secondary"  onClick={signUp}>Signup</Button>
             
        </form>}</> 
}