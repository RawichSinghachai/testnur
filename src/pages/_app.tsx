import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import { MuiTheme } from '@/components/MuiTheme';
import Box from '@mui/material/Box';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={MuiTheme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  )
}
