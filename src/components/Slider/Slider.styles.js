import styled from 'styled-components';

export const SliderNav = styled.nav`
  z-index: 10;
  position: absolute;
  bottom: 0;
  left: -78px;
  display: flex;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SliderViewWrapper = styled.div`
  position: relative;
  height: 700px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 700px) {
    height: 560px;
  }
  picture {
    top: 0;
    position: absolute;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    filter: brightness(65%);
  }
  a {
    text-decoration: none;
  }
`;

export const SliderDetails = styled.div`
  width: 500px;
  position: absolute;
  top: 50%;
  left: 120px;
  transform: translate(0, -50%);
  z-index: 10;
  @media (max-width: 850px) {
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 1200px) {
    width: 400px;
  }
  @media (max-width: 700px) {
    width: 90%;
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    letter-spacing: -2px;
    margin: 0;
    font-weight: bold;
    @media (max-width: 1200px) {
      font-size: 60px;
    }
    @media (max-width: 1200px) {
      width: 90%;
    }
    @media (max-width: 1200px) {
      font-size: 48px;
    }
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: 25px;
    margin-bottom: 50px;
  }
`;

export const SliderImageWrapper = styled.picture`
  img {
    opacity: ${({ isCurrent }) => (isCurrent ? '1' : '0')};
  }
  overflow: hidden;
  display: block;
  width: 100%;
  height: 100%;
`;
