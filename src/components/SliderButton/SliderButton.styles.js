import styled from 'styled-components';
import { StyledButton } from 'components/Button/Button.styles';

export const StyledSliderButton = styled(StyledButton)`
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.colors.grey[100] : theme.colors.white)};
  color: ${({ theme, isSelected }) => (isSelected ? theme.colors.white : theme.colors.grey[300])};

  &:hover {
    background-color: ${({ theme, isSelected }) => (isSelected ? theme.colors.grey[100] : theme.colors.grey[500])};
    color: ${({ theme, isSelected }) => (isSelected ? theme.colors.white : theme.colors.grey[300])};
  }
  span {
    display: block;
    height: 20px;
  }
`;
