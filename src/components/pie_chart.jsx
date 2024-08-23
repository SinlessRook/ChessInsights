import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';


export default function PieActiveArc(props) {
  const data=props.data;
  return (
    <PieChart
    sx={{margin:'10px',
      marginTop:'50px',
    }}
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={400}
      width={600}
    />
  );
}
