import { Navigation } from 'components/Header/Header.styles';
import { StyledButton } from 'components/Button/Button.styles';
import styled from 'styled-components';

export const Wrapper = styled.footer`
  height: 200px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey[500]};
  position: relative;
  margin: 0 165px;
  @media (max-width: 1200px) {
    margin: 0 120px;
  }
  @media (max-width: 1100px) {
    margin: 0;
  }
  @media (max-width: 850px) {
    height: 120px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    height: 430px;
  }
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: 100px;
    background-color: white;
    right: 0;
    position: absolute;
    @media (max-width: 700px) {
      height: 60px;
      width: 100%;
    }
  }
  ${StyledButton} {
    position: absolute;
    right: 0;
    top: 50;
    transform: translateY(-50%);
    z-index: 10;
    @media (max-width: 700px) {
      position: unset;
      transform: translateY(0);
    }
  }
  a {
    text-decoration: none;
  }
`;

export const LogoWrapper = styled.div`
  width: 200px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grey[100]};
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    width: 120px;
    svg {
      width: 50%;
    }
  }
  @media (max-width: 700px) {
    width: 120px;
    height: 120px;
    margin-right: 0;
    z-index: 100;
  }
`;

export const FooterNavigation = styled(Navigation)`
  display: flex;
  gap: 55px;
  @media (max-width: 1000px) {
    gap: 35px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 40px 0;
  }
  a {
    color: ${({ theme }) => theme.colors.grey[300]};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.s};
    transition: color 100ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.grey[100]};
    }
  }
`;
