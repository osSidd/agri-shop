import { Box, Typography, Button, TextField, Select, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function Signup(){
    return (
        <Box
            component='form'
            noValidate
            width='75%'
            mx='auto'
            display='flex'
            justifyContent='center'
            alignItems='center'
            minHeight='100vh'
        >   
            <Box width='100%'>
                <Typography variant="h4" textAlign='center'>Sign up</Typography>
            
                <Box>
                    <Box mt={6}>
                        <TextField fullWidth id="name" label="Full name" variant="outlined" type="text" />
                    </Box>
                    <Box mt={2}>
                        <Select
                            labelId="user-select-id"
                            id="user-select"
                            label="Select user type"
                            value='user type'
                            onChange={() => {}}
                            fullWidth
                        >
                            <MenuItem disabled value="user type">User type</MenuItem>
                            <MenuItem value="farmer">Farmer</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                    </Box>
                    <Box mt={2}>
                        <TextField fullWidth id="username" label="Username" variant="outlined" type="text"/>
                    </Box>
                    <Box mt={2}>
                        <TextField fullWidth id="mobile" label="Mobile number" variant="outlined" type="text"/>
                    </Box>
                    <Box mt={2}>
                        <TextField fullWidth id="email" label="Email id" variant="outlined" type="email" />
                    </Box>
                    <Box mt={2}>
                        <TextField fullWidth id="password" label="Password" variant="outlined" type="password"/>
                    </Box>                     
                    <Box mt={2} textAlign='center'>
                        <Button fullWidth disableElevation variant='contained'>Sign up</Button>                
                    </Box>
                    <Box textAlign='center' mt={3}>
                        <Typography paddingLeft={1}>Already registered? <Link to='/login'>Sign in</Link></Typography>         
                    </Box>  
                </Box>
            </Box>        
        </Box>
    )
}