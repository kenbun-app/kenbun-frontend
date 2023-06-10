import { default as MuiAppBar } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MuiLink from '@mui/material/Link';
import AccountMenu from './AccountMenu';
import { useAuthContext } from '@/src/contexts/AuthContext';

export default function AppHeader() {
  const { user } = useAuthContext()
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <MuiLink href="/" color="inherit" underline="none">
            kenbun
          </MuiLink>
        </Typography>
        {user?<AccountMenu></AccountMenu>:<Button color="inherit">Login</Button>}
      </Toolbar>
    </MuiAppBar>
  );
}