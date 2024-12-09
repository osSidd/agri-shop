import { useNavigate } from "react-router-dom"
import { Button } from "@chakra-ui/react"
import { ArrowLeftIcon } from "@chakra-ui/icons"

export default function BackToBlogsBtn(){

    const navigate = useNavigate()

    function navigateTo(){
        navigate('/')
    }

    return (
        <Button 
            leftIcon={<ArrowLeftIcon boxSize={3}/>} 
            onClick={navigateTo} 
            textTransform='capitalize' 
            colorScheme='purple'
            size={{base:'xs', md:'sm'}}
            mt={{base:'10', md:'12'}}
            mb={{base:'8', md:'0'}}
            ml={{base:'12', md:'0'}}
        >
            blogs
        </Button>
    )
}