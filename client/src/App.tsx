// import './App.css'
import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Wrapper from "./pages/wrapper"
const PasswordReset = lazy(() => import('./pages/passwordReset'))
const Login = lazy(() => import('./pages/login'))
const Signup = lazy(() => import('./pages/signup'))

function App() {

  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route index path="/login" element={<Wrapper><Login/></Wrapper>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/reset-password" element={<Wrapper><PasswordReset/></Wrapper>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
