import { publishEvent, MY_BETS_DRAWER } from '@golden-gamble/utils';

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