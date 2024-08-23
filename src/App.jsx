
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useEffect, useState, useRef } from 'react'
import Home from './components/Home'

function App() {
  const [dataRecieved, setDataRecieved] = useState(false)
  const [change, setChange] = useState(0)
  const scrollToRef = useRef(null)
  useEffect(() => {
    if (change>0) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    <Home  />
  }, [change])
  return (
    <>
      <Navbar />
      <Hero condition={setDataRecieved} changed={setChange} />
      <div ref={scrollToRef} style={{ height: '0px', overflow: 'hidden' }} />
      {dataRecieved && <Home  />}
    </>
  )
}

export default App