import { useEffect, useState } from "react"
import { WelcomeMessage } from "../components/WelcomeMessage"
import { Notification } from "../components/Notification"
import { StatusMessage } from "../components/StatusMessage"


export const ConditionalRendering = () => {
  const [estado, setEstado] = useState("loading")

  useEffect(() => {
    const timer = setTimeout(() => {
      setEstado("success")
    }, 3000)

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
//Dar pista con una modal en proyecto
