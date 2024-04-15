import React, { useState } from 'react';

import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Footer from './components/Footer'
import LoginForm from './components/Login';
import Cart from './components/Cart';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  return (
    <>
      <Header onLoginClick={toggleLogin} />
      {isLoginOpen && <LoginForm />}
      <Hero />
      <Menu onFinishClick={toggleCart} />
      {showCart && <Cart />}
      <Footer />
    </>
  )
}

export default App
