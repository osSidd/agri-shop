import { Box, Button, Link, TextField, Typography } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Login(){
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
                <Typography variant="h4" >Login</Typography>
                <Box mt={4}>
                    <TextField fullWidth id="email" label="Email" variant="outlined" type="email" />
                </Box>
                <Box mt={2}>
                    <TextField fullWidth id="password" label="Password" variant="outlined" type="password"/>
                </Box>
                <Box mt={2} display='flex' alignItems='center' justifyContent='space-between'>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Remember me" />
                    </FormGroup>
                    <Link fontFamily='roboto'>Forgot password?</Link>
                </Box> 
                <Box mt={2}>
                    <Button sx={{py:1, fontSize:20}} fullWidth variant='contained'>login</Button>                
                </Box>  
                <Box mt={2} textAlign='center'>
                    <Typography>Not registered yet? <Link>Sign up</Link></Typography>         
                </Box>
                <Typography mt={2} textAlign='center'>or log in via</Typography>
                <Box mt={2} display='flex' justifyContent='center' alignItems='center'>
                    <FacebookRoundedIcon sx={{mx:2, fontSize: 42}} color="primary"/>
                    <XIcon sx={{mx:2, fontSize: 42}}/>
                    <InstagramIcon color="error" sx={{mx:2, fontSize: 42}}/>
                </Box>
            </Box>
        </Box>
    )
}