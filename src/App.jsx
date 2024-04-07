import React, { useState } from 'react';

import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Footer from './components/Footer'
import LoginForm from './components/Login';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };
  return (
    <>
      <Header onLoginClick={handleLoginClick} />
      {isLoginOpen && <LoginForm />}
      <Hero />
      <Menu />
      <Footer />
    </>
  )
}

export default App
