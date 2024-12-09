import { Box, Text, Button, FormControl, FormLabel, Heading, Input} from '@chakra-ui/react'
import {EditIcon, DeleteIcon} from '@chakra-ui/icons'
import useTagForm from '../hooks/tags/useTagForm'

export default function TagForm(){

    const {tags, tagRef, addTag, deleteTag, updateTag, editTag, toggleEdit} = useTagForm()

    return(
        <Box w='75%' mt={16} mx='auto'>
        <form onSubmit={addTag}>
            <Heading  as='h2' fontSize='3xl'>Create a tag</Heading>
            <FormControl mt={8}>
                <FormLabel>
                    Enter tag name <span aria-label='required'>*</span> :
                </FormLabel>
                <Input ref={tagRef} mt={4} type='text' placeholder='tag name'/>
            </FormControl>
            <Button type='submit' mt={8}>Add tag</Button>
        </form>
        <Heading mt={16} as='h2' fontSize='2xl'>Available tags:</Heading>
        <Box display='flex' flexWrap='wrap' justifyContent='center' mt={8}>
            {
                tags.map(tag => (
                    <Box key={tag._id} my={4} display='flex' alignItems='center' m={4}>
                        { !tag.edit && <Text textTransform='uppercase' fontWeight={500} fontSize='xl' mr={4}>{tag.name}</Text> }
                        {
                            tag.edit ? 
                            
                            <form onSubmit={e => updateTag(e, tag._id)}>
                                <FormControl>
                                    <Input defaultValue={tag.name} onChange={e => editTag(e, tag._id)}/>
                                </FormControl>
                                <Button type='submit'>Update</Button>
                            </form> : 
                            <EditIcon onClick={() => toggleEdit(tag._id)} cursor='pointer' mr={4} color='blue.300'/> 
                        }
                        
                        <DeleteIcon onClick={() => deleteTag(tag._id)} cursor='pointer' color='red.200'/>
                    </Box>
                ))
            }
        </Box>
        </Box>
    )
}