import React from 'react';
import "./Header.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from  '@material-ui/icons/Forum';

function Header() {
  return (
    <div className="header">

      <IconButton>
      <AccountCircleIcon fontSize="large" className="header__icon" />
      </IconButton>

      <IconButton>
        <img 
            className="header__logo"
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
            alt="Tinder Logo" 
        />
      </IconButton>

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  )
}

export default Header
