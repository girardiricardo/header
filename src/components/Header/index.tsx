import { publishEvent, MY_BETS_DRAWER } from '@golden-gamble/utils';
import { navigateToUrl } from 'single-spa';

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  const handleOpenBets = () => {
    publishEvent(MY_BETS_DRAWER, null);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Golden Gamble
          </Typography>
          <Button
            variant="text"
            color="inherit"
            onClick={() => navigateToUrl('/')}
          >
            Champions League
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => navigateToUrl('/account')}
          >
            Account
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ marginLeft: 2}}
            onClick={handleOpenBets}
          >
            My bets
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;