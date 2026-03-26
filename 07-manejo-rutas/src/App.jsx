
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { NavBar } from './components/Navbar'
import { NotFound } from './pages/NotFound'
import { UserProfile } from './pages/UserProfile'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthProvider, useAuth } from './context/AuthContext'

export const App = () => {

  //const isAuthenticated = false
  const { isAuthenticated } = useAuth()
  return (
    <>
    
    <small>Manejo de rutas</small>

    <NavBar />
    {/* <h1>Manejo de rutas</h1>
    <small></small> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/user/:id" element={<UserProfile />} />
      <Route path="/dashboard" element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <h1>Dashboard privado</h1>
        </ProtectedRoute>
} />
      <Route path="*" element={<NotFound />} />
      {/* alt + shift*/}

    </Routes>
    
    </>
  )
}
