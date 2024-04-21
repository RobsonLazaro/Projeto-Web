import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import axios from 'axios';

function Cart({ onClose, id_usuario }) {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/cart/${id_usuario}`);
        setCartItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao buscar itens do carrinho:', error);
      }
    };

    fetchCartItems();
  }, [id_usuario]);


  return (
    <section className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center mx-6 bg-black bg-opacity-50'>
      <div className='bg-white flex flex-col text-black max-w-[60rem] p-6 rounded-lg w-[60rem]'>
        <div className='flex justify-between mb-7'>
          <h1 className='text-3xl font-semibold'>Carrinho</h1>
          <button className='px-2 text-xl font-light text-black rounded-md hover:bg-orange-200' onClick={onClose}>Fechar</button>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='grid gap-1 text-xl font-bold grid-cols-52221'>
            <h3>Produto</h3>
            <h3 className='text-center'>Quantidade</h3>
            <h3 className='text-center'>Preço</h3>
            <h3 className='text-center'>Total</h3>
            <div></div>
          </div>
          {Array.isArray(cartItems) && cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <CartItem
                  id_produto={item.produto_id}
                  id_pedido={item.pedido_id}
                  nome_produto={item.nome}
                  qtde_produto={item.qtde}
                  preco_produto={item.preco}
                  item_preco_total={item.item_pedido_total} />
                {index !== cartItems.length - 1 && <hr className="border-gray-300" />}
              </React.Fragment>
            ))
          ) : (
            <p>Sem pedidos no carrinho</p>
          )}
          <p className='text-xl font-semibold text-right'>
            Total: R$ {
              cartItems.reduce((total, item) => total + parseFloat(item.item_pedido_total), 0)
            }
          </p>
          <button>Finalizar pedido</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
