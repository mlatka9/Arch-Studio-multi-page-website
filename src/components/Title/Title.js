import styled from 'styled-components';

const Title = styled.h2`
  font-weight: bold;
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.xxl : theme.fontSize.l)};
  letter-spacing: ${({ isBig }) => (isBig ? '5px' : '-2px')};
  color: ${({ theme, isBig }) => (isBig ? theme.colors.grey[500] : theme.colors.grey[100])};
  margin: 0;
  line-height: ${({ isBig }) => (isBig ? '200px' : '56px')};
  @media (max-width: 700px) {
    font-size: ${({ isBig }) => (isBig ? '120px' : '40px')};
  }
`;

export default Title;
