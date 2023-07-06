import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import logo from '../../public/logo.png'
import Image from 'next/image';

type Props = {}

export default function login({ }: Props) {
    return (
        <div style={{
            backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
            height: '100%', width: '100%',
            display: 'flex', flexDirection: 'column', padding: '16px'
        }}>

            <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
                <Image height={300} width={300} src={logo} alt='logo' />
            </Box>

            <Box sx={{ bgcolor: 'white', display: 'flex', justifyContent: 'center', borderRadius: 4, p: 1, mb: 4 }}>
                <Stack direction='column'>
                    <TextField label="เบอร์โทรศัพท์" variant="outlined" sx={{ my: 2 }} />

                    <TextField label="รหัสผ่าน" variant="outlined" sx={{ mb: 2 }} />

                    <Button variant="contained" sx={{ mb: 2 }}>
                        เข้าสู่ระบบ
                    </Button>
                </Stack>
            </Box>
        </div>
    )
}