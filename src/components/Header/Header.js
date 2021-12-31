import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { Navigation, Wrapper, MobileNavigation, MenuButton, NavigationWrapper, MenuBackDrop } from './Header.styles';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

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

const menu = {
  hidden: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  show: {
    opacity: 1,
    y: 213,
    transition: {
      duration: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const menuItem = {
  hidden: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: 0,
  },
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
      <NavigationWrapper>
        <span>{getSubPageName(location.pathname)}</span>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <Navigation>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Navigation>
        <MenuButton isMenuOpen={isMenuOpen} onClick={handleToggleMenu}>
          <span />
          <span />
          <span />
        </MenuButton>
      </NavigationWrapper>
      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <MobileNavigation variants={menu} initial="hidden" animate="show" exit="exit">
              <NavLink to="/portfolio" onClick={handleCloseMenu}>
                <motion.span variants={menuItem}>Portfolio</motion.span>
              </NavLink>
              <NavLink to="/about" onClick={handleCloseMenu}>
                <motion.span variants={menuItem}>About Us</motion.span>
              </NavLink>
              <NavLink to="/contact" onClick={handleCloseMenu}>
                <motion.span variants={menuItem}>Contact</motion.span>
              </NavLink>
            </MobileNavigation>
            <MenuBackDrop initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          </>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Header;
