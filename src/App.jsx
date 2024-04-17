import React, { useState } from 'react';

import Header     from './components/Header'
import Hero       from './components/Hero'
import Menu       from './components/Menu'
import Footer     from './components/Footer'
import LoginForm  from './components/Login';
import SignUpForm from './components/SignUp';
import Cart       from './components/Cart';
// import unlockScroll from './components/ScrollLocker';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsSignUpOpen(false);
    !isLoginOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''; /* [2] */
    
  };
  const toggleSignUp = () => {
    setIsSignUpOpen(!isSignUpOpen);
    setIsLoginOpen(false)
  };
  return (
    <>
      <Header onLoginClick={toggleLogin} onSignUpClick={toggleSignUp} />
      {isLoginOpen && <LoginForm />}
      {isSignUpOpen && <SignUpForm />}
      <Hero />
      <Menu onFinishClick={toggleCart} />
      {showCart && <Cart  onClose={toggleCart}/>}
      <Footer />
    </>
  )
}

export default App
