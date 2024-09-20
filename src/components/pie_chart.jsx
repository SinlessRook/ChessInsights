import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function PieActiveArc(props) {
  const data = props.data;
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('xs')); 
  const isSm = useMediaQuery(theme.breakpoints.down('sm')); 
  const isMd = useMediaQuery(theme.breakpoints.down('md')); 

  let chartWidth = 600;
  let chartHeight = 400;

  if (isXs) {
    chartWidth = 300;
    chartHeight = 200;
  } else if (isSm) {
    chartWidth = 400;
    chartHeight = 300;
  } else if (isMd) {
    chartWidth = 500;
    chartHeight = 350;
  }

  return (
    <PieChart
      sx={{
        margin: '10px',
        marginTop: '50px',
      }}
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={chartHeight}
      width={chartWidth}
    />
  );
}
