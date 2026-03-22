
import {Game} from "./components/Game";

export const App = () => {
  return (
    <>
    <div style={{display: "flex",
    flexDirection: "column",
    justifyContent: "center",  // centra vertical
    alignItems: "center",      // centra horizontal
    height: "100vh",           // altura de la pantalla
    textAlign: "center"}}>
      <Game />
    </div>
    </>
  );
};

/* export default App; */