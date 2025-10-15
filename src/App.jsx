import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './pages/pnpkc/PnPkc'
import PnPkc from './pages/pnpkc/PnPkc'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PnPkc />
    </>
  )
}

export default App
