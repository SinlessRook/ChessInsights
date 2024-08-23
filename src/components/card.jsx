import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Profile_Country, Profile_Followers, Profile_League, Profile_Username, Profile_URL,StatsRapid, StatsBlitz, StatsBullet, StatsPuzzle } from '../Funtions';
import PieActiveArc from './pie_chart'
import Avatar from '@mui/material/Avatar';
import ActionAreaCard from './Detail_Card';
import {RapidImg,BulletImg,BlitzImg, PuzzleImg} from '../assets/utils/Images/index'

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
function stringAvatar(name) {
  name=name.toUpperCase();
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: name.split(' ').length > 1 ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}` : `${name.split(' ')[0][0]}`,
  };
}

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 900, backgroundColor: '#DEE2E6' }}>
      <CardContent>
        <Typography
        sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}
        >
        <Typography>
        <Typography variant="h5" component="div" sx={{ display: 'flex', flexDirection: 'row', padding: '10px' }}>
          <Avatar
            sx={{ marginRight: '10px' }}
            {...stringAvatar(`${Profile_Username}`)} />
          <Typography sx={{ margin: '10px' }}>
            {Profile_Username.toUpperCase()}
          </Typography>

        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {Profile_League.toUpperCase()} League
        </Typography>
        <Typography variant="body2">
          {Profile_Followers} Followers
          <br />
          {Profile_Country}
        </Typography>
        <Typography>
          <a href={Profile_URL} style={{
            color: 'inherit'
          }} >View Profile</a>
        </Typography>
        </Typography>
        <Typography
        sx={{display:'grid', gridTemplateColumns:'1fr 1fr',margin:'10px',padding:'10px'}}
        >
          <ActionAreaCard type="Rapid" value={StatsRapid[3]} img={RapidImg} best={StatsRapid[4]}/>
          <ActionAreaCard type="Blitz" value={StatsBlitz[3]} img={BlitzImg} best={StatsBlitz[4]}/>
          <ActionAreaCard type="Bullet" value={StatsBullet[3]} img={BulletImg} best={StatsBullet[4]}/>
          <ActionAreaCard type="Puzzle" value={StatsPuzzle[0]} img ={PuzzleImg} best ={StatsPuzzle[1]}/>
        </Typography>
        
        </Typography>
      </CardContent>
    </Card>
  );
}