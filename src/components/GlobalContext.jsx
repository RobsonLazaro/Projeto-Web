import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Crie o contexto
const GlobalContext = createContext();

// Crie um componente de provedor para fornecer o contexto para toda a sua aplicação
export const GlobalProvider = ({ children }) => {
  const [globalValue, setGlobalValue] = useState('valor inicial');
  const [userInfo, setUserInfo] = useState(null);

  const checkUser = async () => {
    try {
      if (userInfo && userInfo.sub) {
        const response = await axios.get(`http://localhost:3000/user/${userInfo.sub}`);
        if (response.data.length === 0) {
          const data = {
            id_usuario: userInfo.sub,
            nome_usuario: userInfo.name,
            email: userInfo.email
          };
          await axios.post(`http://localhost:3000/user`, data);
          console.log(userInfo)
        }
      } else {
        console.log('Usuário não autenticado.');
      }
    } catch (error) {
      console.log('Erro ao buscar usuário: ', error);
    }
  };

  useEffect(() => {
    checkUser();
  }, [userInfo]);

  return (
    <GlobalContext.Provider value={{ globalValue, setGlobalValue, userInfo, setUserInfo }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Crie um hook customizado para acessar o contexto
export const useGlobalContext = () => useContext(GlobalContext);
