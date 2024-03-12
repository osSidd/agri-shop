import { Typography } from "@mui/material";

export default function Footer(){
    return (
        <footer style={{margin: '5rem 0 1rem 0'}}>
            <Typography align="center">
                Copyright &copy; agri shop {new Date().getFullYear()} 
            </Typography>
        </footer>
    )
}