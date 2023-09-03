"use client";
import {useState} from "react";
import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import supabase from '../../supabase';

export default function TypeUser({setTypeUser}:any) {
    const [value, setValue] = useState('author');

    const updateTypeUser = async () => {
        try {
            
     const { data, error } = await supabase.auth.updateUser({
  
    data: { type: value }
    
})

        } catch (error) {
            console.log(error)
      }
        finally {
          setTypeUser(value);
      }
       
    }
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    };
    
    return <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
                   aria-labelledby="demo-controlled-radio-buttons-group"
                   name="controlled-radio-buttons-group"
                   value={value}
                   onChange={handleChange}
                 >
                  <FormControlLabel value="author" control={<Radio />} label="Author" />
                  <FormControlLabel value="commentator" control={<Radio />} label="Commentator" />
        </RadioGroup>
        <Button variant="outlined" color="secondary"  onClick={updateTypeUser}>Choose</Button>
    </FormControl>
}