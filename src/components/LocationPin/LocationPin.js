import PinIcon from 'assets/icons/pin-icon.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  transform: translate(-50%, -100%);
  width: 44px;
  img {
    width: 100%;
    display: block;
    margin: 0;
  }
`;

const LocationPin = ({ text }) => (
  <Wrapper>
    <img src={PinIcon} alt={text} />
  </Wrapper>
);

export default LocationPin;
