import React from 'react';

const PerfilForm = () => {
  return (
    <div className="w-full max-w-lg bg-white border border-gray-300 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 mt-2">
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
          htmlFor="cpf"
        >
          CPF
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cpf"
          type="text"
          placeholder="Digite seu CPF"
        />
      </div>
      <div className="mb-6 relative">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="pais"
        >
          País
        </label>
        <select
          className="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="pais"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Selecione
          </option>
          <option value="ativo" className="text-gray-700">
            Brasil
          </option>{' '}
          <option value="inativo" className="text-gray-700">
            Outro país
          </option>{' '}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 pt-8 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="pais"
        >
          CEP
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="pais"
          type="text"
          placeholder="Digite seu CEP"
        />
      </div>
      <div className="mb-6 relative">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="cep"
        >
          UF
        </label>
        <select
          className="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="uf"
          defaultValue=""
        >
          <option value="" disabled hidden>
            UF
          </option>
          <option value="ativo" className="text-gray-700">
            MS
          </option>{' '}
          <option value="inativo" className="text-gray-700">
            SP
          </option>{' '}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 pt-8 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <div className="mb-6 relative">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="cidade"
        >
          Cidade
        </label>
        <select
          className="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="cidade"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Selecione
          </option>
          <option value="ativo" className="text-gray-700">
            Campo Grande
          </option>{' '}
          <option value="inativo" className="text-gray-700">
            Outra cidade
          </option>{' '}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 pt-8 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="endereco"
        >
          Endereço
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="endereco"
          type="text"
          placeholder="Digite seu endereço"
        />
      </div>
    </div>
  );
};

export default PerfilForm;
