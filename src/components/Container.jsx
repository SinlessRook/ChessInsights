import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { fetchDetails } from '../Funtions/index'
import { CircularProgress } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Fade from '@mui/material/Fade';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { motion } from 'framer-motion'


export default function SimpleContainer(props) {
  const condition = props.condition
  const changed = props.changed
  const [Username, setUsername] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  return (
    <React.Fragment >
      <CssBaseline />
      <motion.div
      initial={{y:'30vh',scale:0}}
      whileInView={{opacity:1,scale:1,y:0,transition:{delay:0.2,duration:1,type:'spring'}}}
      viewport={{amount:0.1}}
      >
      <Container
        sx={{ minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
      >
        <Typography variant='h6' sx={{ fontFamily: 'poppins', alignItems: 'center' }}>
        
        <TextField
  id="outlined-basic"
  label={
    <span>
      <AccountCircleIcon /> Username
    </span>
  }
  variant="outlined"
  value={Username}
  onChange={(e) => setUsername(e.target.value)}
  sx={{
    minWidth: {md:'900px',sm:'500px',xs:'400px'},
    margin: '3rem',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: 'white',
    borderRadius: '50px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '50px',
      '& fieldset': {
        borderColor: 'black',
        borderRadius: '50px',
      },
      '&:hover fieldset': {
        borderColor: 'black',
        borderRadius: '50px',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
        borderRadius: '50px',
      },
    },
    '& .MuiInputLabel-root': {
      marginTop: !Username ? '0rem' : '0.5rem',
      '&.Mui-focused': {
        color: 'black',
        marginTop: '0.5rem',
      },
    },
  }}
/>

        </Typography>
        <Typography variant='h12'>

          <LoadingButton variant="contained"
            loading={false}
            sx={{backgroundColor: 'white', color: 'black', borderRadius: '100px', fontSize: '1rem',":hover":{backgroundColor:'black',color:'white',textShadow:'1px 1px 10px white',boxShadow:'1px 1px 1px white'} }}
          ><Typography 
          onClick={() => {
            if (Username === "") {
              alert("Please Enter Username")
            }
            else {
              setLoading(true)
              fetchDetails(Username).then((result) => {
                if (result) {
                  setLoading(false)
                  condition(true)
                  changed((prev) => prev + 1)
                }
              })
            }
          }}>
              View Insights <SearchIcon/>
            </Typography>
          </LoadingButton>
          <Typography

            sx={{ margin: '2rem',textAlign: 'center' }}
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
      </Container>
      </motion.div>
    </React.Fragment>
  );

}
