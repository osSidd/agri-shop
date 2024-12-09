import { Box, Heading } from "@chakra-ui/react";
import social from '../../static/icons'

export default function Social(){
    
    return(
        <Box>
            <Heading as='h2' fontSize='xl'>Social</Heading>
            <Box 
                mt={4} 
                pr={12} 
                display='flex' 
                justifyContent='space-between' 
                alignItems='center' 
                flexWrap='wrap'>
            {
                social.map(icon => (
                    <Box 
                        transition='all 0.35s ease-in-out' 
                        cursor='pointer' 
                        _hover={{transform: 'scale(1.25)'}} 
                        key={icon.name} 
                        color={icon.color} 
                        fontSize={32}>
                            <a 
                                href={icon.href} 
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className={`fa fa-${icon.name}`}></i>
                            </a>
                        </Box>
                ))
            }
            </Box>
        </Box>
    )
}