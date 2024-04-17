import React, { useState } from 'react'
import plusPng from '../assets/plus.png'
import minusPng from '../assets/minus.png'

export default function MenuItem({ id, title, description, price }) {

  const [quantity,setQuantity ] = useState(0);

  const addItem = () => {
    setQuantity(quantity+1);
  }

  const subItem = (id) => {
    if(quantity>=1){
      setQuantity(quantity-1);
    }
  }

  return (
    <div className='flex gap-4 mt-4 ml-5'>
      <div className='flex flex-col flex-1'>
        <h3 className='mb-1 text-2xl font-semibold'>{title}</h3>
        <span className='text-2xl font-light max-w-[50rem]'>{description}</span>
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-2xl text-orange-400'>R$ {price}</span>
        <div className='flex justify-between'>
          <button className='flex items-center justify-center w-6 h-6 p-1 text-black bg-white' onClick={subItem}>
            <img src={minusPng} alt="Ícone de remover" />
          </button>
          <span className='font-semibold'>{quantity}</span>
          <button className='flex items-center justify-center w-6 h-6 p-1 text-black bg-white' onClick={addItem}>
            <img src={plusPng} alt="Ícone de adicionar" />
          </button>
        </div>
      </div>
    </div>
  )
}
