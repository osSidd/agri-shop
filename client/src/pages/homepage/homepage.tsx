import { Box, Typography } from "@mui/material";

export default function Homepage(){
    
    return (
        <Box>
            <Box minHeight='100vh' bgcolor='error.light'>
                <Typography lineHeight='100vh' mx='auto' width='fit-content' variant="h2">Carousel of products</Typography>
            </Box>

            <Box minHeight='100vh' bgcolor='success.light'>
                <Typography lineHeight='100vh' mx='auto' width='fit-content' variant="h2">List of products</Typography>
            </Box>

            <Box minHeight='100vh' bgcolor='warning.light'>
                <Typography lineHeight='100vh' mx='auto' width='fit-content' variant="h2">Offers</Typography>
            </Box>

            <Box minHeight='100vh' bgcolor='#222'>
                <Typography lineHeight='100vh' mx='auto' width='fit-content' variant="h2" color='white'>Footer</Typography>
            </Box>
            
        </Box>
    )
}