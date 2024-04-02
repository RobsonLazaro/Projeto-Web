import React from 'react'

export default function MenuSection({ text, children }) {
  return (
    <section className='mt-3'>
      <h3 className='text-2xl text-orange-400'>{text}</h3>
      {children}
    </section>
  )
}
