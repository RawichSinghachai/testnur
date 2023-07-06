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
type Props = {}

export default function profile({ }: Props) {

    const [value, setValue] = React.useState(0);
    const router = useRouter()
    return (
        <div>
            <Box sx={{ height: '100vh', bgcolor: '#FFEEEE', pb: 20, display: 'flex', flexDirection: 'column', p: 2 }}>

                <Box>
                    <Typography variant="h4" sx={{ mr: 4 }}>
                        บัญชี
                    </Typography>
                    <Paper sx={{ bgcolor: 'white', p: 2, borderRadius: 4, mt: 2 }}>
                        <AccountCircleIcon sx={{ fontSize: '40px' }} />
                    </Paper>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 4 }}>
                    <Typography variant="h6" >
                        +เพิ่มทารก
                    </Typography>
                </Box>


                <Box sx={{ bgcolor: 'white', p: 2, mb:4,borderRadius: 4, maxWidth: "500px" }}>
                    <Stack direction="row" justifyContent="flex-start" sx={{ mb: 1 }}>
                        <AccountCircleIcon sx={{ fontSize: '40px' }} />
                        <Typography variant="h4" >
                            น้องA
                        </Typography>
                    </Stack>
                    <Divider sx={{ bgcolor: 'black', mt: 2 }} />

                    <Stack direction="row" justifyContent="space-evenly" sx={{ mt: 1 }}>
                        <Stack direction="column" justifyContent="flex-start" >
                            <Typography variant="h6">ตรวจครั้งที่ 1 วันที่ 2/6/66</Typography>
                        </Stack>

                        <Stack direction="column" justifyContent="space-evenly" >
                            <Typography variant="h6">น้ำหนัก 40 kg</Typography>
                            <Typography variant="h6">น้ำหนัก 40 kg</Typography>
                            <Typography variant="h6">น้ำหนัก 40 kg</Typography>
                        </Stack>
                    </Stack>

                    <Divider sx={{ bgcolor: 'black', mt: 2 }} />

                    <Stack direction="row" justifyContent="space-evenly" sx={{ mt: 1 }}>
                        <Stack direction="column" justifyContent="flex-start" >
                            <Typography variant="h6">ตรวจครั้งที่ 2 วันที่ 2/6/66</Typography>
                        </Stack>

                        <Stack direction="column" justifyContent="space-evenly" >
                            <Typography variant="h6">น้ำหนัก 40 kg</Typography>
                            <Typography variant="h6">น้ำหนัก 40 kg</Typography>
                            <Typography variant="h6">น้ำหนัก 40 kg</Typography>
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
        </div>
    )
}