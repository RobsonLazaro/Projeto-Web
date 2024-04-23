import React, { useState } from 'react';
import InputBox from './InputBox'
import burgPng from '../assets/burg.png';
import HeaderLink from './HeaderLink'


export default function LoginForm({onSignUpClick ,onClose  }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário com as credenciais inseridas
    console.log('Usuário:', username);
    console.log('Senha:', password);
    onClose(); // Fecha o modal de login após o envio do formulário
  };

  return (
    <div className="fixed y-10 z-10 p-3 bg-cor-fundo-login flex flex-col modal top-[11%] left-[0%] right-[0%] bottom-[0] justify-center">
      <div className='grid grid-flow-col grid-cols-2'>
        <div className='flex items-center align-middle justify-center'>
          <img src={burgPng} alt="Imagem do burg" className='' />
        </div>
        <form className="form flex justify-center items-center px-10 max-w-[40rem]">
          <div className='flex flex-grow flex-col gap-4'>
            <InputBox Fieldname={"Email:"} Id={"email"} Type={"email"} />
            <InputBox Fieldname={"Senha:"} Id={"password"} Type={"password"} />
            
            <div className="actions text-center pt-4 pb-3">
              <button type="submit" className='text-white	bg-green-800 py-2 px-8 rounded hover:bg-green-700 text-xl'>Entrar</button>
            </div>
            <hr></hr>
            <div>
            </div>
            <div className='Forgot text-center'>
              <p className='text-center text-white text-xl font-light'>Ainda não tem cadastro?</p>
              <p className='text-center text-white text-xl '><a href="">cadastre-se</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
}