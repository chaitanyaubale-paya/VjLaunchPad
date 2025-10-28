import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './pages/pnpkc/PnPkc'
import PnPkc from './pages/pnpkc/PnPkc'
import IndiWorksLanding from './pages/indiworks/IndiWorks'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  return (
    <Box sx={{ padding: "0px 4px 4px 4px" }}>
      {path.includes("indiworks") ? (
        <IndiWorksLanding />
      ) : path.includes("pratiknagar") ? (
        <PnPkc />
      ) : (
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
      )}
    </Box>
  );
};

export default App;























// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './pages/pnpkc/PnPkc'
// import PnPkc from './pages/pnpkc/PnPkc'
// import IndiWorksLanding from './pages/indiworks/IndiWorks'
// import { Box } from '@mui/material'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <Box sx={{padding:'0px 4px 4px 4px'}}>
//      {/* <IndiWorksLanding/> */}
//      <PnPkc />
//      </Box>
//     </>
//   )
// }

// export default App
