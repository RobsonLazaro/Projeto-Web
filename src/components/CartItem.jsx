import React from 'react';
import limparPng from '../assets/x.png'

function CartItem({ id_produto, id_pedido, nome_produto, qtde_produto, item_preco_total, preco_produto }) {
  return (
    <div className='grid gap-1 text-lg grid-cols-52221'>
      <h3 className='font-semibold '>{nome_produto}</h3>
      <p className='text-center '>{qtde_produto}</p>
      <p className='text-center'>R$ {preco_produto}</p>
      <p className='text-center '>R$ {item_preco_total}</p>
      <button className='p-1 bg-red-200'>Remover</button>
    </div>
  );
}

export default CartItem;
