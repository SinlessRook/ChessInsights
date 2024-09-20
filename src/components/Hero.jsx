import React from 'react'
import SimpleContainer from './Container'
import LandingPage from './LandingPage'
import { useEffect } from 'react'
import { useRef } from 'react'

const Hero = (props) => {
  const condition = props.condition
  const changed = props.changed
  const [clicked, setclicked] = React.useState(0)
  const scrollToRef = useRef(null)
  useEffect(() => {
    if(clicked>0){
    scrollToRef.current.scrollIntoView({ behavior: 'smooth' })}
  }, [clicked])
  return (
    <>
    <div className='bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen '>
    <LandingPage changed={setclicked}/>
    <div className="min-h-screen flex items-center justify-center" ref={scrollToRef }>
    <SimpleContainer condition={condition} changed={changed}/> 
    </div>
    </div>
    </>

  )
}


export default Hero
