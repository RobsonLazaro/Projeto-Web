import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartItem from './CartItem';
import axios from 'axios';
import { useGlobalContext } from './GlobalContext';

function Cart({ onClose }) {

  const [cartItems, setCartItems] = useState([]);
  const { userInfo } = useGlobalContext();
  // const id_usuario = userinfo.sub;
  useEffect(() => {
    console.log('Cart: ' + userInfo)
    if (userInfo) {
      const fetchCartItems = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/cart/${userInfo.sub}`);
          setCartItems(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Erro ao buscar itens do carrinho:', error);
        }
      };
      fetchCartItems();
    }
  }, [userInfo]);

  const updateCart = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cart/${userInfo.sub}`);
      setCartItems(response.data);
    } catch (error) {
      console.error('Erro ao atualizar o carrinho:', error);
    }
  };

  const finishOrder = async () => {
    try {
      await axios.put(`http://localhost:3000/cart/${userInfo.sub}`, { status: 'A' });

      toast.success(' Pedido efetuado com sucesso!.', {
        position: "bottom-right",
        theme: "dark",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      onClose();
      console.log('Pedido finalizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao finalizar pedido!', {
        position: "bottom-right",
        theme: "dark",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      console.error('Erro ao finalizar o pedido:', error);
    }
  };

  return (
    <section className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center mx-6 bg-black bg-opacity-50'>
      <div className='bg-cor-fundo-login flex flex-col text-black max-w-[60rem] p-6 rounded-lg w-[60rem] text-white'>
        <div className='flex justify-between mb-7'>
          <h1 className='text-3xl font-semibold text-orange-400'>Carrinho</h1>

        </div>
        <div className='flex flex-col gap-5'>
          <div className='grid gap-1 text-xl font-bold grid-cols-52221'>
            <h3>Produto</h3>
            <h3 className='text-center'>Quantidade</h3>
            <h3 className='text-center'>Preço</h3>
            <h3 className='text-center'>Total</h3>
            <div></div>
          </div>
          <div className='flex flex-col gap-2'>
            {Array.isArray(cartItems) && cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <CartItem
                    id_produto={item.produto_id}
                    id_pedido={item.pedido_id}
                    nome_produto={item.nome}
                    qtde_produto={item.qtde}
                    preco_produto={item.preco}
                    item_preco_total={item.item_pedido_total}
                    updateCart={updateCart} />
                  {index !== cartItems.length - 1 && <hr className="border-gray-300" />}
                </React.Fragment>
              ))
            ) : (
              <p>Sem pedidos no carrinho</p>
            )}
          </div>
          <p className='text-xl font-semibold text-right'>
            Total: R$ {
              cartItems.reduce((total, item) => total + parseFloat(item.item_pedido_total), 0).toFixed(2)
            }
          </p>
          <div className='flex justify-end gap-2'>
            <button className='px-2 text-xl text-black text-white hover:text-orange-400' onClick={onClose}>Fechar</button>
            <button className='px-2 py-2 font-bold text-white bg-green-700 hover:opacity-80' onClick={finishOrder}>Finalizar pedido</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
