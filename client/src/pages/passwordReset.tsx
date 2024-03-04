import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function PasswordReset(){
    return (
        <Box
            component='form'
            minHeight='100vh'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >
            <Box>
            <Typography component='h1' variant="h4">Forgot your password?</Typography>
            <Typography mt={2}  >
                If you've forgotten your password, use the form below to request a link to change it. 
            </Typography>
            <TextField sx={{width:500, mt:4}} type="email" id="email" label="Registered email address"/>
            <Button sx={{mt:4, py:1, width: 500, display:'block'}} disableElevation variant='contained'>Send password reset link</Button>
            <Box mt={8}>
                <Typography>
                    Already got an account? <Link to='/login'>Log in</Link>
                </Typography>
                <Typography mt={1}>
                    Not registered yet? <Link to='/sign-up'>Sign up</Link>
                </Typography>
                <Typography mt={1}>
                    Didn&apos;t receive your reset link? <Link to='#'>Resend link</Link>
                </Typography>
            </Box>
            </Box>
        </Box>
    )
}