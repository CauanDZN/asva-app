// pages/Home.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // Verifica o tipo de usuário no localStorage
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const adminLogado = usuarios.some(user => user.tipoUsuario === 'administrador');

  return (
    <div className="p-6 bg-blue-100 h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">ASVA - Bem Estar Feminino</h1>
      <p className="text-lg text-gray-700 mb-6">
        Um espaço seguro para suporte a vítimas de violência e abusos no âmbito escolar.
      </p>
      
      {!adminLogado ? (
        <>
          <Link to="/cadastro" className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg mb-4">
            Fazer Cadastro
          </Link>
          <Link to="/denuncia" className="text-indigo-600 underline">
            Fazer uma denúncia
          </Link>
        </>
      ) : (
        <Link to="/gerenciar-denuncias" className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg">
          Gerenciar Denúncias
        </Link>
      )}
    </div>
  );
}

export default Home;
