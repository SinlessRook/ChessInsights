import React from 'react'
import PieActiveArc from './pie_chart'
import { Paper } from '@mui/material'
const PieChartCarousel = (props) => {
  const data = props.data
  return (
    <>
      <Paper
        sx={{
          minWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
          margin: '10px',
          padding: '10px',
          borderRadius: '10px',
          textAlign: 'center',
          color: 'black',
          fontFamily: 'poppins',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#DEE2E6'
        }}
      >
        <h2>Match History</h2>
        <PieActiveArc data={data} />
      </Paper>
    </>
  )
}

export default PieChartCarousel