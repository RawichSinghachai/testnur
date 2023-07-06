import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';


type Props = {}

export default function register({ }: Props) {
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState(null);

    const formattedDate = moment(value).format('YYYY-MM-DD');
    console.log(value);
    console.log(formattedDate);


    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <div >
            <Box sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
                height: '100%', p: 2
            }}>

                <Box sx={{ pb: 2, mt: 2 }}>
                    <Stack direction="row" justifyContent="flex-start">
                        <AccountCircleIcon sx={{ fontSize: '40px' }} />
                        <Typography variant='h4'>สมัครสมาชิก</Typography>
                    </Stack>
                </Box>

                <Paper sx={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    p: 4, borderRadius: 2
                }}>
                    {/* padding paper large 4 small 2 */}
                    <TextField label="ขื่อ-นามสกุล" variant="outlined" sx={{ pb: 2 }} />

                    <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{ width: '248px', }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                    <TextField label="เบอร์โทรศัพท์" variant="outlined" sx={{ my: 2 }} />

                    <TextField label="รหัสผ่าน" variant="outlined" sx={{ mb: 2 }} />

                    <Typography variant='h6' sx={{ py: 2 }}>AND</Typography>

                    <TextField label="ขื่อ-นามสกุล" variant="outlined" sx={{ pb: 2 }} />

                    <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{ width: '248px', mb: 2 }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                    <LocalizationProvider dateAdapter={AdapterMoment} >
                        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} sx={{ width: '248px', }} />
                    </LocalizationProvider>

                    <Box sx={{ mt: 2 }}>
                        <input type="file" name="" id="" />
                    </Box>

                </Paper>

                <Stack direction="row" justifyContent="center">
                    <Button variant="contained" sx={{ my: 4 }}>
                        Confirm
                    </Button>
                </Stack>



            </Box>
        </div>
    )
}
