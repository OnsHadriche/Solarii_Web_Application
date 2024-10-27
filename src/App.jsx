import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SolariiJobPage from './Pages/SolariiJobPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <SolariiJobPage/>
      </div>
      
    </>
  )
}

export default App