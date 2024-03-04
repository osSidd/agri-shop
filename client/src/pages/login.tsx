import { useState } from "react";

import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import EnvelopeIcon from '@mui/icons-material/Mail';

export default function Login(){

    const [emailLogin, setEmailLogin] = useState(false)

    const btnSx= {
        textTransform: 'initial',
        py:1,
        width: 325,
        fontSize: 20,
    }

    function displayEmailLogin(boolOption: boolean){
        setEmailLogin(boolOption)
    }

    return (
        <Box
            component='form'
            noValidate
            maxWidth={576}
            mx='auto'
            display='flex'
            justifyContent='center'
            alignItems='center'
            minHeight='100vh'
        >
            <Box width='100%'>
                <Typography textAlign='center' fontSize={22}>Sign in {emailLogin? '' : 'using'}</Typography>
                <Box mt={2} display={emailLogin? 'none' : 'flex'} flexDirection='column' alignItems='center'>
                    <Button disabled sx={{ ...btnSx,}}  disableElevation variant="contained" startIcon={<GoogleIcon/>} >Google</Button>
                    <Button disabled sx={{...btnSx, mt:2}}  disableElevation variant="contained" startIcon={<FacebookRoundedIcon/>} >Facebook</Button>
                    <Button disabled sx={{...btnSx, mt:2,}}  disableElevation variant="contained" startIcon={<XIcon/>} >Twitter</Button>
                    <Button sx={{...btnSx, mt:2}}  disableElevation variant='contained' startIcon={<EnvelopeIcon/>} onClick={() => displayEmailLogin(true)}>Email</Button>                
                </Box>
                <Box display={emailLogin ? 'block': 'none'}>
                    <Box display='flex' flexDirection='column' alignItems='start'  mt={2}>
                        <Typography paddingLeft={1}>Not registered yet? <Link>Sign up</Link></Typography>         
                        <Button sx={{...btnSx, fontSize: 16, fontWeight:400, width: 'auto'}} onClick={() => displayEmailLogin(false)}>more sign in options</Button>                
                    </Box>
                    <Box mt={6}>
                        <TextField fullWidth id="email" label="Email" variant="outlined" type="email" />
                    </Box>
                    <Box mt={2}>
                        <TextField fullWidth id="password" label="Password" variant="outlined" type="password"/>
                    </Box>
                    <Box mt={2} display='flex' alignItems='center' justifyContent='space-between'>
                        <FormGroup>
                        <FormControlLabel control={<Checkbox/>} label="Remember me" />
                        </FormGroup>
                        <Typography><RouteLink to='/reset-password'>Forgot password?</RouteLink></Typography>
                    </Box> 
                    <Box mt={2} textAlign='center'>
                        <Button sx={{...btnSx,}} fullWidth disableElevation variant='contained'>Sign in</Button>                
                    </Box>
                    <Box textAlign='center' mt={3}>
                    </Box>  
                </Box>
            </Box>
        </Box>
    )
}