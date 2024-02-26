import { ReactNode } from 'react';

interface ListarVendasLayoutProps {
  children: ReactNode;
}

export default function ListarVendasLayout({
  children,
}: ListarVendasLayoutProps) {
  return (
    <>
      <h1 className="bg-green-600">Menu do Listar Vendas</h1>
      {children}
    </>
  );
}
