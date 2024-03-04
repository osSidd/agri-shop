// import './App.css'
import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const PasswordReset = lazy(() => import('./pages/passwordReset'))
const Login = lazy(() => import('./pages/login'))
const Signup = lazy(() => import('./pages/signup'))

function App() {

  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route index path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/reset-password" element={<PasswordReset/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
