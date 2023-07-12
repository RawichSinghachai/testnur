import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { pink, grey } from '@mui/material/colors';



import HomeIcon from '@mui/icons-material/Home';
import AddchartIcon from '@mui/icons-material/Addchart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useRouter } from 'next/router'
import Checkdata from '@/components/Checkdata';

export default function Index() {
  const [value, setValue] = React.useState(0);

  const router = useRouter()
  return (
    <>
      <Checkdata />
      <Box sx={{
        height: '100%', backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
        p: 2,pb:10 ,display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
      }}>

        <Typography variant="h4" sx={{ pb: 6 }}>
          ช่วงอายู 0-6 เดือน
        </Typography>


        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
          <Button sx={{
            bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] },
            minWidth: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
            onClick={() => router.push('/advice/detailone')}>
            <Typography variant="h4" sx={{ color: 'white' }}>
              คำแนะนำ
            </Typography>
          </Button>
        </Box>



        <Typography variant="h4" sx={{ py: 6 }}>
          ช่วงอายู 6-12 เดือน
        </Typography>


        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
          <Button sx={{
            bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] },
            minWidth: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
            onClick={() => router.push('/advice/detailtwo')}>
            <Typography variant="h4" sx={{ color: 'white' }}>
              คำแนะนำ
            </Typography>
          </Button>
        </Box>

        <Typography variant="h4" sx={{ py: 6 }}>
          ช่วงอายู 1-3 ปี
        </Typography>


        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
          <Button sx={{
            bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] },
            minWidth: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
            onClick={() => router.push('/advice/detailthree')}>
            <Typography variant="h4" sx={{ color: 'white' }}>
              คำแนะนำ
            </Typography>
          </Button>
        </Box>


        <Typography variant="h4" sx={{ py: 6 }}>
          ช่วงอายู 3-5 ปี
        </Typography>


        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
          <Button sx={{
            bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] },
            minWidth: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
            onClick={() => router.push('/advice/detailfour')}>
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

