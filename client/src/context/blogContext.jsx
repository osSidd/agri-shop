import { createContext, useReducer } from "react";

export const BlogContext = createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_ALL_BLOGS':
            return {
                ...state,
                blogs: action.payload,
            }
        case 'SET_A_BLOG':
            return {
                ...state,
                blog: action.payload,
            }
        case 'ADD_COMMENT':
            return {
                ...state,
                blog: {...state.blog, comments: [...state.blog.comments, action.payload]}
            }
        case 'DELETE_COMMENT':
            return {
                ...state,
                blog: {...state.blog, comments: state.blog.comments.filter(cmt => cmt._id !== action.payload)}
            }
        default:
            return state
    }
}

export default function BlogContextProvider({children}){

    const [state, dispatch] = useReducer(reducer, {
        blogs:[],
        blog: {},
    })

    return(
        <BlogContext.Provider value={{state, dispatch}}>
            {children}
        </BlogContext.Provider>
    )
}