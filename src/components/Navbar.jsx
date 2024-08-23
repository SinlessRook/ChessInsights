import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 0, justifyContent:'center', }}>
      <AppBar position="static" sx={{backgroundColor:'black', justifyContent:'center'}}>
        <Toolbar variant="dense" sx={{justifyContent:'center',color:'black'}}>
          <Typography variant="h12" component="div"
          sx={{margin:'10px',
            color:'white',
            fontFamily:'poppins',
            fontSize:'50px',
          }}
          >
            Free Insights
          </Typography>
          {/* <Typography variant="h6" color="inherit" component="div" sx={{color:'white',justifyContent:'center', padding:'10px', backgroundColor:'black'}}>
            Insights
          </Typography> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
