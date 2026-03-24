import { useEffect, useRef } from "react";

export const UseRefFocus = () => {
const inputRef = useRef(null)
useEffect(() => {
inputRef.current.focus()
}, [])

return (
  <>
    <form>
      <input type="text" placeholder="Escribe aquí" />
      <input type="email" ref={inputRef} placeholder="Email" />
      <input type="password" placeholder="password" />
    </form>
  </>
  )
}