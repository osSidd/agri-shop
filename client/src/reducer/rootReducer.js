import { combineReducers } from "redux"
import blogReducer from "../features/blog/blogSlice"
import tagReducer from "../features/tag/tagSlice"
import userReducer from "../features/user/userSlice"

// const initialState = {
//     blogs:{
//         blogs: [],
//         blog: {}
//     },
//     tags:[],
//     user: {}
// }

// const rootReducer = (state=initialState, action) => {
//     return {
//         blogs: blogReducer(state.blogs, action),
//         tags: tagReducer(state.tags, action),
//         user: userReducer(state.user, action)
//     }
// }

const rootReducer = combineReducers({
    blogs: blogReducer,
    tags: tagReducer,
    user: userReducer,
})

export default rootReducer