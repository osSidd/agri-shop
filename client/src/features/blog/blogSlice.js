import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    blogs: [],
    blog: {}
}

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setAllBlogs(state, action){
            return {
                ...state,
                blogs: action.payload
            }
        },
        setABlog(state, action){
            return {
                ...state,
                blog: action.payload
            }
        }
    }
})

export const {setAllBlogs, setABlog} = blogSlice.actions
export default blogSlice.reducer

// export default function blogReducer(state=initialState, action){
//     switch(action.type){
//         case 'blogs/SET_ALL_BLOGS':
//             return {
//                 ...state,
//                 blogs: action.payload,
//             }
//         case 'blogs/SET_A_BLOG':
//             return {
//                 ...state,
//                 blog: action.payload,
//             }
//         case 'blogs/ADD_COMMENT':
//             return {
//                 ...state,
//                 blog: {...state.blog, comments: [...state.blog.comments, action.payload]}
//             }
//         case 'blogs/DELETE_COMMENT':
//             return {
//                 ...state,
//                 blog: {...state.blog, comments: state.blog.comments.filter(cmt => cmt._id !== action.payload)}
//             }
//         default:
//             return state
//     }
// }

export function loadBlogs(){
    return async function(dispatch){
    try{
        // const response = await fetch(`${import.meta.env.VITE_URL}/api/blogs`, {signal})
        const response = await fetch(`${import.meta.env.VITE_URL}/api/blogs`)

        // if(!signal.aborted){
            if(response.ok){
                const data = await response.json()
                dispatch(setAllBlogs(data))
            }
        // }
        else{
            console.error(`Http error! Status:${response.status}`)
        }                
    }catch(err){
        // if(!signal.aborted){
            console.log(err.message)
        // }
    }
}
}

export function fetchBlog(id){
    return async function (dispatch){
        try{
            // const response = await fetch(`${import.meta.env.VITE_URL}/api/blogs`, {signal})
            const response = await fetch(`${import.meta.env.VITE_URL}/api/blogs/${id}`)

            // if(!signal.aborted){
                if(response.ok){
                    const data = await response.json()
                    dispatch(setABlog(data))
                }
            // }
            else{
                console.error(`Http error! Status:${response.status}`)
            }                
        }catch(err){
            // if(!signal.aborted){
                console.log(err.message)
            // }
        }
    }
}