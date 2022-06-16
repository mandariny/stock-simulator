import React from 'react';
import "../../static/fonts/font.css"
import classes from "./Header.module.css";
import HeaderLogo from './Header/HeaderLogo';
import HeaderButtons from './Header/HeaderButtons';


const Header = () => {

  return (
    <header className={classes.header}>
      <div className={classes.header__border}>        
        <div className={classes.header__content}>
          <HeaderLogo/>
          <HeaderButtons/>
        </div>
      </div>
      
    </header>
  )
}

export default Header;
