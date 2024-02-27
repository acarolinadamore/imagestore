import { ReactNode } from 'react';

interface ListarProdutosLayoutProps {
  children: ReactNode;
}

export default function ListarProdutosLayout({
  children,
}: ListarProdutosLayoutProps) {
  return (
    <>
      <h1 className="bg-green-600">Menu do Listar Produtos</h1>
      {children}
    </>
  );
}
