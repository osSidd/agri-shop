import { Fragment } from "react";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import formatDate from "../../utils/formatDate";

export default function Recent({blogs}){
    return(
        <Box>
            <Heading as='h2' fontSize='xl'>Recent posts</Heading>
            <Box mt={4}>
                {
                    blogs.slice(0,3).map((blog, index, arr) => (
                        <Fragment key={blog._id}>
                            <Text>{blog.title}</Text>
                            <Text fontSize='small' color='GrayText'>{formatDate(blog.createdAt)}</Text> 
                            {index < arr.length - 1 && <Divider my={2}/>}
                        </Fragment>
                    ))
                }
            </Box>
        </Box>
    )
}