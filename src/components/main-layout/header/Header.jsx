import { React } from 'react';
import './Header.scss';

function Header() {
  return (
    <div className='header'>
      <div className='header__burger-menu app-text--uppercase app-text app-text--xs'>
        <img src='' alt='burger-bar' />
        Menu
      </div>
      <div className='header__menu desktop'>
        <div className='header__menu__item app-text--uppercase app-text app-text--l'>Wooder</div>
        <div className='header__menu__item app-text--uppercase app-text app-text--xs'>Home</div>
        <div className='header__menu__item app-text--uppercase app-text app-text--xs'>Products</div>
        <div className='header__menu__item app-text--uppercase app-text app-text--xs'>About</div>
      </div>
      <div className='header__info'>
        <img src='' alt='info' title='Open info' />
      </div>
    </div>
  );
}

export default Header;
