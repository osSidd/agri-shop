import { useRef } from "react";
import useUserContext from "../user/useUserContext";
import useBlogContext from "../blogs/useBlogContext";

export default function useCommentForm(id){
    
    const commentRef = useRef()
    const {user, avatar} = useUserContext()
    const {dispatch} = useBlogContext()

    async function addComment(e){
        e.preventDefault()
        try{
            const response = await fetch(`${import.meta.env.VITE_URL}/api/comments/${id}`, {
                method:'POST',
                credentials:'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({body: commentRef.current.value, author: user, avatar, blog: id})
            })

            if(response.ok){
                const data = await response.json()
                dispatch({
                    type: 'ADD_COMMENT',
                    payload: data,
                })
                commentRef.current.value = ''
            }
        }catch(err){
            console.log(err.message)
        }
    }

    async function deleteComment(blogId, commentId){
        try{
            const response = await fetch(`${import.meta.env.VITE_URL}/api/comments/${blogId}/${commentId}`,{
                method:'DELETE',
                credentials:'include'
            })

            if(response.ok){
                const data = await response.json()
                dispatch({
                    type: 'DELETE_COMMENT',
                    payload: data._id
                })
            }
        }catch(err){
            console.log(err.message)
        }
    }

    return {
        commentRef,
        addComment,
        deleteComment,
    }
}