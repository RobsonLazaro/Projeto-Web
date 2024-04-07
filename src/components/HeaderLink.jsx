import React from 'react'

export default function HeaderLink({ text, onClickAct }) {
  return (
    <div>
      <a className='text-2xl cursor-pointer hover:text-orange-400' onClick={onClickAct}>{text}</a>
    </div>
  )
}
