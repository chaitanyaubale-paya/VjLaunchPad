import { createTheme } from "@mui/material/styles";
import "./fonts.css"; // 👈 Import all fonts here

const theme = createTheme({
  typography: {
    fontFamily: "'San Francisco Display', 'SF Pro', 'Astoria Classic Sans', sans-serif",
    h1: {
      fontFamily: "'Astoria Classic Sans'",
      fontWeight: 500,
    },
    h2: {
      fontFamily: "'Astoria Classic Sans'",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "'San Francisco Display'",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "'SF Pro'",
      fontWeight: 400,
    },
  },
});
export default theme;
