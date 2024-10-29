// pages/Cadastro.js
import React from 'react';

function Cadastro() {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Cadastro</h2>
      <form>
        <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
        <input
          type="text"
          placeholder="Digite seu nome completo"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
        />
        
        <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
        />
        
        <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
        />

        <button type="submit" className="w-full bg-indigo-600 text-white py-2 mt-6 rounded-lg shadow-lg hover:bg-indigo-700">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
