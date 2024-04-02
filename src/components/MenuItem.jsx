import React from 'react'

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
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
      </div>
    </div>
  )
}
