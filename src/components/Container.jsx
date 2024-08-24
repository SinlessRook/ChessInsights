import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { TextField} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import {fetchDetails} from '../Funtions/index'
import {CircularProgress} from '@mui/material'
import Fade from '@mui/material/Fade';
import Home from './Home';




export default function SimpleContainer(props) {
  const condition = props.condition
  const changed = props.changed
  const [Username, setUsername] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'black', height: '75vh', padding: '1rem', margin: '1rem', 

          textAlign: 'center',color: 'white',fontFamily:'poppins',borderRadius:'20px'
        }}>
        <Typography variant='h4'>
          Welcome To Chess Insights
        </Typography>
        <Typography variant='h6'>
        <TextField id="outlined-basic" label="Username" variant="outlined"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{margin:'3rem',
           fontFamily:'poppins',
           outlineColor:'white',
           backgroundColor:'white',
           borderRadius:'10px',
           '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', 
                },
                '&:hover fieldset': {
                  borderColor: 'black', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'blue', 
                },

                
              },
              '& .MuiInputLabel-root': {
                marginTop:!Username?'0rem':'0.5rem',
                '&.Mui-focused': {
                  color:'black',
                  marginTop:'0.5rem',

                },
                
                },
          }}
        />
        </Typography>
        <Typography variant='h12'>

        <LoadingButton variant="contained"
        loading={false}
        sx={{backgroundColor:'white',color:'black',borderRadius:'10px',fontSize:'1rem'}}
        ><Typography onClick={(value)=>{
          if (Username === "") 
          {
            alert("Please Enter Username")
          }
          else if(value=='error')
          {
            alert('Please Enter a Valid Username')
          }
          else{
          setLoading(true)
          fetchDetails(Username).then((result) => {
            if (result) {
              setLoading(false)
              condition(true)
              changed((prev)=>prev+1)
            }
          })}
        }}>
          View Insights
        </Typography>
        </LoadingButton>
        <Typography
        
        sx={{margin:'2rem'}}
        >
        <Box sx={{ height: 40 }}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '100ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      
      </Box>
        </Typography>
        </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
  
}
