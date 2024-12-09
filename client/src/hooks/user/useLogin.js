import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useUserContext from "./useUserContext"

export default function useLogin(){
    
    const [formData, setFormData] = useState({email: '', password: ''})
    const {dispatch} = useUserContext()

    const navigate = useNavigate()
    
    function handleChange(e){
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    async function loginUser(e){
        e.preventDefault()
        
        try{
            const response = await fetch(`${import.meta.env.VITE_URL}/users/login`, {
                method: 'POST',
                credentials: 'include',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(formData),
            })
            const data = await response.json()

            if(response.ok){
                dispatch({
                    type: 'USER_LOG_IN',
                    payload: {
                        user: data.user,
                        avatar: data.avatar,
                        expiresAt: data.expiresAt
                    }
                })
                navigate('/')
            }
            else{
                console.log('error')
            }
        }catch(err){
            console.log(err.message)
        }
    }

    return {
        formData,
        handleChange,
        loginUser,
    }
}