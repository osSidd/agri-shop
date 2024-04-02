import { Box, Typography, Button, TextField} from "@mui/material";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup(){

    const navigate = useNavigate()

    const [userForm, setUserForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    function handleChange(e: ChangeEvent){
        const {name, value} = e.target as HTMLInputElement

        setUserForm(prev => ({
            ...prev,
            [name] : value
        }))
    }

    async function submitData(e: SyntheticEvent){
        e.preventDefault()
        try{
            const response = await fetch('http://localhost:3000/users/register', {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(userForm)
            })

            if(response.ok){
                const data = await response.json()
                if(data.status === 'SUCCESS') {
                    setUserForm({name: '', email: '', password: ''})
                    navigate('/login')
                }
            }
        }catch(err){
            console.log(err.message)
        }
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
            onSubmit={submitData}
        >   
            <Box width='100%'>
                <Typography variant="h4" textAlign='center'>Sign up</Typography>
            
                <Box>
                    <Box mt={6}>
                        <TextField
                            fullWidth 
                            id="name" 
                            label="Full name" 
                            variant="outlined" 
                            type="text"
                            name="name"
                            value={userForm.name}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                    <Box mt={2}>
                        <TextField 
                            fullWidth 
                            id="email" 
                            label="Email id" 
                            variant="outlined" 
                            type="email"
                            name="email"
                            value={userForm.email}
                            onChange={handleChange} 
                            required
                        />
                    </Box>
                    <Box mt={2}>
                        <TextField 
                            fullWidth 
                            id="password" 
                            label="Password" 
                            variant="outlined" 
                            type="password"
                            name="password"
                            value={userForm.password}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                    <Box mt={2} textAlign='center'>
                        <Button 
                            type="submit" 
                            fullWidth 
                            disableElevation 
                            variant='contained'
                        >Sign up</Button>                
                    </Box>
                    <Box textAlign='center' mt={3}>
                        <Typography paddingLeft={1}>Already registered? <Link to='/login'>Sign in</Link></Typography>         
                    </Box>  
                </Box>
            </Box>        
        </Box>
    )
}