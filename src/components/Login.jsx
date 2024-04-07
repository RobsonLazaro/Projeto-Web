import React, { useState } from 'react';

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
    <div className="fixed z-10 p-3 bg-gray-500 modal top-3 left-[50%] translate-x-[-50%]">
      <span>Login</span>
    </div>
  );
}
