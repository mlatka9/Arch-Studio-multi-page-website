import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

export const Wrapper = styled.div`
  position: relative;
`;
export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  padding: 0 165px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 100000;
  @media (max-width: 1200px) {
    padding: 0 120px;
  }
  @media (max-width: 850px) {
    padding: 0 100px;
  }
  @media (max-width: 700px) {
    justify-content: space-between;
    height: 100px;
    padding: 0 30px;
  }
  > span {
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.grey[400]};
    transform: translateX(100px) rotate(90deg);
    transform-origin: left center;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.s};
    letter-spacing: 15px;
    padding-left: 50px;
    @media (max-width: 700px) {
      display: none;
    }
    @media (max-width: 1200px) {
      transform: translateX(60px) rotate(90deg);
    }
    @media (max-width: 850px) {
      transform: translateX(40px) rotate(90deg);
    }
    &::after {
      content: '';
      display: block;
      width: 100px;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.grey[400]};
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-100%, -50%);
    }
  }
  > a {
    margin-right: 200px;
    @media (max-width: 1000px) {
      margin-right: 50px;
    }
  }

  button {
    display: none;
    @media (max-width: 700px) {
      display: block;
    }
  }
`;
export const Navigation = styled(motion.nav)`
  display: flex;
  gap: 55px;
  @media (max-width: 1000px) {
    gap: 35px;
  }
  @media (max-width: 700px) {
    display: none;
  }

  a {
    color: ${({ theme }) => theme.colors.grey[300]};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.s};
    text-decoration: none;
    transition: color 100ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.grey[100]};
    }
  }
`;

export const MobileNavigation = styled(Navigation)`
  display: none;
  flex-direction: column;
  position: absolute;
  width: calc(100% - 30px);
  background-color: ${({ theme }) => theme.colors.grey[500]};
  color: ${({ theme }) => theme.colors.grey[100]};
  padding: 40px;
  bottom: 1px;
  right: 0;
  transform: translateY(100%);
  z-index: 100;
  overflow: hidden;
  @media (max-width: 700px) {
    display: flex;
  }
  span {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.colors.grey[100]};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const MenuButton = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: relative;
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
  span {
    position: absolute;
    display: block;
    background-color: ${({ theme }) => theme.colors.grey[100]};
    width: 100%;
    height: 3px;
    transition: transform 200ms ease-in-out;
    &:nth-last-of-type(1) {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translate(0, 11px) rotate(-45deg)' : 'translate(0, 0)')};
    }
    &:nth-last-of-type(2) {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translate(0, 11px) rotate(45deg)' : 'translate(0, 11px)')};
    }
    &:nth-last-of-type(3) {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translate(0, 11px) rotate(45deg)' : 'translate(0, 21px)')};
    }
  }
`;

export const MenuBackDrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 80;
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;
