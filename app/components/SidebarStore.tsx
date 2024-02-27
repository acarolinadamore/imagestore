import React from 'react';
import '../admin/SidebarAdmin';
import Link from 'next/link';
import '../admin/SidebarAdmin.css';
import '../components/SidebarStore.css';

const SidebarStore = () => {
  return (
    <div className="menu-lateral-store  flex flex-col items-center">
      <h2 className="menu-title mb-8">Explore</h2>
      <nav>
        <ul className="ml-1">
          <li className="flex items-center">
            <a href="/pages/ver-produto" className="flex items-center">
              <img
                src="/assets/icons/icon-sapato.png"
                alt="Personalizáveis"
                width={25}
                className="mr-2"
              />
              <p>Tênis</p>
            </a>
          </li>
          <li>
            <a href="/pages/ver-produto" className="flex items-center">
              <img
                src="/assets/icons/icon-star.svg"
                alt="Personalizáveis"
                width={25}
                className="mr-2"
              />
              <p>Personalizáveis</p>
            </a>
          </li>
          <li>
            <a href="/pages/ver-produto" className="flex items-center">
              <img
                src="/assets/icons/icon-book.svg"
                alt="E-books"
                width={25}
                className="mr-2"
              />
              <p>E-books</p>
            </a>
          </li>
          <li>
            <a href="/pages/ver-produto" className="flex items-center">
              <img
                src="/assets/icons/icon-kit.svg"
                alt="Kits"
                width={25}
                className="mr-2"
              />
              <p>Kits</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarStore;
