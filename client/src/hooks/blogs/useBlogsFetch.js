import {useEffect} from 'react' 
import useBlogContext from './useBlogContext'

export default function useBlogsFetch(){

    const {state, dispatch} = useBlogContext()

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        async function fetchBlogs(){
            try{
                const response = await fetch(`${import.meta.env.VITE_URL}/api/blogs`, {signal})

                if(!signal.aborted){
                    if(response.ok){
                        const data = await response.json()
                        console.log(data)
                        dispatch({
                            type: 'SET_ALL_BLOGS',
                            payload: data
                        })
                    }
                }else{
                    console.error(`Http error! Status:${response.status}`)
                }                
            }catch(err){
                if(!signal.aborted){
                    console.log(err.message)
                }
            }
        }

        fetchBlogs()
        
        return () => {
            abortController.abort();
        }
    }, [])

    return {blogs: state.blogs}
}