import RootLayout from '../app/layout';
import Header from '../app/components/Header';
import '../app/components/Header.css';
import Link from 'next/link';

export default function Home() {
  return (
    <RootLayout>
      <Header />
      <section className="main-container">
        <div className="menu-lateral flex flex-col items-center ml-5">
          <h2 className="menu-title mb-8">Explore</h2>
          <nav>
            <ul className="ml-1">
              <li>
                <Link href="/pages/listar-produtos" className="flex">
                  <img
                    src="/assets/icon-sapato.png"
                    alt="Personalizáveis"
                    width={25}
                    className="mr-2"
                  />
                  <p>Tênis</p>
                </Link>
              </li>
              <li>
                <Link href="/pages/listar-produtos" className="flex">
                  <img
                    src="/assets/icon-star.svg"
                    alt="Personalizáveis"
                    width={25}
                    className="mr-2"
                  />
                  <p>Personalizáveis</p>
                </Link>
              </li>
              <li>
                <Link href="/pages/listar-produtos" className="flex">
                  <img
                    src="/assets/icon-book.svg"
                    alt="Personalizáveis"
                    width={25}
                    className="mr-2"
                  />
                  <p>E-books</p>
                </Link>
              </li>
              <li>
                <Link href="/pages/listar-produtos" className="flex">
                  <img
                    src="/assets/icon-kit.svg"
                    alt="Personalizáveis"
                    width={25}
                    className="mr-2"
                  />
                  <p>Kits</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <section className="produtos-container">
          <div className="produtos-menu">
            <div className="produtos-menu-title-container">
              <h2 className="produtos-menu-title flex">
                <img
                  src="/assets/icon-star.svg"
                  alt="Personalizáveis"
                  width={25}
                  className="mr-3"
                />
                <h2>Novidades</h2>
              </h2>
            </div>
            <div className="produtos-menu-acoes">
              <div>Select</div>
              <div>Order</div>
              <div>Filter</div>
            </div>
          </div>
          <div className="all-products">
            <div className="produtos-container-cima">
              <div className="destaques-esquerda">
                <div className="produto-1">
                  <img
                    src="/assets/kit3.jpg"
                    alt="Imagem 1"
                    className="imagem-produto-1"
                  />
                </div>
                <div className="produto-2">
                  <img
                    src="/assets/kit2.jpg"
                    alt="Imagem 2"
                    className="imagem-produto-2"
                  />
                </div>
              </div>
              <div className="destaques-direita">
                <div className="produto-3">
                  <div className="imagem-container">
                    <img
                      src="/assets/tenis-destque1.jpg"
                      alt="Imagem 2"
                      className="imagem-produto-2"
                    />
                  </div>
                </div>
                <div className="produto-4">
                  <div className="imagem-container">
                    <img
                      src="/assets/tenis-destque3.jpg"
                      alt="Imagem 2"
                      className="imagem-produto-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="produtos-container-baixo">
              <div className="destaques-direita">
                <div className="produto-item">Retângulo 1</div>
                <div className="produto-item">Retângulo 2</div>
              </div>
              <div className="destaques-direita">
                <div className="produto-item">Retângulo 3</div>
                <div className="produto-item">Retângulo 4</div>
              </div>
              <div className="destaques-direita">
                <div className="produto-item">Retângulo 3</div>
                <div className="produto-item">Retângulo 4</div>
              </div>
            </div>
            <div className="btn-container">
              <button className="btn-blue">Ver todos</button>
            </div>
          </div>
        </section>
      </section>
      <section className="inscrever-container">
        <h2 className="mb-3">
          Inscreva-se para receber novidades e cupons de desconto
        </h2>
        <div className="inscrever-form">
          <input
            type="email"
            id="emailInput"
            className="email-input inscrever-form email-input-style"
            placeholder="Digite seu e-mail"
          />

          <button className="btn-white">Inscrever</button>

          <div id="mensagem"></div>
        </div>
      </section>
      <footer>
        <div className="footer-container">
          <div className="footer-logo-container">
            <a href="/">
              <img
                src="/assets/logo-branca.svg"
                alt="Logo"
                width={140}
                height={100}
              />
            </a>
          </div>
          <div className="footer-links">
            <ul>
              <li className="footer-titulo">
                <strong>Explore</strong>
              </li>
              <li>
                <Link href="/pages/listar-produtos">Tênis</Link>
              </li>
              <li>
                <Link href="/pages/listar-produtos">Personalizáveis</Link>
              </li>
              <li>
                <Link href="/pages/listar-produtos">E-books</Link>
              </li>
              <li>
                <Link href="/pages/listar-produtos">Kits</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="scroll-to-top">
          <a href="#top">
            <span className="material-symbols-outlined">
              {' '}
              keyboard_arrow_up{' '}
            </span>
          </a>
        </div>
      </footer>
    </RootLayout>
  );
}
