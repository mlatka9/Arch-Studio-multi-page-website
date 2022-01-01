import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 200px;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    margin-bottom: 100px;
    padding: 0 30px;
  }
  div {
    margin-left: 30px;
    @media (max-width: 1100px) {
      margin: 30px 0;
    }
  }
  h2 {
    width: min-content;
    @media (max-width: 1100px) {
      width: unset;
    }
    @media (max-width: 700px) {
    }
  }
`;
export const ContactCard = styled.div`
  color: ${({ theme }) => theme.colors.grey[200]};
  font-size: ${({ theme }) => theme.fontSize.s};
  display: grid;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  p {
    margin: 8px 0;
  }
  span {
    margin-right: 5px;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: bold;
    margin-bottom: 20px;
  }
  button {
    border: none;
    background-color: transparent;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.grey[100]};
    font-weight: bold;
    padding: 0;
    display: flex;
    align-items: center;
    margin-top: 40px;
    cursor: pointer;
    @media (max-width: 1100px) {
      grid-row: 1 / 4;
      grid-column: 2 / 3;
      justify-self: flex-end;
    }
    @media (max-width: 700px) {
      grid-row: unset;
      grid-column: unset;
      justify-self: unset;
    }

    img {
      margin-left: 15px;
    }
  }
`;
