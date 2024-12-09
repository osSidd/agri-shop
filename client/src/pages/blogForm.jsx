import { Link, useParams } from "react-router-dom";

import { Box, Button, FormControl, FormLabel, Heading, Input, Text, Textarea } from "@chakra-ui/react";

import BackToBlogsBtn from "../components/backBtn";

import useBlogForm from "../hooks/blogs/useBlogForm";
import { useDispatch } from "react-redux";

export default function BlogForm(){

    const params = useParams()
    const id = params.id

    const {formData, messageRef, tags, handleChange, handleSubmit, selectTags} = useBlogForm(id)
    const dispatch = useDispatch()
    return (
        <Box w={{base:'90%', md:'4xl'}} mx='auto'>
            <BackToBlogsBtn/>
            {/* <form style={{marginTop:'32px'}} onSubmit={handleSubmit}> */}
            <form style={{marginTop:'32px'}} onSubmit={dispatch({type: 'blogs/ADD_BLOG', payload: ''})}>
                <Heading as='h1' size='4xl'>Create a new blog</Heading>
                <FormControl mt={12}>
                    <FormLabel>Cover Image</FormLabel>
                    <Input
                        name="cover"
                        onChange={handleChange}
                        type="file"
                        outline='none'
                        border='none'
                    />
                </FormControl>
                <FormControl mt={12}>
                    <FormLabel>Title</FormLabel>
                    <Input 
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter blog title"
                        required
                        minLength="40"
                        maxLength="60"
                    />
                </FormControl>      
                <FormControl mt={8}>
                    <FormLabel>Snippet</FormLabel>
                    <Input
                        name="snippet"
                        value={formData.snippet}
                        onChange={handleChange} 
                        placeholder="Enter blog snippet"
                        required 
                    />
                </FormControl>
                <FormControl mt={8}>
                    <FormLabel>Tags</FormLabel>
                    
                    {
                        tags.map(tag => (<Button onClick={() => selectTags(tag._id)} colorScheme={tag.selected ? 'teal' : 'gray'} mr={2} my={2} key={tag._id}>{tag.name}</Button>))
                    }
                </FormControl>
                <Text my={6}><Link style={{fontWeight:700}} to='/tags/create'>click here</Link> to create, edit or delete a tag</Text>
                <FormControl mt={8}>
                    <FormLabel>Body</FormLabel>
                    <Textarea 
                        ref={messageRef} 
                        rows={8} 
                        resize='none' 
                        placeholder="Enter blog body"
                        required
                    />
                </FormControl>        
                <Button type="submit" colorScheme='teal' px={12} mt={8}>{ id ? 'Update Blog' : 'Add Blog'}</Button>    
            </form>  
        </Box>
    )
}