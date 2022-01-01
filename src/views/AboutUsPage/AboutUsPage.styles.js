import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
`;

export const HeritageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 110px;
  margin-bottom: 200px;
  @media (max-width: 1000px) {
    gap: 50px;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 700px) {
    padding: 0 30px;
    margin-bottom: 100px;
    gap: 0;
  }
  img {
    width: 100%;
    display: block;
    max-width: 540px;
    object-fit: cover;
    margin-left: auto;
    @media (max-width: 850px) {
      display: none;
    }
  }
  h2 {
    margin-bottom: 50px;
    width: min-content;
    @media (max-width: 700px) {
      margin-bottom: 20px;
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: 25px;
    color: ${({ theme }) => theme.colors.grey[200]};
  }
`;

export const LeadersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 700px);
  margin-bottom: 200px;
  gap: 50px;
  h2 {
    width: min-content;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 700px) {
    margin-bottom: 150px;
  }
  @media (max-width: 700px) {
    padding: 0 30px;
    grid-template-columns: 1fr;
  }
`;
export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 25px;
  justify-items: flex-end;
  @media (max-width: 1200px) {
    gap: 0 15px;
  }
  @media (max-width: 1000px) {
    gap: 0 40px;
  }
  @media (max-width: 850px) {
    gap: 50px 15px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    justify-items: unset;
  }
`;
