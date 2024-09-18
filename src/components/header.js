import React from 'react';
import './Header.css';

function Header() {
  return (
      <header className="Header">
        <img src="https://res.cloudinary.com/dehnmebha/image/upload/v1726553806/FOC_LOFO_PNG-01_thmdjy.png" className="App-logo" alt="logo" />
        <p className='Para'>
        Welcome to FOC, your go-to destination for authentic street food delivery!
        </p>
      </header>
  );
}

export default Header;