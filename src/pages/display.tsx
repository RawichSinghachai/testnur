import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Scale from '@/components/display/Scale';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import HomeIcon from '@mui/icons-material/Home';
import AddchartIcon from '@mui/icons-material/Addchart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router'
type Props = {}

export default function Display({ }: Props) {
    const [value, setValue] = React.useState(0);
    const router = useRouter()
    return (
        <Box sx={{ height: '100vh', bgcolor: '#FFEEEE', pb: 20,
            display: 'flex', flexDirection: 'column' }}>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 10, mr: 2 }}>
                <ChangeCircleIcon sx={{ fontSize: '40px' }} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: 8 }}>
                <Scale title={'น้ำหนัก'} value={"50"} />
                <Scale title={'ส่วนสูง'} value={"120"} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center',width:'100%',mt:4,}}>
                <Button variant="contained" sx={{p:2}}>Show chart</Button>
            </Box>


            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={1}
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
    )
}