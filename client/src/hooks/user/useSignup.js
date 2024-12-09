import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function useSignup(){

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        avatar: '',
        name:'',
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
    })

    function handleChange(e){
        const {name, value, files} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: name === 'avatar' ? files[0] : value,
        }))
    }

    async function signupUser(e){
        e.preventDefault()

        const data = new FormData()
        for(let key in formData){
            data.append(key, formData[key])
        }

        try{
            const response = await fetch(`${import.meta.env.VITE_URL}/users/signup`, {
                method: 'POST',
                // headers:{
                //     'Content-Type': 'multipart/form-data',
                // },
                body: data,
            })
            if(response.ok){
                const data = await  response.json()
                console.log(data)
                navigate('/')
            }
        }catch(err){
            console.log(err.message)
        }
    }

    return {
        formData,
        handleChange,
        signupUser,
    }
}