import React from 'react';
import './header.css';
import LogoSvg from '../LogoSvg/LogoSvg';
import Sobre from '../Sobre/Sobre';

function Header(){
  return (
    <header className="header">
      <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>

        <div className="logo">
          <LogoSvg />
        </div>

        <Sobre />


      </div>
    </header>
  );
}

export default Header;