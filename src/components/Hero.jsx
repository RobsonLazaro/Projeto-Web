import React from 'react';
import burgPng from '../assets/burg.png';
// import yellowBlur from '../assets/Ellipse1.png';

export default function Hero() {
  return (
    <section className='flex justify-center gap-[8rem] bg-darker-gray py-[7rem]'>
      <div className='flex flex-col justify-center'>
        <span className='text-4xl text-right text-white'>
          <span>sabores rápidos<br />satisfação instantânea</span>
        </span>
        <span className='pt-2 text-4xl text-right text-orange-400 cursor-pointer hover:underline'>
          peça já
        </span>
      </div>
      <div>
        {/* <img src={yellowBlur} alt="" /> */}
        <img src={burgPng} alt="Imagem do burg" className='w-128' />
      </div>
    </section>
  );
}
