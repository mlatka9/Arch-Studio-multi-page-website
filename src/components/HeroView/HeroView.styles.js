import styled from 'styled-components';

export const FullImageFilter = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  inset: 0;
`;

export const HeroWrapper = styled.div`
  display: grid;
  height: 700px;
  grid-template-columns: 45% 15% 40%;
  grid-template-rows: 200px 1fr;
  margin-bottom: 200px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr 15%;
    grid-template-rows: 240px 45px 1fr;
  }
  @media (max-width: 700px) {
    margin-bottom: 100px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr 35px;
  }
  h1 {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    z-index: 20;
    transform: translateY(100px);
    text-align: right;
    @media (max-width: 1100px) {
      font-size: 150px;
      transform: translateY(100px);
    }
    @media (max-width: 950px) {
      font-size: 150px;
      transform: translateY(30px);
    }
    @media (max-width: 850px) {
      transform: translateY(100px);
      font-size: 120px;
    }
    @media (max-width: 700px) {
      display: none;
    }
  }
  h2 {
    margin-bottom: 35px;
    @media (max-width: 950px) {
      font-size: 45px;
    }
    @media (max-width: 850px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    @media (max-width: 560px) {
      font-size: 40px;
      line-height: 48px;
      margin-bottom: 0px;
    }
    @media (max-width: 420px) {
      font-size: 35px;
    }
  }
`;

export const PictureWrapper = styled.div`
  position: relative;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  overflow: hidden;
  @media (max-width: 850px) {
    grid-column: 1 / 4;
  }
  @media (max-width: 700px) {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const DetailsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 30%;
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  z-index: 10;
  @media (max-width: 1100px) {
    padding-left: 80px;
  }
  @media (max-width: 850px) {
    grid-column: 1 / 4;
    margin-left: 80px;
  }
  @media (max-width: 700px) {
    padding: 0 30px;
  }
  @media (max-width: 700px) {
    margin: 0;
    padding: 80px 30px 0;
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    align-self: flex-start;
    background-color: white;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: 25px;
    color: ${({ theme }) => theme.colors.grey[200]};
  }
`;
