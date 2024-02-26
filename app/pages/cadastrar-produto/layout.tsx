import { ReactNode } from 'react';

interface CadastrarProdutosLayoutProps {
  children: ReactNode;
}

export default function CadastrarProdutosLayout({
  children,
}: CadastrarProdutosLayoutProps) {
  return (
    <>
      <h1 className="bg-green-600">Menu do Cadastrar Produtos</h1>
      {children}
    </>
  );
}
