import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Home} from './pages/Home';
import {Citas} from './pages/Citas';
import {CitaDetalle} from './pages/CitaDetalle';
import {NotFound} from './pages/NotFound';
import { NavBar } from './components/NavBar';



export const App = () =>  {
  return (
    
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/cita/:id" element={<CitaDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </>
    
  );
}
