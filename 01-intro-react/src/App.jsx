import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { UserCard } from "./components/UserCard"

//App componente padre e hijo es USerCard


export const App = () => {
  return (
    <>
    <Header />
    <UserCard name="Agnes" state="Alive" location="Panama"/>
    <UserCard name="Alice" state="Dead" location="Peru"/>
    <UserCard name="Pedro" state="Alive" location="Colombia"/>
    <Footer />
    </>
  )
}
