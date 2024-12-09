import { useRef } from 'react'

import useTagContext from "./useTagContext"

export default function useTagForm(){

    const {tags, dispatch} = useTagContext()
    const tagRef = useRef()

    async function addTag(e){
        e.preventDefault()
        let tagVal = tagRef.current.value

        if(tags.find(item => item.name === tagVal)) return
        
        try{
            const response = await fetch(`${import.meta.env.VITE_URL}/api/tags`, {
                method: 'POST',
                credentials:'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({name: tagVal})
            })
            if(!response.ok) return 

            const data = await response.json()
            dispatch({
                type:'ADD_TAG',
                payload: data
            })
            tagRef.current.value = ''
        }catch(err){
            console.log(err.message)
        }   
    }

    async function deleteTag(id){
        console.log('hi')
        const response = await fetch(`${import.meta.env.VITE_URL}/api/tags/${id}`, {
            method: 'DELETE',
            credentials:'include'
        })

        if(response.ok){
            dispatch({
                type: 'DELETE_TAG',
                payload: id 
            })
        }
    }

    function editTag(e, id){
        dispatch({
            type: 'EDIT_TAG_VALUE',
            payload: {
                value: e.target.value,
                id,
            }
        })
    }

    async function updateTag(e, id){
        e.preventDefault()
        console.log(tags.find(item => item._id === id))
        const response = await fetch(`${import.meta.env.VITE_URL}/api/tags/${id}`, {
            method:'PUT',
            credentials: 'include',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(tags.find(item => item._id === id))
        })
        if(response.ok){
            toggleEdit(id)
        }
    }

    function toggleEdit(id){
        dispatch({
            type: 'EDIT_TAG',
            payload: id
        })
    }

    return{
        tags,
        tagRef,
        addTag,
        deleteTag,
        editTag,
        updateTag,
        toggleEdit,
    }
}