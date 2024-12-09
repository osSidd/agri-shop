import { useContext } from "react"
import { TagContext } from "../../context/tagContext"

export default function useTagContext(){
    
    const {tags, dispatch} = useContext(TagContext)
    
    return {tags, dispatch}
}