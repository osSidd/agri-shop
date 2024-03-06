// import './App.css'
import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Wrapper from "./pages/user/wrapper"

const Login = lazy(() => import('./pages/user/login'))
const Signup = lazy(() => import('./pages/user/signup'))
const PasswordReset = lazy(() => import('./pages/user/passwordReset'))

const Homepage = lazy(() => import('./pages/homepage/homepage'))

function App() {

  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path = '/' element={<Homepage/>}/>
        <Route path="/login" element={<Wrapper><Login/></Wrapper>}/>
        <Route path="/sign-up" element={<Wrapper><Signup/></Wrapper>}/>
        <Route path="/reset-password" element={<Wrapper><PasswordReset/></Wrapper>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
