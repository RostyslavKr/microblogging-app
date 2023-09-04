import {usePathname, useRouter} from 'next/navigation'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import  Button  from '@mui/material/Button';
import { useAuthContext } from '@/context';

function getFirstLetter(str: string) {
  if (typeof str === 'string' && str.length > 0) {
    return str[0].toUpperCase();
  }
  return null; 
}

export default function User() {
  const pathname = usePathname();
  const router = useRouter();
  const { userData, signOut, setIsLoggedin } = useAuthContext();

  
  const handleLogout = () => {
    signOut();
    router.push('/');
    setIsLoggedin(false);
  };
  console.log("userData", userData);

  return (<Stack direction="row" spacing={2}>
  <Avatar>{getFirstLetter(userData.email)}</Avatar>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {userData.email}
      </Typography>
      <Button color="inherit" onClick={handleLogout}>Sign out</Button>
   </Stack>)
    
}