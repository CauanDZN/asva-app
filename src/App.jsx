// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Denuncia from './pages/Denuncia';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/denuncia" element={<Denuncia />} />
      </Routes>
    </Router>
  );
}

export default App;
