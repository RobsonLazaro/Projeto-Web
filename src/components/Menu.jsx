import React from 'react';
import MenuSection from './MenuSection';

function Menu() {
  return (
    <section id='cardapio' className='flex items-center justify-center px-5 py-16 text-white bg-center bg-cover bg-darker-gray' style={{ backgroundImage: "url('src/assets/menu-bg.png')" }}>
      <div className='flex items-center flex-col flex-1 px-[10rem] max-w-[85rem] py-10 bg-darker-gray'>
        <h1 className='mb-10 text-4xl font-semibold text-center text-orange-400'>Cardápio</h1>
        <div className='flex flex-col gap-7'>
          <MenuSection text="Hambúrgueres" tipoProduto="hamburguer" />
          <MenuSection text="Sanduíches" tipoProduto="sanduíche" />
          <MenuSection text="Batatas fritas" tipoProduto="batatas fritas" />
        </div>
        <button className='px-3 py-1 mt-5 text-xl text-white bg-green-900'>
          Pedir
        </button>
      </div>
    </section>
  );
}

export default Menu;
