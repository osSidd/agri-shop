import { useToast } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"

export default function useNewsLetter(){

    const subscriberRef = useRef()
    const toast = useToast()

    let [status, setStatus] = useState(false)

    async function addSubscriber(e){
        e.preventDefault()
        try{
            const response = await fetch(`${import.meta.env.VITE_URL}/api/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email : subscriberRef.current.value})
            })

            if(response.ok){
                console.log('subscribed')
                setStatus(true)
                subscriberRef.current.value = ''
            }
        }catch(err){
            console.log(err.message)
            setStatus(false)
        }
    }

    function showToast(){
        toast({
            title: 'Subscribed',
            description: 'Thankyou for subscribing',
            isClosable:true,
            duration: 3000,
            status: 'success',
        })
        setStatus(false)
    }

    useEffect(() => {
        if(status) showToast()
    }, [status])

    return {
        subscriberRef,
        addSubscriber,
    }
}