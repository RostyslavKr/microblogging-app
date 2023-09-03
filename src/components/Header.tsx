import * as React from 'react';
import Link from "next/link";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';
import User from './User';
import { useAuthContext } from '@/context';
export default function Header() {
  const { userData } = useAuthContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <EditNoteIcon fontSize='large' />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>

          {userData === true ? <User /> : <><Button color="inherit"><Link href="/login">Login</Link></Button>
          <Button color="inherit"><Link href="/register">SignUp</Link></Button></> }
          
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
