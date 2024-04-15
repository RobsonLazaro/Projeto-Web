import React from 'react';
import burgPng from '../assets/burg.png';
// import yellowBlur from '../assets/Ellipse1.png';

export default function Hero() {

  const scrollToOrder = () => {
    // Encontre o elemento para o qual você deseja rolar
    const orderElement = document.getElementById('cardapio');

    // Role suavemente até o elemento
    orderElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='flex justify-center align-middle gap-[8rem] bg-darker-gray py-[7rem] h-screen'>
      <div className='flex flex-col justify-center'>
        <span className='text-5xl text-right text-white'>
          <span>sabores rápidos<br />satisfação instantânea</span>
        </span>
        <div className='flex justify-end'>
          <span className='pt-2 text-4xl text-right text-orange-400 cursor-pointer hover:underline' onClick={scrollToOrder}>
            peça já
          </span>
        </div>
      </div>
      <div className='flex items-center align-middle'>
        {/* <img src={yellowBlur} alt="" /> */}
        <img src={burgPng} alt="Imagem do burg" className='max-w-[50rem]' />
      </div>
    </section>
  );
}
