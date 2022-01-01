import styled from 'styled-components';

export const Content = styled.main`
  padding: 0 165px;
  min-height: 1500px;
  @media (max-width: 1200px) {
    padding: 0 120px;
  }
  @media (max-width: 850px) {
    padding: 0 100px;
  }
  @media (max-width: 700px) {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  max-width: 1700px;
  margin: 0 auto;
`;
