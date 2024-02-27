import React from 'react';

const page = () => {
  return (
    <div className="w-full max-w-lg bg-white border border-gray-300 shadow-md rounded-lg px-8 pt-6 mb-4 mt-2 pb-0">
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nomeCompleto"
        >
          Nome do Produto
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nomeCompleto"
          type="text"
          placeholder="Digite o nome do produto"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="descricaoProduto"
        >
          Descrição
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="preco"
          type="text"
          placeholder="Digite a descrição"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="preco"
        >
          Preço
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Digite o preço"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="qtd"
        >
          Qtd
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cpf"
          type="text"
          placeholder="Digite a quantidade"
        />
      </div>
      <div className="mb-6 relative">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="status"
        >
          Status
        </label>
        <select
          className="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="status"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Selecione
          </option>
          <option value="ativo" className="text-gray-700">
            Ativo
          </option>{' '}
          <option value="inativo" className="text-gray-700">
            Inativo
          </option>{' '}
          <option value="pendente" className="text-gray-700">
            Pendente
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
          htmlFor="status"
        >
          Status
        </label>
        <select
          className="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="status"
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
          htmlFor="status"
        >
          Cidade
        </label>
        <select
          className="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="status"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Cidade
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
      <div className="mb-1">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="pais"
        >
          Upload de fotos do produto
        </label>
        <button className="btn-pink mt-2">Upload</button>
      </div>
    </div>
  );
};

export default page;
