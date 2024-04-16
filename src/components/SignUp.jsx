import React, { useState } from 'react';
import InputBox from './InputBox'
import ModalButton from './ModalButton'

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
    <div className="fixed z-10 p-3 bg-gray-500 modal top-3 left-[50%] translate-x-[-50%]" style={style.Modal}>
      <span>Cadastro</span>
      <form className='flex top-10 flex-col justify-center'>

        <InputBox placeholder={'Email'} />
        <InputBox placeholder={'Senha'} />
        <InputBox placeholder={'CEP'} />
        <ModalButton text={'asdasd'} />

      </form>
    </div>
  );
}
const style = {
  Modal: {
    borderRadius: 10
  }
}
