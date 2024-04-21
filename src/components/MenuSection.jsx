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
      <div className='flex flex-col gap-2'>
        <h3 className='text-4xl text-orange-400'>{text}</h3>
        {Array.isArray(menuItems) && menuItems.length > 0 ? (
          menuItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <MenuItem key={item.id} id={item.id} id_produto={item.id} title={item.nome} description={item.descricao} price={item.preco} />
              {index !== menuItems.length - 1 && <hr className="mx-5 my-1 border-gray-500 border-dashed" />}
            </React.Fragment>
          ))
        ) : (
          <p>Produto da categoria <b>{tipoProduto}</b> não encontrado!</p>
        )}
      </div>
    </section>
  );

}
