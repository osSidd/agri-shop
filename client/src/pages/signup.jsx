import { Box, Heading, Button, Input, FormLabel } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import BackToBlogsBtn from "../components/backBtn";
import FormControlElement from "../components/formControl";

import useSignup from "../hooks/user/useSignup";

export default function Signup(){

    const {formData, handleChange, signupUser} = useSignup()

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
                
                <form style={{width: '75%', color:'GrayText'}} onSubmit={signupUser} encType="multipart/form-data">
                
                    <Heading textAlign='center' as='h2' fontSize='2xl'>Create your account</Heading>    
                    
                    <FormLabel mt={8} mb={2}>Profile image</FormLabel>
                    <Input type="file" name="avatar" outline='none' border='none' pl={1} onChange={handleChange}/>

                    <FormControlElement
                        label='Full Name'
                        name='name'
                        placeholder='Enter your full name'
                        value={formData.name}
                        handleChange={handleChange}
                        required={true}
                    />
                    <FormControlElement
                        label='Email'
                        name='email'
                        type='email'
                        placeholder='Enter your Email address'
                        value={formData.email}
                        handleChange={handleChange}
                        required={true}
                    />
                    <FormControlElement
                        label='Username'
                        name='username'
                        placeholder='Enter your username'
                        value={formData.username}
                        handleChange={handleChange}
                        required={true}
                    />
                    <FormControlElement
                        label='Password'
                        name='password'
                        type='password'
                        placeholder='Enter a password'
                        value={formData.password}
                        handleChange={handleChange}
                        required={true}
                    />
                    <FormControlElement
                        label='Confirm password'
                        name='confirmPassword'
                        type='password'
                        placeholder='Confirm password'
                        value={formData.confirmPassword}
                        handleChange={handleChange}
                        required={true}
                    />
                    <Button 
                        mx='auto' 
                        colorScheme='blue'
                        px={12}
                        display='block' 
                        mt={8}
                        type="submit"
                    >
                        Sign up
                    </Button>
                    <Box 
                        textAlign='center' 
                        mt={2} 
                        color='gray.400' 
                        fontSize='sm'
                    >
                        Already have an account? &nbsp;
                        <Link to='/users/login' style={{color: 'blue'}}>
                            Log in
                        </Link>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}