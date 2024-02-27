import React from 'react';
import '../admin/SidebarAdmin';
import Link from 'next/link';
import '../admin/SidebarAdmin.css';

const SidebarAdmin = () => {
  return (
    <div className="">
      <div className="menu-lateral flex flex-col items-center ml-0 teste">
        <h2 className="menu-title mb-8 ml-5 mt-0"> </h2>
        <nav>
          <ul className="ml-1">
            <p className="mb-8">Boas vindas, Mel</p>
            <li>
              <Link href="/admin" className="flex">
                <img
                  src="/assets/icons/icon-profile-azul.svg"
                  alt="Perfil"
                  width={22}
                  className="mr-2"
                />
                <p>Perfil</p>
              </Link>
            </li>
            <li>
              <Link href="/admin/cadastrar-produto" className="flex">
                <img
                  src="/assets/icons/icon-mais.svg"
                  alt="Cadastrar Produtos"
                  width={22}
                  className="mr-2"
                />
                <p>Cadastrar Produtos</p>
              </Link>
            </li>
            <li>
              <Link href="/admin/listar-produtos" className="flex">
                <img
                  src="/assets/icons/icon-list-product.svg"
                  alt="Listar Produtos"
                  width={22}
                  className="mr-2"
                />
                <p>Listar Produtos</p>
              </Link>
            </li>
            <li>
              <Link href="/admin/listar-produtos" className="flex">
                <img
                  src="/assets/icons/icon-finance.svg"
                  alt="Listar Vendas"
                  width={22}
                  className="mr-2"
                />
                <p>Listar Vendas</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarAdmin;
