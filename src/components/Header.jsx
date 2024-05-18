// Header.js
import React from 'react';
import LogoSvg from '../assets/LogoSvg';
import HeaderLink from './HeaderLink';
import { GoogleLogin } from '@react-oauth/google';
import { useGlobalContext } from './GlobalContext';
import { jwtDecode } from 'jwt-decode';

export default function Header({ onLoginClick, onSignUpClick }) {
  const { userInfo, setUserInfo } = useGlobalContext();

  const handleGoogleLoginSuccess = (response) => {
    console.log('logado');
    console.log('Resposta de login com Google:', response);
    setUserInfo(jwtDecode(response.credential));
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Erro ao fazer login:', error);
  };

  return (
    <header className='fixed top-0 left-0 right-0 flex items-center justify-around px-4 py-7 header bg-darker-gray'>
      <LogoSvg />
      <nav className='flex justify-between gap-12 text-white'>
        {userInfo ? (<HeaderLink text={userInfo.name.toLowerCase()} />) : (<GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={handleGoogleLoginFailure} />)}
      </nav>
    </header>
  );
}
