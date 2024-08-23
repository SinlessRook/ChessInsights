import React from 'react'
import PieActiveArc from './pie_chart'
import { Paper } from '@mui/material'
const PieChartCarousel = (props) => {
  const data = props.data  
  return (
    <>
    <Paper
            sx={{
              minWidth: '100%',
            //   marginRight: '900px',
            margin: '10px',
              padding: '10px',
              borderRadius: '10px',
              textAlign: 'center',
              color: 'black',
              fontFamily: 'poppins',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',  
              justifyContent: 'center' 
            }}
        >
          <h2>Match History</h2>
          <PieActiveArc data={data} />
        </Paper>
    </>
  )
}

export default PieChartCarousel