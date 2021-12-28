import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 25px 30px;
  background-color: ${({ theme }) => theme.colors.grey[100]};
  color: ${({ theme }) => theme.colors.grey[500]};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: none;
  transition: background-color 100ms ease-in-out;
  display: flex;
  gap: 30px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[200]};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.grey[400]};
  }
  span {
    display: block;
    height: 20px;
  }
`;
