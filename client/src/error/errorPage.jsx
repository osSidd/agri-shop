import { Box, Heading, Link } from "@chakra-ui/react";

export default function ErrorPage(){
    return(
        <Box>
            <Heading>Page not found</Heading>
            <Link href="/">Go to home</Link>
        </Box>
    )
}