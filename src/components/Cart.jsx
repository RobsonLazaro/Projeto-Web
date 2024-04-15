import React, { useState } from 'react';
import CartItem from './CartItem';

function Cart() {
  const [removedItems, setRemovedItems] = useState({});

  const handleIsRemoved = (index) => {
    setRemovedItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };


  return (
    <section className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center mx-6 bg-black bg-opacity-50'>
      <div className='bg-white flex flex-col text-black max-w-[60rem] p-6 rounded-lg w-[60rem]'>
        <div className='flex justify-between mb-7'>
          <h1 className='text-3xl font-semibold'>Carrinho</h1>
          <button className='px-2 text-xl font-light text-black rounded-md hover:bg-orange-200'>Fechar</button>
        </div>
        <div className='flex flex-col gap-3'>
          <CartItem index={1} isRemoved={removedItems[1]} handleIsRemoved={handleIsRemoved} />
          <CartItem index={2} isRemoved={removedItems[2]} handleIsRemoved={handleIsRemoved} />
        </div>
      </div>
    </section>
  );
}

export default Cart;
