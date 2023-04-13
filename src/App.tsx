import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme } from '@golden-gamble/utils';
import Header from './components/Header';

const muiTheme = createTheme(theme);

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Header />
    </ThemeProvider>
  )
}

export default App