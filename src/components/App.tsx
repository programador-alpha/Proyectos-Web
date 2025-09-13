import Home from './home';
import Services from '../components/services';
import About from "../components/About";

//Aqui se manejan las paginas las cuales se renderizan en una sola
function App() {
  return (
    <>
{//NOTA: YA SABE EDWAR, ORGANIZE LOS COMPONENTES SEGUN EL ORDEN
}
   <Home />
   <About />
  <Services />
  
  </>
  );
}

export default App;