import { Card, CardHeader, CardBody, Heading, Box, Image, Stack, Text, Avatar, Badge} from '@chakra-ui/react'
import {TimeIcon, ChatIcon} from '@chakra-ui/icons'

import { useNavigate } from 'react-router-dom'

import formatDate from '../../../utils/formatDate'

import store from '../../../store/store'
import { fetchBlog } from '../../../features/blog/blogSlice'

export default function BlogCard({blog}){

    const navigate = useNavigate()

    function navigateToBlog(){
        store.dispatch(fetchBlog(blog._id))
        navigate(`/blogs/${blog._id}`)
    }
    
    return (
        <Card
            overflow='hidden'
            direction={{base:'column', sm: 'row'}}
            bg='transparent'
            maxW={{base:'100%', md:"4xl"}}
            mb={8}
            shadow='md'
            transition='all 0.25s ease-in-out'
            _hover={{shadow: 'xl'}}
            onClick={navigateToBlog}
            cursor='pointer'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '250px' }}
                src= {blog.cover ? blog.cover : 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'}
                alt='Caffe Latte'
            />
            <Stack>
                <CardHeader>
                    <Heading size='md'>{blog.title}</Heading>
                    <Box display='flex' alignItems='center' mt={4} color='gray.400'>
                        <Box mr={8}>
                            <TimeIcon/>
                            <Text verticalAlign='middle' display='inline-block' ml={2}>{formatDate(blog.createdAt)}</Text>
                        </Box>
                        <Box mr={8}>
                            <ChatIcon/>
                            <Text display='inline-block' ml={2}>{blog.comments.length}</Text>
                        </Box>
                        <Box>
                            <Avatar size='xs' name='Osama Siddiquee' src='https://bit.ly/dan-abramov'/>
                            <Text display='inline-block' ml={2}>{blog.author}</Text>
                        </Box>
                    </Box>
                    <Stack mt={3} direction='row'>
                            {
                                blog.tags.map(tag => (
                                    <Badge key={tag._id} px={2} colorScheme='teal'>{tag.name}</Badge>
                                ))
                            }
                    </Stack>
                </CardHeader>
                
                <CardBody mt={-5}>
                    <Text>{blog.snippet}</Text>
                </CardBody>

                    {/* <CardFooter>
                        <Button colorScheme='purple' onClick={navigateToBlog}>
                            Read More
                        </Button>
                    </CardFooter> */}
            </Stack>
        </Card>
    )
}
