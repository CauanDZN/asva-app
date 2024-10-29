// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-6 bg-blue-100 h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">ASVA - Bem Estar Feminino</h1>
      <p className="text-lg text-gray-700 mb-6">
        Um espaço seguro para suporte a vítimas de violência e abusos no âmbito escolar.
      </p>
      <Link to="/cadastro" className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg mb-4">
        Fazer Cadastro
      </Link>
      <Link to="/denuncia" className="text-indigo-600 underline">
        Fazer uma denúncia
      </Link>
    </div>
  );
}

export default Home;
