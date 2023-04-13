import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Golden Gamble
          </Typography>
          <Typography variant="body2">
            <b>Balance:</b> $200 USD | <b>Current bets:</b> 0
          </Typography>
          <Button>DEPOSIT</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;