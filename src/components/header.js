import React from 'react';
import './Header.css';

function Header() {
    const handleClick = () => {
        
      };
  return (
      <header className="Header">
        <img src="https://res.cloudinary.com/dehnmebha/image/upload/v1726553806/FOC_LOFO_PNG-01_thmdjy.png" className="App-logo" alt="logo" />
        <p className='Para'>
        Welcome to FOC, your go-to destination for authentic street food delivery!
        </p>
        <a className='feed' href='https://docs.google.com/forms/d/e/1FAIpQLSdvseFPxRJ53BSuXqNxDul5DQtUr6__MUIxU_fp1nq54MGLhg/viewform?usp=sf_link' target="_blank">Feedback</a>
      </header>
  );
}

export default Header;