import React from 'react'
import BasicCard from './card'
import './home.css'
import Paper from '@mui/material/Paper';
import { Profile_Username, won_white, won_black, lost_black, lost_white, draw_white, draw_black, time } from '../Funtions'
import { TimeSpent } from '../assets/utils/Images';
import { convertSeconds } from '../Funtions'
import PieChartCarousel from './PieChartCarousel';
import BarChartCarousal from './BarChartCarousal';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
const Home = () => {
  const data = [{
    id: 0,
    value: won_white + won_black,
    label: 'Wins'
  },
  {
    id: 1,
    value: lost_white + lost_black,
    label: 'Losses'
  },
  {
    id: 2,
    value: draw_white + draw_black,
    label: 'Draws'
  }]
  const result_time = convertSeconds(time);
  const [isanimated, setisanimated] = React.useState(false);
  useEffect(() => {
    setisanimated(true)
  })
  return (

    <div className='body' >
      <motion.h1
        initial={{opacity: 0,rotateY:360}}
        whileInView={{ opacity: 1,rotateY:0}}
        transition={{ duration: 0.5,delay:0.5}}
        viewport={{ once: true }}
        className='heading'>Welcome {Profile_Username.toUpperCase()}</motion.h1>
      <div className='home'>
        <motion.div 
        initial={{scale:0,opacity:0}}
        whileInView={{scale:1,opacity:1}}
        transition={{delay:0.6,duration:0.5}}
        viewport={{ once: false, amount: 0.2 }}
        className='header'>
          <BasicCard />
        </motion.div>
        <br />
        <br />
        <Paper
          elevation={5}
          sx={{
            width: '300px',
            height: '400px',
            margin: 'auto',
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: '#E9ECEF',
            textAlign: 'center',
            color: 'black', fontFamily: 'poppins'
          }}
        >
          <div
          >
            <img src={TimeSpent} style={{
              borderStyle: 'solid'
              , borderColor: 'black'
              , borderWidth: '1px'
              , borderRadius: '10px'
            }} />
          </div>
          <div>
            Time Spent Playing
          </div>
          <br />
          <br />
          <div>
            {`${result_time.days} days ${result_time.hours} hours ${result_time.minutes} minutes ${result_time.seconds} seconds`}
          </div>
        </Paper>
        <br />
        <br />
        <div
          className='carousel'
        >
          <PieChartCarousel data={data} />
          <PieChartCarousel data={data} />
          <PieChartCarousel data={data} />
        </div>
        <br />
        <br />
        <BarChartCarousal />


      </div>
    </div>
  )
}

export default Home