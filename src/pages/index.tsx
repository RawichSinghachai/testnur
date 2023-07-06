import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../../public/logo.png'
import { red, lightBlue, grey, indigo, teal, yellow, blueGrey } from '@mui/material/colors';
import Image from 'next/image';

type Props = {}

function index({ }: Props) {
  return (
    <div style={{
      backgroundColor: '#FFEEEE', height: '100vh',width:'100%',
      display: 'flex', flexDirection: 'column'
    }}>
      <Box sx={{ display: 'column', p: 2 }}>

        <Box sx={{ display:'flex',justifyContent:'center',my:8}}>
          <Image height={300} width={300} src={logo} alt='logo'/>
        </Box>


        <Typography variant="h5" sx={{ textAlign: 'center', mt: 2 }}>
          ลงชื่อเข้าใช้งาน
        </Typography>


        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Stack direction="row" justifyContent="center" spacing={2} sx={{ p: 1 }}>

            <Button variant="contained" startIcon={<FacebookIcon />}>
              Facebook
            </Button>

            <Button variant="contained" startIcon={<GoogleIcon />}>
              GOOGLE
            </Button>

          </Stack>
          {/* bgcolor: teal[500], ":hover": { bgcolor: teal[700] } */}
          <Stack direction="row" justifyContent="center" spacing={2} sx={{ p: 1 }}>
            <Button variant="contained" startIcon={<EmailIcon />} >
              E-mail หรือ เบอร์โทรศัพท์
            </Button>
          </Stack>
        </Box>

      </Box>
    </div >
  )
}

export default index