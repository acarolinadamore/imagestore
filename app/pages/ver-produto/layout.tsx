import React from 'react';
import Header from '@/app/components/Header';
import SidebarStore from '@/app/components/SidebarStore';
import Link from 'next/link';

export default function VerProduto() {
  return (
    <>
      <div>
        <Header />
        <section className="main-container flex flex-row">
          <SidebarStore />
          <div className="container-menu">
            <div className="menu-produto pl-10">
              <div className="admin-menu-title-container">
                <h2 className="admin-menu-title flex">
                  <p>Ver Produto</p>
                </h2>
              </div>
              <p>Tela em construção, desculpe o transtorno!</p>
              <Link href="/">
                <span className="text-pink-400 border-b border-pink-400">
                  Voltar para o Início
                </span>
              </Link>
              <div className="width-100 mt-3">
                <div className="btn-container-left gap-5">
                  <button className="btn-pink ">Salvar nos favoritos</button>
                  <button className="btn-pink ">Adicionar ao carrinho</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
