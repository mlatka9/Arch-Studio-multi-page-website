import styled from 'styled-components';
import { SliderViewWrapper } from 'components/Slider/Slider.styles';

export const WelcomeWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr 120px 350px;
  grid-template-rows: 100px 100px 1fr;
  width: 100%;
  margin: 100px 0 200px;
  @media (max-width: 1200px) {
    grid-template-columns: 0px 3fr 20px 350px;
    grid-template-rows: 80px 100px 1fr;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-rows: unset;
  }
  @media (max-width: 700px) {
    padding: 0 30px;
    margin: 100px 0 100px;
  }
  h1 {
    grid-column: 1 / span 4;
    grid-row: 1 / span 2;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin: 0;
    letter-spacing: -5px;
    color: ${({ theme }) => theme.colors.grey[500]};
    z-index: 10;
    @media (max-width: 1200px) {
      font-size: 150px;
    }
    @media (max-width: 850px) {
      font-size: 120px;
    }
    @media (max-width: 700px) {
      font-size: 100px;
    }
    @media (max-width: 550px) {
      display: none;
    }
  }
  h2 {
    margin-bottom: 60px;
  }

  div {
    grid-column: 2 / span 1;
    grid-row: 3 / span 1;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: 25px;
    color: ${({ theme }) => theme.colors.grey[200]};
  }
  img {
    grid-column: 4 / span 1;
    grid-row: 2 / span 2;
    align-self: flex-start;
    @media (max-width: 850px) {
      display: none;
    }
  }
`;

export const HeroViewWrapper = styled(SliderViewWrapper)`
  height: 560px;
  margin-bottom: 200px;
  @media (max-width: 700px) {
    margin: 100px 0 100px;
  }
  h2 {
    margin-bottom: 40px;
  }
`;

export const FeaturedViewWrapper = styled.div`
  margin-bottom: 200px;
  a {
    text-decoration: none;
  }
  @media (max-width: 700px) {
    padding: 0 30px;
    margin-bottom: 100px;
  }
  > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    /* h2 {
      font-size: ${({ theme }) => theme.fontSize.l};
      font-weight: bold;
    } */
    button {
      display: flex;
      @media (max-width: 700px) {
        display: none;
      }
    }
  }
`;

export const FeaturedCardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  position: relative;
  @media (max-width: 1000px) {
    gap: 10px;
  }
  @media (max-width: 849px) {
    grid-template-columns: 1fr;
  }
  > div::after {
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: bold;
    letter-spacing: -5px;
    color: rgba(255, 255, 255, 0.5);
    top: 25px;
    right: 0;
    @media (max-width: 950px) {
      font-size: 150px;
    }
    @media (max-width: 700px) {
      font-size: 0;
    }
  }
  > div:nth-of-type(1)::after {
    content: '1';
  }
  > div:nth-of-type(2)::after {
    content: '2';
  }
  > div:nth-of-type(3)::after {
    content: '3';
  }

  img {
    display: block;
    width: 100%;
  }
  button {
    width: 100%;
    display: none;
    @media (max-width: 700px) {
      display: flex;
      justify-content: center;
    }
  }
  a {
    text-decoration: none;
  }
`;

export const PortfolioCardWrapper = styled.div``;
