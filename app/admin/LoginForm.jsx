import React from 'react';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <div className="w-full max-w-lg bg-white border border-gray-300 shadow-md rounded-lg px-8 pt-6 mt-2 flex flex-col justify-center items-center">
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nomeCompleto"
        >
          Nome Completo
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nomeCompleto"
          type="text"
          placeholder="Digite seu nome completo"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Digite seu email"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="senha"
        >
          Senha
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="senha"
          type="password"
          placeholder="Digite sua senha"
        />
      </div>
      <div className="mb-5">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="senha"
        >
          Confirmar Senha
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="senha"
          type="password"
          placeholder="Digite sua senha"
        />
      </div>
      <Link href="/admin">
        <button className="btn-pink btn-cadastrar mt-2">Cadastrar</button>
      </Link>
    </div>
  );
};

export default LoginForm;
