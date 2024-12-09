import { createContext, useReducer } from "react"

export const UserContext = createContext() 

function reducer(state, action){

    // setTimeout(() => {
    //     sessionStorage.clear('user')
    // }, action.payload.expiresAt*1000)

    switch(action.type){
        case 'USER_LOG_IN':
            sessionStorage.setItem('user', action.payload.user)
            return {
                user: action.payload.user,
                avatar: action.payload.avatar,
            }
        case 'USER_LOG_OUT':
            sessionStorage.clear('user')
            return {
                user: '',
                avatar: '',
            }
        default:
            return state
    }
}

export default function UserContextProvider({children}){

    const [state, dispatch] = useReducer(reducer, {
        user: sessionStorage.getItem('user'),
        avatar: '',
    })

    return (
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}