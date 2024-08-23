import React from 'react'
import './Hero.css'
import SimpleContainer from './Container'

const Hero = (props) => {
  const condition = props.condition
  const changed = props.changed
  const [data, setData] = React.useState({})
  return (
    <div className='hero'>
        <SimpleContainer condition={condition} changed={changed}/>
    </div>
  )
}

export default Hero