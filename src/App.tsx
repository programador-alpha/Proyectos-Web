import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Services from './services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;