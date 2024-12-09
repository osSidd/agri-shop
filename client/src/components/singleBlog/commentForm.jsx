import { Button, FormControl, Textarea } from "@chakra-ui/react";
import useCommentForm from "../../hooks/comments/useCommentForm";

export default function CommentForm({id}){

    const {commentRef, addComment} = useCommentForm(id)
   
    return (
        <form onSubmit={addComment}>
            <FormControl>
                <Textarea placeholder="Add to discussion" ref={commentRef} w='lg' resize='none' rows={4}></Textarea>
            </FormControl>
            <Button mt={4} type="submit">Post comment</Button>
        </form>
    )
}