/* import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { UserCard } from "./components/UserCard" */
import {Tarjeta} from './components/Tarjeta';

//App componente padre e hijo es USerCard

/* 
export const App = () => {
  return (
    <>
    <Header />
{/*     <UserCard name="Agnes" state="Alive" location="Panama"/>
    <UserCard name="Alice" state="Dead" location="Peru"/>
    <UserCard name="Pedro" state="Alive" location="Colombia"/>
    <Footer /> *//* }
    </>
  )
} */
export function App() {
  return (
    <div>
      <h1>Tarjeta de Presentación</h1>
      {/* Renderizamos el componente Tarjeta */}
      <Tarjeta />
    </div>
  );
}
export default App;
