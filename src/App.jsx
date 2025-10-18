import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './pages/pnpkc/PnPkc'
import PnPkc from './pages/pnpkc/PnPkc'
import IndiWorksLanding from './pages/indiworks/IndiWorks'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <PnPkc /> */}
     <IndiWorksLanding/>
    </>
  )
}

export default App
