// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   typography: {
    fontFamily: [
      'Gotham',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D71A21',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: '#D71A21',
          },
        },
      },
    },
  },
});

export default theme;
