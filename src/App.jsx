// App.js
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import LoginForm from './components/Login';
import SignUpForm from './components/SignUp';
import Cart from './components/Cart';
import { GlobalProvider } from './components/GlobalContext';

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
    !isLoginOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
  };

  const toggleSignUp = () => {
    setIsSignUpOpen(!isSignUpOpen);
    setIsLoginOpen(false);
    !isSignUpOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
  };

  return (
    <GlobalProvider>
      <Header onLoginClick={toggleLogin} onSignUpClick={toggleSignUp} />
      {isLoginOpen && <LoginForm />}
      {isSignUpOpen && <SignUpForm />}
      <Hero />
      <Menu onFinishClick={toggleCart} />
      {showCart && <Cart onClose={toggleCart} />}
      <Footer />
      <ToastContainer />
    </GlobalProvider>
  );
}

export default App;
