import React from 'react';
import '../admin/SidebarStore';
import Link from 'next/link';
import '../admin/SidebarStore.css';

const SidebarStore = () => {
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
        <button>Registre-se</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default SidebarStore;
