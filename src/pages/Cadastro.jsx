// pages/Cadastro.js
import React, { useState } from 'react';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('usuario'); // usuário comum por padrão

  const handleCadastro = (e) => {
    e.preventDefault();

    // Estrutura de dados para salvar no localStorage
    const novoUsuario = { nome, email, senha, tipoUsuario };
    
    // Recupera cadastros existentes ou inicia um novo array
    const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];
    localStorage.setItem('usuarios', JSON.stringify([...usuariosSalvos, novoUsuario]));

    alert('Cadastro realizado com sucesso!');
    // Limpar formulário
    setNome('');
    setEmail('');
    setSenha('');
    setTipoUsuario('usuario');
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome completo"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          required
        />
        
        <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          required
        />
        
        <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          required
        />

        <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">Tipo de Usuário</label>
        <select
          value={tipoUsuario}
          onChange={(e) => setTipoUsuario(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
        >
          <option value="usuario">Usuário Comum</option>
          <option value="administrador">Administrador</option>
        </select>

        <button type="submit" className="w-full bg-indigo-600 text-white py-2 mt-6 rounded-lg shadow-lg hover:bg-indigo-700">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
