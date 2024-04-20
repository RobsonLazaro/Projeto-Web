import React from 'react'
import LogoSvg from '../assets/LogoSvg'
import HeaderLink from './HeaderLink'

export default function Header({ onLoginClick, onSignUpClick }) {
  return (
    <header className='fixed top-0 left-0 right-0 flex items-center justify-around px-4 py-7 header bg-darker-gray'>
      <LogoSvg />

      <nav className='flex justify-between gap-12 text-white'>
        <HeaderLink text="sobre" />
        <HeaderLink text="contato" />
        <HeaderLink text="entrar" onClickAct={onLoginClick} />
        <HeaderLink text="cadastrar" onClickAct={onSignUpClick} />
      </nav>
    </header>
  )
}
