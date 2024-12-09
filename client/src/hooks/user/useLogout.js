import useUserContext from "./useUserContext"

export default function useLogout(){
    
    const {dispatch} = useUserContext()
    
    async function logout(){
        try{
            const response = await fetch(`${import.meta.env.VITE_URL}/users/logout`, {
                credentials: 'include'
            })

            if(response.ok){
                dispatch({
                    type: 'USER_LOG_OUT',
                })
            }
        }catch(err){
            console.log(err.message)
        }
    }

    return {logout}
}