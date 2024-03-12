import './App.css'
import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Wrapper from "./pages/user/wrapper"
import Navbar from "./components/navbar"
import { Container } from '@mui/material'

const Login = lazy(() => import('./pages/user/login'))
const Signup = lazy(() => import('./pages/user/signup'))
const PasswordReset = lazy(() => import('./pages/user/passwordReset'))

const Homepage = lazy(() => import('./pages/homepage/homepage'))
const ProductForm = lazy(() => import('./pages/farmer/productForm'))
const Cart = lazy(() => import('./pages/consumer/cart'))

function App() {

  return (
    <Container maxWidth='xl'>
    <BrowserRouter>
    <Navbar/>
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path = '/' element={<Homepage/>}/>
        <Route path = '/add-product' element={<ProductForm/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/login" element={<Wrapper><Login/></Wrapper>}/>
        <Route path="/sign-up" element={<Wrapper><Signup/></Wrapper>}/>
        <Route path="/reset-password" element={<Wrapper><PasswordReset/></Wrapper>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
    </Container>
  )
}

export default App
