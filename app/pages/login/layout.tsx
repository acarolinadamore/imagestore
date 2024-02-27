import { ReactNode } from 'react';
import '../login/login.css';
import Link from 'next/link';
import LoginForm from '../../admin/LoginForm';

interface LoginLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <>
      <div className="login-container flex flex-col items-center pt-5 ">
        <div className="bg-rect absolute top-0 left-0 w-full h-350"></div>
        <div className="login-text flex flex-col items-center mt-10">
          <div className="logo-container mb-10">
            {' '}
            <a href="/">
              <img
                src="/assets/icons/logo-rosa.svg"
                alt="Logo"
                width={170}
                height={100}
              />
            </a>
          </div>
          <div className="text-container mb-4 font-bold text-3xl">
            Crie uma nova conta
          </div>
          <div className="flex flex-row">
            <div className="text-container mb-3 text-lg inline-flex items-center">
              <span>Já tem uma conta? </span>
              <Link href="/admin">
                <span className="text-pink-400 border-b border-pink-400">
                  Login
                </span>
              </Link>
            </div>
          </div>

          <div className="form-container">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
