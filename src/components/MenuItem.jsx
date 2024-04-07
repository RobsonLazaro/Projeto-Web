import React from 'react'
import plusPng from '../assets/plus.png'
import minusPng from '../assets/minus.png'

export default function MenuItem({ id, title, description, price }) {
  return (
    <div className='flex mt-4 ml-7'>
      <div className='flex flex-col flex-1'>
        <h3 className='mb-1 text-xl font-semibold'>{title}</h3>
        <span>{description}</span>
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-xl text-orange-400'>R$ {price}</span>
        <div className='flex justify-between'>
          <button className='flex items-center justify-center w-6 h-6 p-1 text-black bg-white'>
            <img src={minusPng} alt="Ícone de remover" />
          </button>
          <span className='font-semibold'>0</span>
          <button className='flex items-center justify-center w-6 h-6 p-1 text-black bg-white'>
            <img src={plusPng} alt="Ícone de adicionar" />
          </button>
        </div>
      </div>
    </div>
  )
}