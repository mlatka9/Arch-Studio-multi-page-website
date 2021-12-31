import styled from 'styled-components';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter-icon.svg';
import { ReactComponent as LinkedinIcon } from 'assets/icons/linkedin-icon.svg';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: grid;
  /* width: fit-content; */
  grid-template-rows: auto auto auto 32px;
  img {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    display: block;
    width: 100%;
    /* max-width: 350px; */
    @media (max-width: 700px) {
      /* max-width: max-co; */
    }
  }
  h3,
  p {
    line-height: 25px;
    margin: 0;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.grey[100]};
    margin-top: 25px;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-bottom: 10px;
  }
  div {
    transition: opacity 150ms ease-in-out;
    display: flex;
    align-items: center;
    a {
      margin-right: 20px;
    }
    @media (min-width: 850px) {
      opacity: 0;
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        opacity: 1;
        display: flex;
        background-color: rgba(0, 0, 0, 0.5);
        a {
          display: block;

          path {
            fill: white;
          }
        }
      }
    }
  }
`;

const LeaderCard = ({ name, position, imageUrl }) => {
  return (
    <Wrapper>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{position}</p>
      <div>
        <Link to="#">
          <LinkedinIcon />
        </Link>
        <Link to="#">
          <TwitterIcon />
        </Link>
      </div>
    </Wrapper>
  );
};

export default LeaderCard;
