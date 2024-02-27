import { ReactNode } from 'react';
import HeaderAdmin from '@/app/admin/HeaderAdmin';
import SidebarAdmin from '@/app/admin/SidebarAdmin';
import PerfilForm from '@/app/admin/PerfilForm';

interface CadastrarProdutosLayoutProps {
  children: ReactNode;
}

export default function CadastrarProdutosLayout({
  children,
}: CadastrarProdutosLayoutProps) {
  return (
    <>
      <div>
        <HeaderAdmin />
        <section className="admin-main-container flex flex-row">
          <div className="width-30">
            <SidebarAdmin />
          </div>
          <div className="admin-container">
            <div className="admin-menu">
              <div className="admin-menu-title-container">
                <h2 className="admin-menu-title flex">
                  <img
                    src="/assets/icons/icon-mais.svg"
                    alt="Cadastrar"
                    width={25}
                    className="mr-3"
                  />
                  <p>Cadastrar Produto</p>
                </h2>
              </div>
              <div className="width-100">
                {children}
                <div className="btn-container-left">
                  <button className="btn-pink ">Salvar</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
