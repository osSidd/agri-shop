import { Box, Typography, Button, TextField, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup(){

    const [usertype, setUserType] = useState('other')

    function handleUserTypeChange(value: string){
        setUserType(value)
    }

    return (
        <Box
            component='form'
            noValidate
            width='75%'
            mx='auto'
            my={2}
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
                            value={usertype}
                            onChange={(e:SelectChangeEvent) => handleUserTypeChange((e.target as HTMLSelectElement).value)}
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
                    {
                        usertype === 'farmer' ? 
                        <Box>
                            <Box mt={2}>
                                <TextField fullWidth id="gstin" label="GSTIN" variant="outlined" type="text"/>
                            </Box>
                            <Box mt={2}>
                                <TextField fullWidth id="pan-no" label="PAN number" variant="outlined" type="text"/>
                            </Box>
                            <Box mt={2}>
                                <TextField fullWidth id="address-1" label="Address (Line 1)" variant="outlined" type="text"/>
                            </Box>
                            <Box mt={2}>
                                <TextField fullWidth id="address-2" label="Address (Line 2)" variant="outlined" type="text"/>
                            </Box>
                            <Box mt={2}>
                                <TextField fullWidth id="place" label="Village/town/city" variant="outlined" type="text"/>
                            </Box>
                            <Box mt={2}>
                                <TextField fullWidth id="block" label="Block/Gram panchayat" variant="outlined" type="text"/>
                            </Box>
                            <Box mt={2}>
                                <TextField fullWidth id="state" label="State" variant="outlined" type="text"/>
                            </Box>
                        </Box> :
                        <Box></Box>

                    }                     
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