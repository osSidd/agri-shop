import { createContext, useReducer } from "react";

export const TagContext = createContext()

function reducer(state, action){
    switch(action.type){
        case 'ADD_TAG':
            return {
                tags: [...state.tags, action.payload]
            }
        case 'SET_ALL_TAGS':
            return {
                tags: action.payload.map(tag => ({...tag, edit: false, selected: false}))
            }
        case 'EDIT_TAG':
            return {
                tags: state.tags.map(tag => ({
                    ...tag, 
                    edit: tag._id === action.payload ? !tag.edit : tag.edit
                }))
            }
        case 'DELETE_TAG':
            return {
                tags: state.tags.filter(item => item._id !== action.payload)
            }
        case 'EDIT_TAG_VALUE':
            return {
                tags: state.tags.map(item => ({
                    ...item,
                    name: item._id === action.payload.id ? action.payload.value : item.name,
                }))
            }
        case 'UPDATE_TAG':
            return {
                tags: state.tags.map(item => {
                    return item._id === action.payload.id ? action.payload.data : item
                })
            }
        case 'SELECT_A_TAG':
            return {
                tags: state.tags.map(item => ({
                    ...item,
                    selected: item._id === action.payload ? !item.selected : item.selected
                }))
            }            
        default:
            return state
    }
}

export default function TagContextProvider({children}){

    const [state, dispatch] = useReducer(reducer, {
        tags: []
    })

    return(
        <TagContext.Provider value={{...state, dispatch}}>
            {children}
        </TagContext.Provider>
    )
}