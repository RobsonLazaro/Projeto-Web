import React from 'react';
import MenuSection from './MenuSection';

function Menu() {
  return (
    <section className='flex items-center justify-center px-[15rem] py-10 text-white bg-center bg-cover bg-darker-gray' style={{ backgroundImage: "url('src/assets/menu-bg.png')" }}>
      <div className='flex flex-col flex-1 px-[10rem] py-10 bg-darker-gray'>
        <h1 className='mb-3 text-4xl text-center text-orange-400'>Cardápio</h1>
        <MenuSection text="Hambúrgueres" tipoProduto="hamburguer" />
        <MenuSection text="Sanduíches" tipoProduto="sanduíche" />
        <MenuSection text="Batatas fritas" tipoProduto="batatas fritas" />
      </div>
    </section>
  );
}

export default Menu;
