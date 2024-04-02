import React from 'react'

export default function HeaderLink({ text }) {
  return (
    <div>
      <span className='text-lg cursor-pointer hover:text-orange-400'>{text}</span>
    </div>
  )
}
