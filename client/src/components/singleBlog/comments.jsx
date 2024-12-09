import {Box, Avatar, Text} from '@chakra-ui/react'
import {DeleteIcon, EditIcon, StarIcon} from '@chakra-ui/icons'

import formatDate from '../../utils/formatDate'
import useCommentForm from '../../hooks/comments/useCommentForm'

export default function Comments({user, avatar, blogId, comments}){

    const {deleteComment} = useCommentForm()

    return (
        <Box mt={16}>
            {
                comments.map(comment => (
                    <Box mt={6} key={comment._id}>
                        <Box display='flex' alignItems='center'>
                            <Avatar mr={4} size='xs' name='Osama Siddiquee' src={comment.avatar}/>
                            <Text mr={4}>{comment.author}</Text>
                            <Text fontSize='xs'>{formatDate(comment.createdAt)}</Text>
                        </Box>
                        <Box ml={12} mt={4} fontSize='xl'>{comment.body}</Box>
                        <Box ml={12} mt={4} display='flex' alignItems='center'>
                            <Box mr={2} color='yellow.500' cursor='pointer'><i className='fa fa-thumbs-up'></i></Box>
                            <Text mr={4}>{comment.likes}</Text>
                            <Box mr={8} color='blue.500' cursor='pointer'><i className='fa fa-reply'></i></Box>
                            {user === comment.author && <DeleteIcon color='red.300' mr={2} cursor='pointer' onClick={() => deleteComment(blogId, comment._id)}/>}
                            {user === comment.author && <EditIcon color='blue.300' cursor='pointer'/>}
                        </Box>
                    </Box>
                ))
            }
        </Box>
    )
}