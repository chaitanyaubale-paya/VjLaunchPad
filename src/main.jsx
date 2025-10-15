import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import theme from "./theme.jsx";
import { ThemeProvider  } from '@mui/material';
import { CssBaseline } from "@mui/material";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
 <CssBaseline />
    <App />
    </ThemeProvider>
  </StrictMode>,
)
