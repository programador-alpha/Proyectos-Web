import Home from './home';
import Services from '../components/services';
import About from "../components/About";
import InfoPage from './Contact';

//Aqui se manejan las paginas las cuales se renderizan en una sola
function App() {
  return (
    <>
{//NOTA: YA SABE EDWAR, ORGANIZE LOS COMPONENTES SEGUN EL ORDEN
}
   <Home />
   <About />
  <Services />
  <InfoPage />
  </>
  );
}

export default App;