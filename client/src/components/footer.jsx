import { Box, Link } from "@chakra-ui/react";

export default function Footer(){

    const style = {
        textDecoration:'none',
        fontWeight: '600',
    }

    return (
        <footer>
            <Box fontSize={{base:'xs', md:'sm'}} w='fit-content' mx='auto' mt={32}>
                <Link style={style} href="/" >Os&apos; writings</Link> - <Link style={style} href="https://portfolio-1fo7.vercel.app/" target="_blank" rel="noreferrer">Osama Siddiquee</Link> | Copyright &copy; {new Date().getFullYear()}&nbsp; 
            </Box>
        </footer>
    )
}