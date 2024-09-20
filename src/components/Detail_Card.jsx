import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard(props) {
  const type=props.type;
  const value=props.value ;
  const best = props.best;
  const img = props.img; 
  return (
    <Card sx={{ minWidth: 160, margin: '1rem'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{height:'200px'}}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
          sx={{color:'black'}}
          >
            {type}
          </Typography>
          <Typography variant="body2" color="inherit">
            {type=='Puzzle'?`Solved:${value}`:`Rating:${value}`}
          </Typography>
          <Typography variant="body3" color="inherit">
            {type=='Puzzle'?`Atempts:${best}`:`Best:${best}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}