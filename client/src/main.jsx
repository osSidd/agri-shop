// import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import {ChakraProvider} from '@chakra-ui/react'
import BlogContextProvider from './context/blogContext.jsx'
import UserContextProvider from './context/userContext.jsx'
import TagContextProvider from './context/tagContext.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { loadBlogs } from './features/blog/blogSlice.js'

//initially load all blogs from the server
store.dispatch(loadBlogs())

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <UserContextProvider>
      <TagContextProvider>
        <BlogContextProvider>
          <ChakraProvider>
            <App/>
          </ChakraProvider>
        </BlogContextProvider>
      </TagContextProvider>
    </UserContextProvider>
  </Provider>
  // </React.StrictMode>,
)
