import { useContext } from "react";
import {UserContext} from '../../context/userContext'

export default function useUserContext(){
    const {user, avatar, dispatch} = useContext(UserContext)
    
    return {user, avatar, dispatch}    
}