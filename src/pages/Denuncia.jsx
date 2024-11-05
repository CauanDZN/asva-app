// pages/Denuncia.js
import React, { useState } from 'react';

function Denuncia() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleDenuncia = (e) => {
    e.preventDefault();

    const novaDenuncia = { titulo, descricao, data: new Date().toLocaleString() };
    const denunciasSalvas = JSON.parse(localStorage.getItem('denuncias')) || [];
    localStorage.setItem('denuncias', JSON.stringify([...denunciasSalvas, novaDenuncia]));

    alert('Denúncia enviada com sucesso!');
    setTitulo('');
    setDescricao('');
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Fazer uma Denúncia</h2>
      <form onSubmit={handleDenuncia}>
        <label className="block text-sm font-medium text-gray-700 mb-2">Título da Denúncia</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Escreva um título breve"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          required
        />

        <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">Descrição</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descreva a situação detalhadamente"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          rows="4"
          required
        ></textarea>

        <button type="submit" className="w-full bg-red-600 text-white py-2 mt-6 rounded-lg shadow-lg hover:bg-red-700">
          Enviar Denúncia
        </button>
      </form>
    </div>
  );
}

export default Denuncia;
