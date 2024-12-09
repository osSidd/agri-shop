import { useContext } from "react";
import { BlogContext } from "../../context/blogContext";

export default function useBlogContext(){
    
    const {state,dispatch} = useContext(BlogContext);

    return {state, dispatch}
}
