import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import HomeIcon from '@mui/icons-material/Home';
import AddchartIcon from '@mui/icons-material/Addchart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useRouter } from 'next/router'
import Checkdata from '@/components/Checkdata';

export default function Advice() {
  const [value, setValue] = React.useState(0);

  const router = useRouter()
  return (
    <>
      <Checkdata />
      <Box sx={{
        height: '100vh', backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
        p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
      }}>

        <Typography variant="h4" sx={{ pb: 6 }}>
          ช่วงอายู 1-2 ปี
        </Typography>


        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
          <Button sx={{ bgcolor: "#433D3D", minWidth: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h4" sx={{ color: 'white' }}>
              คำแนะนำ
            </Typography>
          </Button>
        </Box>



        <Typography variant="h4" sx={{ py: 6 }}>
          ช่วงอายู 4-6 ปี
        </Typography>


        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
          <Button sx={{ bgcolor: "#433D3D", minWidth: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h4" sx={{ color: 'white' }}>
              คำแนะนำ
            </Typography>
          </Button>
        </Box>






        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={2}
            onChange={(event, newValue) => setValue(newValue)}
          >
            <BottomNavigationAction label="เครื่องชั้ง" icon={<HomeIcon />} onClick={() => { router.push('/home') }} />
            <BottomNavigationAction label="แปลผล" icon={<AddchartIcon />} onClick={() => { router.push('/display') }} />
            <BottomNavigationAction label="คำแนะนำ" icon={<FavoriteIcon />} onClick={() => { router.push('/advice') }} />
            <BottomNavigationAction label="ติดต่อเรา" icon={<ForumIcon />} />
            <BottomNavigationAction label="โปรไฟล์" icon={<AccountCircleIcon />} onClick={() => { router.push('/profile') }} />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}

