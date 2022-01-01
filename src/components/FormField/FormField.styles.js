import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  /* max-width: 730px; */
  min-height: ${({ isTextArea }) => (isTextArea ? '80px' : '50px')};
  max-height: 400px;
  position: relative;
  span {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.red[100]};
    font-weight: bold;
    letter-spacing: 0.2px;
    position: absolute;
    right: 16px;
    bottom: 16px;
  }
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  min-height: ${({ isTextArea }) => (isTextArea ? '80px' : '50px')};
  max-height: 400px;
  border: none;
  outline: none;
  padding: 0 0 20px 30px;
  box-shadow: 0 1px 0 ${({ theme, isError }) => (isError ? theme.colors.red[100] : theme.colors.grey[400])};
  font-weight: bold;
  font-family: 'Spartan', sans-serif;
  color: ${({ theme }) => theme.colors.grey[100]};
  letter-spacing: 0.4px;
  resize: vertical;
  overflow: hidden;
  font-size: 20px;
  &:focus {
    box-shadow: 0 2px 0 ${({ theme }) => theme.colors.grey[100]};
  }
  &::placeholder {
    font-weight: bold;
    color: ${({ theme, isError }) => (isError ? theme.colors.red[100] : theme.colors.grey[400])};
    opacity: ${({ isError }) => (isError ? '0.5' : '1')};
    letter-spacing: 0.4px;
  }
`;


