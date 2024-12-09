import {Box, Button, Checkbox, Heading} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

import FormControlElement from '../components/formControl'
import BackToBlogsBtn from '../components/backBtn'

import useLogin from '../hooks/user/useLogin'

export default function Login(){

    const {formData, handleChange, loginUser} = useLogin()

    return(
        <Box>
            <Box 
                w={{base: '100%', md:'4xl'}} 
                mx='auto' 
                display='flex' 
                flexDir='column' 
                alignItems='center' 
                justifyContent='center'
            >
                
            <Box alignSelf='flex-start'><BackToBlogsBtn/></Box>
                            
            <form style={{width: '75%', color:"GrayText"}} onSubmit={loginUser}>
                <Heading as='h2' fontSize='2xl' textAlign='center'>Login</Heading>
                <FormControlElement
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Enter your Email address'
                    value={formData.email}
                    handleChange={handleChange}
                />
                <FormControlElement
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='Enter a password'
                    value={formData.password}
                    handleChange={handleChange}
                />
                <Box mt={4} display='flex' justifyContent='space-between' fontSize={{base:'xs', md:'md'}}>
                    <Checkbox fontSize={{base:'xs', md:'md'}}>Remember me</Checkbox>
                    <Link style={{color: 'blue'}} to='/'>Forgot Password?</Link>
                </Box>
                <Button 
                    mx='auto' 
                    colorScheme='blue'
                    px={12}
                    display='block' 
                    mt={8}
                    type="submit"
                >
                    Log in
                </Button>
                <Box 
                    textAlign='center' 
                    mt={2} 
                    color='gray.400' 
                    fontSize='sm'
                >
                    New here? &nbsp;
                    <Link to='/users/signup' style={{color: 'blue'}}>
                        create account
                    </Link>
                </Box>
            </form>
            </Box>
        </Box>
    )
}