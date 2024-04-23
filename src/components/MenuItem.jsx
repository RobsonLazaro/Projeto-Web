import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import plusPng from '../assets/plus.png';
import minusPng from '../assets/minus.png';
import axios from 'axios';

const MenuItem = ({ id_produto, title, description, price }) => {
  const [quantity, setQuantity] = useState(0);
  const id_usuario = 1; //Mudar depois que fizer o login
  const addItem = () => {
    setQuantity(quantity + 1);
  };

  const subItem = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };



  const addCart = () => {
    if (quantity > 0) {
      const data = {
        produtoId: id_produto,
        quantidade: quantity
      };

      axios.post(`http://localhost:3000/addcart/${id_usuario}`, data)
        .then(response => {
          console.log(response.data);
          setQuantity(0);
          toast.success(title + ' adicionado ao carrinho.', {
            position: "bottom-right",
            theme: "dark",
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        })
        .catch(error => {
          console.error(error);
          toast.error('Erro ao adicionar produto ao carrinho!', {
            position: "bottom-right",
            theme: "dark",
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        });
    }
  };



  return (
    <div className='flex gap-4 mt-4 bg-darker-gray'>
      <div className='flex flex-col flex-1'>
        <h3 className='mb-1 text-2xl font-semibold'>{title}</h3>
        <span className='text-2xl font-light max-w-[50rem]'>{description}</span>
      </div>
      <div className='flex flex-col gap-1'>
        <span className='text-2xl text-orange-400'>R$ {price}</span>
        <div className='flex justify-between'>
          <button className='flex items-center justify-center w-6 h-6 hover:opacity-80' onClick={subItem}>
            <img src={minusPng} alt="Ícone de remover" />
          </button>
          <span className='font-semibold'>{quantity}</span>
          <button className='flex items-center justify-center w-6 h-6 hover:opacity-80' onClick={addItem}>
            <img src={plusPng} alt="Ícone de adicionar" />
          </button>
        </div>
        <button className='px-1 font-light text-white bg-green-900 hover:opacity-80' onClick={addCart}>Adicionar</button>
      </div>
    </div>
  );
};

export default MenuItem;
