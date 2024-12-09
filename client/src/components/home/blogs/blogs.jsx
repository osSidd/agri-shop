import { Box, Text } from "@chakra-ui/react";

import BlogCard from "./blogCard";

export default function Blogs({blogs}){

    return (
        <Box>
            {
                blogs.length ? 
                blogs?.map(blog => {
                    return(
                        <BlogCard
                            blog={blog}
                            key={blog._id}
                        />
                )})
                :
                <Box textAlign='center'>
                    <Text fontSize={18} color='GrayText'>No Blogs</Text>
                </Box>
            }   
        </Box>
    )
}