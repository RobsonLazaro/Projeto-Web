import React, { useState } from 'react';
import InputBox from './InputBox';
import burgPng from '../assets/burg.png';
import { jwtDecode } from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';

export default function LoginForm({ onSignUpClick, onClose, setUserinfo }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Usuário:', username);
    console.log('Senha:', password);
    //onClose(); // Fecha o modal de login após o envio do formulário
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log('logado');
    console.log('Resposta de login com Google:', response);
    const decodedToken = jwtDecode(response.credential);
    setUserinfo(decodedToken);
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Erro ao fazer login:', error);
  };

  return (
    <div className="fixed y-10 z-10 p-3 bg-cor-fundo-login flex flex-col modal top-[11%] left-[0%] right-[0%] bottom-[0] justify-center">
      <div className='grid grid-flow-col grid-cols-2'>
        <div className='flex items-center justify-center align-middle'>
          <img src={burgPng} alt="Imagem do burg" className='' />
        </div>
        <form className="form flex justify-center items-center px-10 max-w-[40rem]" onSubmit={handleFormSubmit}>
          <div className='flex flex-col flex-grow gap-4'>
            <InputBox Fieldname={"Email:"} Id={"email"} Type={"email"} value={username} onChange={(e) => setUsername(e.target.value)} />
            <InputBox Fieldname={"Senha:"} Id={"password"} Type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className="flex flex-col items-center gap-3 pt-4 pb-3 text-center actions">
              <button type="submit" className='px-8 py-2 text-xl text-white bg-green-800 rounded hover:bg-green-700'>Entrar</button>
              <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={handleGoogleLoginFailure} />
            </div>
            <hr />
            <div>
            </div>
            <div className='text-center Forgot'>
              <p className='text-xl font-light text-center text-white'>Ainda não tem cadastro?</p>
              <p className='text-xl text-center text-white '><a href="" onClick={onSignUpClick}>cadastre-se</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
