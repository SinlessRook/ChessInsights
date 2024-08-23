import * as React from 'react';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';
import { Paper, Typography, Divider } from '@mui/material';

export default function BarAnimation(props) {
    const dit = props.dit;
    const color = props.color;
    const highlightScope = {
        highlighted: 'series',
        faded: 'global',
    };
    const handleList = () => {
        console.log(dit);
        for (const i in dit) {
            if (i=='')
            {
                continue;
            }
            list.push(i);
            series[0].data.push(dit[i][0]);
            series[1].data.push(dit[i][1]);
            series[2].data.push(dit[i][2]);
        }
    }

    let list = []
    let series = [
        {
            label: 'Win',
            data: [
            ],
        },
        {
            label: 'Draw',
            data: [
            ],
        },
        {
            label: 'Loss',
            data: [
            ],
        },
    ].map((s) => ({ ...s, highlightScope }));
    handleList();
    return (
        <Paper sx={{
            padding: '10px',
            borderRadius: '10px',
            margin: '10px',
            width: '100%',
            textAlign: 'center',
            elevation: 5,
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}>
            <Box>
                <BarChart
                    height={300}
                    series={series
                        .slice(0, 3)
                        .map((s) => ({ ...s, data: s.data.slice(0, 10) }))}
                />
                <Typography variant="subtitle1" sx={{ marginTop: '10px', textAlign: 'center' }}>
                    Top 10 Opening as {color}
                </Typography>
                <br />
                <Typography variant="subtitle1" sx={{ textAlign: 'start' }}>
                <div style={{ display:'flex'}}>
                    <h3 style={{textAlign:'start'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Opening</u></h3>
                    <h3 style={{marginLeft:'auto',textAlign:'end',color:'green'}}>Win%</h3>
                </div>
                <br />

                    {list.map((item, index) => (
                        <>
                            <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
                                <div>{index}&nbsp;&nbsp;&nbsp;&nbsp;{item}:</div>
                                <div style={{marginLeft:'auto',textAlign:'end',color:'green'}}>{(series[0].data[index] / (series[0].data[index]+series[1].data[index]+series[2].data[index])*100).toFixed(2)}%</div>
                            </div>
                            <Divider variant="middle" flexItem />
                        </>
                    ))}
                </Typography>

            </Box>
        </Paper>
    );
}
