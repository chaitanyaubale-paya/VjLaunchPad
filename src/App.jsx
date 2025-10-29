import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import PnPkc from "./pages/pnpkc/PnPkc";
import IndiWorksLanding from "./pages/indiworks/IndiWorks";

const App = () => {
  return (
    <Box sx={{ padding: "0px 4px 4px 4px" }}>
      <Routes>
        <Route path="/" element={<PnPkc />} />
        <Route path="/indiworks" element={<IndiWorksLanding />} />
        <Route
          path="*"
          element={
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                mt: 10,
                color: "#777",
                fontFamily: "Montserrat",
              }}
            >
              Page not found or no project selected.
            </Box>
          }
        />
      </Routes>
    </Box>
  );
};

export default App;
