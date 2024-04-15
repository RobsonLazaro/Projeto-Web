import React, { useEffect } from 'react';
import Optional from './Optional';

function CartItem({ index, id, isRemoved, handleIsRemoved }) {
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/produto/${id}`);
        setMenuItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao buscar item do menu:', error);
      }
    };

    fetchItem();
  }, [id]);


  return (
    <div className={`flex flex-col item-pedido ${isRemoved ? 'line-through text-gray-500' : ''}`}>
      <div className='flex justify-between flex-1'>
        <div className='descricao'>
          <h2 className='text-xl font-semibold'>Hamburguer bom</h2>
          <p className='text-lg'>Hamburguer de coisas boas</p>
        </div>
        <div className='flex flex-col items-center content-center preco'>
          <p>R$ 8,99</p>
          <div className='flex items-center justify-between'>
            <input type="checkbox" id={`rmit-${index}`} className='hidden' onChange={() => handleIsRemoved(index)} />
            <label htmlFor={`rmit-${index}`} className='cursor-pointer hover:underline'>Remover do carrinho</label>
          </div>
        </div>
      </div>
      <Optional index={index} />
    </div>
  )
}

export default CartItem;
