import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useAuthContext } from '@/context';

function getFirstLetter(str: string) {
  if (typeof str === 'string' && str.length > 0) {
    return str[0].toUpperCase();
  }
  return null; 
}

export default function User() {
    const { userData } = useAuthContext();
    return (<Stack direction="row" spacing={2}>
  <Avatar>{getFirstLetter(userData.email)}</Avatar>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {userData.email}
          </Typography>
</Stack>)
    
}