import { ReactNode } from 'react';

interface VerProdutoLayoutProps {
  children: ReactNode;
}

export default function VerProdutoLayout({ children }: VerProdutoLayoutProps) {
  return (
    <>
      <h1 className="bg-green-600">Menu do Ver Produto</h1>
      {children}
    </>
  );
}
