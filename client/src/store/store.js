// import {applyMiddleware, createStore} from 'redux'
// import rootReducer from '../reducer/rootReducer'
// // import {thunkMiddleware} from 'redux-thunk'

// const thunkMiddleware = storeApi => next => action => {
//     if(typeof action === 'function')
//         return action(storeApi.dispatch, storeApi.getState)
//     return next(action)
// }

// const composedEnhancer = applyMiddleware(thunkMiddleware)

// const store = createStore(rootReducer, composedEnhancer)
import {configureStore} from '@reduxjs/toolkit'

import blogReducer from '../features/blog/blogSlice'
import tagReducer from '../features/tag/tagSlice'
import userReducer from '../features/user/userSlice'

const store = configureStore({
    reducer : {
        blogs: blogReducer,
        tags: tagReducer,
        user: userReducer,
    }
})

export default store