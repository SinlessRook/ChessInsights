import { Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import BarAnimation from './bar_chart'
import { OpeningMostUsedBlack, OpeningMostUsedWhite } from '../Funtions'

const BarChartCarousal = () => {
  return (
    <>
      <Paper
        sx={{
          padding: '10px',
          borderRadius: '10px',
          margin: '10px',
          width: '100%',
          textAlign: 'center',
          backgroundColor: '#E9ECEF',
        }}
      ><Typography variant="h5" sx={{ marginBottom: '10px', padding: '10px' }}>Opening Analysis</Typography>
        <Typography sx={{
          marginBottom: '10px', display: 'flex', padding: '10px',
          flexDirection: 'row',
        }}>
          <BarAnimation dit={OpeningMostUsedWhite} color="White" />
          <BarAnimation dit={OpeningMostUsedBlack} color="Black" />
        </Typography>
      </Paper>
    </>
  )
}

export default BarChartCarousal