"use client";
import {useState} from "react";
import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { useAuthContext } from '@/context';
export default function TypeUser() {
    const [value, setValue] = useState('author');
    const { setUserType } = useAuthContext();
    
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
        <Button variant="outlined" color="secondary"  onClick={() => setUserType(value)}>Choose</Button>
    </FormControl> 
}