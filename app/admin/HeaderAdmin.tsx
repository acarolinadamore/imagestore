import React from 'react';
import '../admin/HeaderAdmin';
import Link from 'next/link';
import '../admin/HeaderAdmin.css';

const HeaderAdmin = () => {
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
      <div className="header-midle-container"></div>
      <div className="header-client-area">
        <Link href="/pages/login">
          <p>Login</p>
        </Link>
        <Link href="../">
          <p>Sair</p>
        </Link>
      </div>
    </div>
  );
};

export default HeaderAdmin;
