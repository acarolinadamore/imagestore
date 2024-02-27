import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import SidebarAdmin from './SidebarAdmin';
import PerfilForm from '../admin/PerfilForm';

const Layout = () => {
  return (
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
                  src="/assets/icons/icon-profile-azul.svg"
                  alt="Painel"
                  width={25}
                  className="mr-3"
                />
                Perfil
              </h2>
            </div>
            <div className="width-100">
              <PerfilForm />
              <div className="btn-container-left">
                <button className="btn-pink ">Salvar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
