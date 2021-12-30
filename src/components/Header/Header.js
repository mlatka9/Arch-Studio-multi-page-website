import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { Navigation, Wrapper, MobileNavigation, MenuButton } from './Header.styles';
import { useState } from 'react';

const subPageNames = {
  '/': 'Home',
  '/portfolio': 'portfolio',
  '/about': 'about us',
  '/contact': 'contact',
};

const getSubPageName = (pathname) => {
  const pageName = subPageNames[pathname];
  if (!pageName) throw new Error('Passed wrong pathname');
  return pageName;
};

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <Wrapper>
      <span>{getSubPageName(location.pathname)}</span>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <Navigation>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Navigation>
      {isMenuOpen ? (
        <MobileNavigation>
          <NavLink to="/portfolio" onClick={handleCloseMenu}>
            Portfolio
          </NavLink>
          <NavLink to="/about" onClick={handleCloseMenu}>
            About Us
          </NavLink>
          <NavLink to="/contact" onClick={handleCloseMenu}>
            Contact
          </NavLink>
        </MobileNavigation>
      ) : null}

      <MenuButton isMenuOpen={isMenuOpen} onClick={handleToggleMenu}>
        <span />
        <span />
        <span />
      </MenuButton>
    </Wrapper>
  );
};

export default Header;
