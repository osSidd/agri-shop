import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";

export default function ProductForm(){
    return (
        <Box
            component='form'
            mt={14}
            mb={4}
        >
            <Typography variant="h2">Add new product</Typography>
            <Box mt={2}>
                <TextField fullWidth id="name" label="Name" variant="outlined"/>
            </Box>
            <Box mt={2}>
                <TextField fullWidth id="price" label="Price" type="number" variant="outlined"/>
            </Box>
            <Box mt={2}>
                <Select
                    variant='outlined'
                    label='Select Category'
                    id="category"
                    fullWidth
                    value='Wheat'
                    onChange={() => {}}
                >
                    <MenuItem value="wheat">Wheat</MenuItem>
                    <MenuItem value="rice">Rice</MenuItem>
                    <MenuItem value="oat">Oat</MenuItem>
                    <MenuItem value="cereal">Cereal</MenuItem>
                </Select>
            </Box>
            <Box mt={2}>
                <Typography mb={2}>Select tags</Typography>
                <Button sx={{mr:2}} disableElevation variant="contained">Tag1</Button>
                <Button sx={{mr:2}} disableElevation variant="contained">Tag1</Button>
                <Button sx={{mr:2}} disableElevation variant="contained">Tag1</Button>
                <Button sx={{mr:2}} disableElevation variant="contained">Tag1</Button>
                <Button sx={{mr:2}} disableElevation variant="contained">Tag1</Button>
            </Box>
            <Box mt={2}>
                <TextField fullWidth id="image" label="Image" type="file" variant="outlined"/>
            </Box>
            <Box mt={2}>
                <TextField fullWidth multiline rows={8} id="description" label="Description" variant='outlined'  />
            </Box>
            <Box mt={4}>
                <Button variant='contained'>Add product</Button>
            </Box>
        </Box>
    )
}