import { ReactNode } from 'react';
import SidebarAdmin from '@/app/admin/SidebarAdmin';
import HeaderAdmin from '@/app/admin/HeaderAdmin';

interface ListarVendasLayoutProps {
  children: ReactNode;
}

export default function ListarVendasLayout({
  children,
}: ListarVendasLayoutProps) {
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
                    src="/assets/icons/icon-finance.svg"
                    alt="Cadastrar"
                    width={25}
                    className="mr-3"
                  />
                  <p>Listar Vendas</p>
                </h2>
              </div>
              <div className="width-100">{children}</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
