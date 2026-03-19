import { useEffect, useState } from "react"
import { Notification } from "./components/Notification"
import { StatusMessage } from "./components/StatusMessage"
import { WelcomeMessage } from "./components/WelcomeMessage"


export const App = () => {

  const [estado, setEstado] = useState("loading")

  useEffect(() => {
    const timer = setTimeout( () =>{
      setEstado("success")
    }, 3000  )
  
    return () => clearTimeout(timer)
      
    
  }, [])
  

  return (
    <> 
    <WelcomeMessage isLoggedIn={true} />
    <Notification hayMensaje={true} />
    <StatusMessage status={estado} color="silver" />
    </>
  )
}
