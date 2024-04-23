import React, { useState } from 'react';
import InputBox from './InputBox'
// import ModalButton from './ModalButton'
import burgPng from '../assets/burg.png';

export default function SignUpForm({ onClose }) {
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
    <div className="fixed y-10 z-10 p-3 bg-cor-fundo-login flex flex-col modal top-[12%] left-[0%] right-[0%] bottom-[0%] justify-center rounded-xl" >
      <div className='grid grid-flow-col grid-cols-2'>
        <div className='flex items-center align-middle justify-center'>
          <img src={burgPng} alt="Imagem do burg" className='' />
        </div>
        <form className="form flex justify-center items-center px-10 max-w-[40rem]">
          <div className='flex flex-grow flex-col gap-4'>
            <InputBox Fieldname={"Email:"} Id={"email"} Type={"email"}/>
            <InputBox Fieldname={"Senha:"} Id={"password"} Type={"password"}/>
            <InputBox Fieldname={"Repita sua senha:"} Id={"password"} Type={"password"}/>
            <InputBox Fieldname={"CEP:"} Id={"cep"} Type={"number"}/>

            <div className="actions text-center">
              <button type="submit" className='text-white	bg-green-800  py-3 px-8 mt-5  rounded hover:bg-green-700 text-xl'>Cadastrar</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
}

