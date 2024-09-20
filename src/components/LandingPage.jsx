import React from 'react'
import {motion} from 'framer-motion'
import { Button } from '@mui/material'
const LandingPage = (props) => {
    const changed = props.changed
  return (
    <div className='flex justify-between items-center px-10 min-h-screen overflow-hidden'>
      <div className='flex flex-col gap-4 ml-10'>
        <motion.h1 
        initial={{opacity:0,y:"100vh"}}
        animate={{opacity:1,y:0}}
        transition={{type:'spring',delay:0.4}}
        className='text-white font-bold text-5xl'>We Try Our Best</motion.h1>
        <motion.h1 
        initial={{opacity:0,y:"100vh"}}
        animate={{opacity:1,y:0}}
        transition={{type:'spring',delay:0.6}}
        className='text-white font-bold text-5xl'>Make your Chess Life</motion.h1>
        <motion.h1 
        initial={{opacity:0,y:"100vh"}}
        animate={{opacity:1,y:0}}
        transition={{type:'spring',delay:0.8}}
        className='text-white font-bold text-5xl'>Simple</motion.h1>
        <br />
        <motion.div
        initial={{opacity:0,y:'1vh'}}
        animate={{opacity:1,y:0}}
        transition={{delay:1.8,duraration:1.5}}
        >
          <motion.div
          whileHover={{scale:1.1,originX:0,transition:{duration:0.5,repeatType:"reverse",repeat:Infinity}}}
          >
          <Button
        onClick={()=>{changed((prev) => prev + 1)

        }}
        className='hover:scale-110'
          variant='outlined' 
          sx={{ 
            backgroundColor: 'black', 
            color: 'white', 
            borderRadius: '50px', 
            borderColor: 'white', 
            width: '50%',
            '&:hover': {
              borderColor: 'white',
              textShadow: '1px 1px 1px white',
              boxShadow: '1px 1px 1px 1px white',
              backgroundColor: 'black',
            }
          }}>
          Get Started
        </Button>
          </motion.div>
        
        </motion.div>
        
      </div>

      <motion.div 
      initial={{scale:2.5,rotateZ:360,x:'-10px'}}
      whileInView={{rotateZ:180,transition:{delay:0.5,duration:15,type:"spring",repeatType:"reverse",repeat:Infinity}}}
      whileTap={{rotateX:360,rotateY:360,rotateZ:360,transition:{duration:3.5,type:"spring"}}}
      whileHover={{boxShadow:"10px 10px 10px 10px black"}}
      animate={{scale:1}}
      transition={{type:"spring",stiffness:110}}
      className='rounded-3xl mr-10 md:w-[500px]'>
        <img
          src="https://img.freepik.com/premium-photo/chess-draught-checker-game-board_469558-404.jpg?ga=GA1.1.321317949.1696341147" 
          alt="Your Image" 
          className="rounded-3xl" 
        />
      </motion.div>
    </div>
  )
}

export default LandingPage