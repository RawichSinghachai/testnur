import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


import HomeIcon from '@mui/icons-material/Home';
import AddchartIcon from '@mui/icons-material/Addchart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router'
import Checkdata from '@/components/Checkdata';
type Props = {}

export default function profile({ }: Props) {

    const [value, setValue] = React.useState(0);
    const router = useRouter()
    return (
        <>
            <Checkdata />
            <Box sx={{
                height: '100vh', backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
                pb: 20, display: 'flex', flexDirection: 'column', p: 2
            }}>

                <Box>
                    <Typography variant="h4" sx={{ mr: 4 }}>
                        บัญชี
                    </Typography>
                    <Paper sx={{ bgcolor: 'white', p: 2, borderRadius: 4, mt: 2, display: 'flex', alignItems: 'center' }}>
                        <AccountCircleIcon sx={{ fontSize: '40px', mr: 2 }} />
                        <Typography variant="h5" >
                            name nickname
                        </Typography>
                    </Paper>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 4 }}>
                    <Typography variant="h6" >
                        +เพิ่มทารก
                    </Typography>
                </Box>


                <Box sx={{ bgcolor: 'white', p: 1, mb: 4, borderRadius: 4, maxWidth: "500px" }}>
                    <Stack direction="row" justifyContent="flex-start" sx={{ mb: 1 }}>
                        <AccountCircleIcon sx={{ fontSize: '40px' }} />
                        <Typography variant="h4" >
                            น้องA
                        </Typography>
                    </Stack>
                    <Divider sx={{ bgcolor: 'black', mt: 2 }} />

                    <Stack direction="row" justifyContent="space-evenly" sx={{ mt: 1 }}>
                        <Stack direction="column" justifyContent="flex-start" >
                            <Typography variant="subtitle1">ตรวจครั้งที่ 1 วันที่ 2/6/66</Typography>
                        </Stack>

                        <Stack direction="column" justifyContent="space-evenly" >
                            <Typography variant="subtitle1">น้ำหนัก 40 kg</Typography>
                            <Typography variant="subtitle1">น้ำหนัก 40 kg</Typography>
                            <Typography variant="subtitle1">น้ำหนัก 40 kg</Typography>
                        </Stack>
                    </Stack>

                    <Divider sx={{ bgcolor: 'black', mt: 2 }} />

                    <Stack direction="row" justifyContent="space-evenly" sx={{ mt: 1 }}>
                        <Stack direction="column" justifyContent="flex-start" >
                            <Typography variant="subtitle1">ตรวจครั้งที่ 2 วันที่ 2/6/66</Typography>
                        </Stack>

                        <Stack direction="column" justifyContent="space-evenly" >
                            <Typography variant="subtitle1">น้ำหนัก 40 kg</Typography>
                            <Typography variant="subtitle1">น้ำหนัก 40 kg</Typography>
                            <Typography variant="subtitle1">น้ำหนัก 40 kg</Typography>
                        </Stack>
                    </Stack>

                </Box>






                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={4}
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
    )
}