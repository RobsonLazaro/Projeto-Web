import React from 'react'
import LogoSvg from '../assets/LogoSvg'
import HeaderLink from './HeaderLink'

export default function Header() {
  return (
    <header className='flex items-center justify-around p-4 header bg-darker-gray'>
      <LogoSvg />

      <nav className='flex justify-between gap-12 text-white'>
        <HeaderLink text="sobre" />
        <HeaderLink text="contato" />
        <HeaderLink text="conta" />
      </nav>
    </header>
  )
}
