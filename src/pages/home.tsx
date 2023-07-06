import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import HomeIcon from '@mui/icons-material/Home';
import AddchartIcon from '@mui/icons-material/Addchart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import { useRouter } from 'next/router'

export default function Home() {
  const [value, setValue] = React.useState(0);
  
  const router = useRouter()
  return (
    <Box sx={{ height: '100vh', bgcolor: '#FFEEEE', pb: 20 ,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      {/* <AppBar sx={{ bgcolor: '#A1D7F1' }}>
        <Toolbar sx={{display:'flex',justifyContent:'space-evenly'}}>
          <h5>image</h5>
          <Typography >
            Scroll to elevate App bar
          </Typography>
          <MenuIcon sx={{color:'#405F89'}}/>
        </Toolbar>
      </AppBar> */}
      <Box sx={{width:'200px',height:'100px',bgcolor:'white',borderRadius:4,
      display:'flex',justifyContent:'center',alignItems:'center',mb:4}}>
        <Typography variant="h6" sx={{textAlign:'center'}}>
          จับน้องยื่นขึ้น
        </Typography>
      </Box>
      <Box sx={{bgcolor:'white',height:'50px'}}>
        image
      </Box>



      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={0}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <BottomNavigationAction label="เครื่องชั้ง" icon={<HomeIcon />}  onClick={()=>{router.push('/home')}} />
          <BottomNavigationAction label="แปลผล" icon={<AddchartIcon />} onClick={()=>{router.push('/display')}} />
          <BottomNavigationAction label="คำแนะนำ" icon={<FavoriteIcon />} onClick={()=>{router.push('/advice')}}/>
          <BottomNavigationAction label="ติดต่อเรา" icon={<ForumIcon />} />
          <BottomNavigationAction label="โปรไฟล์" icon={<AccountCircleIcon />} onClick={() => { router.push('/profile') }}/>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

