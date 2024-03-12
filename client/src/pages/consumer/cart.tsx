import { Box, Button, Typography } from "@mui/material";

export default function Cart(){
    return (
        <Box mt={15}>
            <Typography variant="h2" component='h2'>
                My cart
            </Typography>
            <Box mt={8}>
                <Button variant='contained' color='secondary'>Checkout cart</Button>
            </Box>
        </Box>
    )
}