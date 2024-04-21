import React from 'react';
import axios from 'axios';
import limparPng from '../assets/x.png'

function CartItem({ id_produto, id_pedido, nome_produto,
  qtde_produto, item_preco_total, preco_produto, updateCart }) {

  const deleteOrder = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/cart/produto', {
        data: {
          id_pedido: id_pedido,
          id_produto: id_produto
        }
      });

      updateCart();
    } catch (error) {
      console.error('Erro ao deletar item do carrinho', error);
    }
  }

  return (
    <div className='grid gap-1 text-lg grid-cols-52221'>
      <h3 className='font-semibold '>{nome_produto}</h3>
      <p className='text-center '>{qtde_produto}</p>
      <p className='text-center'>R$ {preco_produto}</p>
      <p className='text-center '>R$ {item_preco_total}</p>
      <button onClick={deleteOrder} className='p-1 bg-red-200'>D</button>
    </div>
  );
}

export default CartItem;
