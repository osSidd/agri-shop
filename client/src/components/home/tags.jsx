import { Box, Button, Heading } from "@chakra-ui/react";
import useBlogContext from '../../hooks/blogs/useBlogContext'

export default function Tags({tags}){
   
    const {dispatch} = useBlogContext()

    async function getBlogsForTag(id){

        try{
            const response = await fetch(`${import.meta.env.VITE_URL}/api/tags/${id}`)
            if(response.ok){
                const data = await response.json()
                console.log(data)
                dispatch({
                    type: 'SET_ALL_BLOGS',
                    payload: data,
                })
            }
        }catch(err){
            console.log(err.message)
        }
    }

    return (
        <Box>
            <Heading as='h2' fontSize='xl'>Tags</Heading>
            <Box mt={4} display='flex' flexWrap='wrap' alignItems='center'>
                <Button 
                    onClick={() => getBlogsForTag('ALL')} 
                    mr={2} 
                    mb={2} 
                    colorScheme="teal"
                >All
                </Button>
            {
                tags.map(tag => (
                    <Button onClick={() => getBlogsForTag(tag._id)} key={tag._id} mr={2} mb={2} colorScheme="teal">{tag.name}</Button>
                ))
            }
            </Box>
        </Box>
    )
}