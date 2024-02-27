import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './Header.css';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="header-top-container flex flex-row items-center bg-white">
      <a href="/">
        <img
          src="/assets/icons/logo-rosa.svg"
          alt="Logo"
          width={170}
          height={100}
        />
      </a>

      <div className="search relative">
        <input
          className="search-input border-gray-200 border p-2 px-4 rounded-lg pl-10"
          type="text"
          placeholder="Pesquise produtos, marcas, inspirações..."
        />
        <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div>
        <a href="/" className="flex items-center">
          <img
            src="/assets/icons/icon-carrinho.svg"
            alt="Carrinho"
            width={25}
            className="mr-2"
          />
          <p>Carrinho</p>
        </a>
      </div>
      <div className="header-client-area">
        <Link href="/pages/login">
          <span>Registre-se</span>
        </Link>
        <Link href="/admin">
          <p>Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
