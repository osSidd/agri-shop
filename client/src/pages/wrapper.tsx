import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function Wrapper({children}: {children: ReactNode}){
    return (
        <Box display='flex' flexDirection='row-reverse'>
            <Box
                component='img'
                width='50%'
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            {children}
        </Box>
    )
}