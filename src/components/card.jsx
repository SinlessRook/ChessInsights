import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Profile_Country, Profile_Followers, Profile_League, Profile_Username, Profile_URL, StatsRapid, StatsBlitz, StatsBullet, StatsPuzzle } from '../Funtions';
import ActionAreaCard from './Detail_Card';
import { RapidImg, BulletImg, BlitzImg, PuzzleImg } from '../assets/utils/Images/index';
import {motion} from 'framer-motion'

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
  name = name.toUpperCase();
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: name.split(' ').length > 1
      ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
      : `${name.split(' ')[0][0]}`,
  };
}

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: { xs: '100%',md: 1000, sm: 500 }, backgroundColor: '#DEE2E6' }}>
      <CardContent>
        <Typography
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column',sm: 'row' },
            justifyContent: 'space-between',
          }}
        >
          <motion.div
          initial={{opacity:0,y:'15vh'}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1.5,staggerChildren:1}}
          >
          <Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'center', sm: 'flex-start' },
                padding: '10px',
              }}
            >
              <Avatar
                sx={{ marginBottom: { xs: '10px', sm: 0 }, marginRight: { sm: '10px' } }}
                {...stringAvatar(`${Profile_Username}`)}
              />
              <Typography
                sx={{ margin: { xs: '10px 0', sm: '10px' }, textAlign: { xs: 'center', sm: 'left' } }}
              >
                {Profile_Username.toUpperCase()}
              </Typography>
            </Typography>
            <Typography sx={{ mb: 1.5, textAlign: { xs: 'center', sm: 'left' } }} color="text.secondary">
              {Profile_League.toUpperCase()} League
            </Typography>
            <Typography variant="body2" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              {Profile_Followers} Followers
              <br />
              {Profile_Country}
            </Typography>
            <Typography sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <a href={Profile_URL} style={{ color: 'inherit' }}>
                View Profile
              </a>
            </Typography>
          </Typography>
          </motion.div>
         
          <Typography
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              margin: '10px',
              padding: '10px',
              gap: { xs: '10px', sm: '0' },
            }}
          >
            <motion.div className='grid grid-col-2'
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            transition={{type:'spring',delay:0.3,staggerChildren:1,staggerDirection:1}}
            >
            <ActionAreaCard type="Rapid" value={StatsRapid[3]} img={RapidImg} best={StatsRapid[4]} />
            <ActionAreaCard type="Blitz" value={StatsBlitz[3]} img={BlitzImg} best={StatsBlitz[4]} />
            </motion.div>
            <motion.div className='grid grid-col-2'
            initial={{opacity:0,scale:2}}
            whileInView={{opacity:1,scale:1}}
            transition={{type:'spring',delay:0.3,staggerChildren:1,staggerDirection:-1}}
            >
            <ActionAreaCard type="Bullet" value={StatsBullet[3]} img={BulletImg} best={StatsBullet[4]} />
            <ActionAreaCard type="Puzzle" value={StatsPuzzle[0]} img={PuzzleImg} best={StatsPuzzle[1]} />
            </motion.div> 
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
