import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
    title:String
    value:String
}

export default function Scale({title,value}: Props) {
  return (
    <>
        <Box sx={{ display: 'flex', justifyContent: 'center',alignItems:'baseline' ,pb:4 }}>
                <Typography variant="h5" sx={{mr:2}}>
                    {title}
                </Typography>

                <Box sx={{bgcolor: 'white',display: 'flex', justifyContent: 'center',p:1,borderRadius:4,width:'150px'}}>
                <Typography variant="h5" >
                    {value}
                </Typography>
                </Box>
            </Box>
    </>
  )
}