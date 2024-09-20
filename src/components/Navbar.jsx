import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {motion} from 'framer-motion'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 0, justifyContent:'center', }}>
      <AppBar position="static" sx={{backgroundColor:'black', justifyContent:'center'}}>
        <Toolbar variant="dense" sx={{justifyContent:'center',color:'black'}}>
          <Typography variant="h12" component="motion.div"
          sx={{margin:'10px',
            color:'white',
            fontFamily:'poppins',
            fontSize:'50px',
          }}
          >
            <motion.div
            initial={{opacity:0,y:'10vh'}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
            >
            Free Insights
            </motion.div>
            
          </Typography>
          {/* <Typography variant="h6" color="inherit" component="div" sx={{color:'white',justifyContent:'center', padding:'10px', backgroundColor:'black'}}>
            Insights
          </Typography> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
