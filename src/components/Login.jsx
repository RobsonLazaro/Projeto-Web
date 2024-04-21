import React, { useState } from 'react';
import InputBox from './InputBox'
import burgPng from '../assets/burg.png';
export default function LoginForm({ onClose }) {
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
    <div className="fixed y-10 z-10 p-3 bg-cor-fundo-login flex flex-col modal top-[15%] left-[10%] right-[10%] bottom-[15%] justify-center rounded-xl">
      <div className='grid grid-flow-col grid-cols-2'>
        <div className='flex items-center align-middle justify-center'>
          <img src={burgPng} alt="Imagem do burg" className='' />
        </div>
        <form className="form flex justify-center items-center px-10 max-w-[40rem]">
          <div className='flex flex-grow flex-col gap-4'>
            <InputBox Fieldname={"Email:"} Id={"email"} Type={"email"} />
            <InputBox Fieldname={"Senha:"} Id={"password"} Type={"password"} />
            <div className='Forgot text-center'>
              <p><a href="#" className=' text-white hover:text-orange-400 underline text-xl font-light'>Criar Conta</a></p>
            </div>
            <div className="actions text-center">
              <button type="submit" className='text-white	bg-green-800 py-2 px-8 rounded hover:bg-green-700 text-xl'>Entrar</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
}