// pages/GerenciarDenuncias.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GerenciarDenuncias() {
  const [denuncias, setDenuncias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const adminLogado = usuarios.some(user => user.tipoUsuario === 'administrador');

    if (!adminLogado) {
      alert("Acesso negado. Apenas administradores podem acessar esta página.");
      navigate('/');
      return;
    }

    const denunciasSalvas = JSON.parse(localStorage.getItem('denuncias')) || [];
    setDenuncias(denunciasSalvas);
  }, [navigate]);

  const handleExcluir = (index) => {
    const novasDenuncias = [...denuncias];
    novasDenuncias.splice(index, 1);
    setDenuncias(novasDenuncias);
    localStorage.setItem('denuncias', JSON.stringify(novasDenuncias));
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Gerenciar Denúncias</h2>
      {denuncias.length === 0 ? (
        <p className="text-gray-700">Nenhuma denúncia encontrada.</p>
      ) : (
        <ul>
          {denuncias.map((denuncia, index) => (
            <li key={index} className="border-b border-gray-300 py-4">
              <h3 className="font-bold text-lg">{denuncia.titulo}</h3>
              <p className="text-gray-700">{denuncia.descricao}</p>
              <p className="text-sm text-gray-500">Enviada em: {denuncia.data}</p>
              <button
                onClick={() => handleExcluir(index)}
                className="mt-2 text-red-600 hover:underline"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GerenciarDenuncias;
