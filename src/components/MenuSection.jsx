import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItem from './MenuItem';

export default function MenuSection({ text, tipoProduto }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/menu/${tipoProduto}`);
        setMenuItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao buscar itens do menu:', error);
      }
    };

    fetchMenuItems();
  }, [tipoProduto]);

  return (
    <section className='mt-3'>
      <h3 className='text-2xl text-orange-400'>{text}</h3>
      {Array.isArray(menuItems) && menuItems.length > 0 ? (
        menuItems.map(item => (
          <MenuItem key={item.id} title={item.nome} description={item.descricao} price={item.preco} />
        ))
      ) : (
        <p>Nenhum item encontrado</p>
      )}
    </section>
  )
}
