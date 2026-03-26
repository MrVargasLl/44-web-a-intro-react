import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const Login = () => {

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    login(() => {
      navigate("/user/123")
    })
  }

  return (
  <>
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="User" />
      <input type="password" placeholder="Password" />
      <button type="submit">Ingresar</button>
    </form>
  </>
)}