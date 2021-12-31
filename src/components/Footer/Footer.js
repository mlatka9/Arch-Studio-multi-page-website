import { ReactComponent as Logo } from 'assets/icons/logo-white.svg';
import { NavLink } from 'react-router-dom';
import Button from 'components/Button/Button';
import { FooterNavigation, LogoWrapper, Wrapper } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <FooterNavigation>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </FooterNavigation>
      <NavLink to="/portfolio">
        <Button label="See Our Portfolio" />
      </NavLink>
    </Wrapper>
  );
};

export default Footer;
