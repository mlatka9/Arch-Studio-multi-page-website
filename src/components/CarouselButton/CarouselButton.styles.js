import styled from 'styled-components';
import { StyledButton } from 'components/Button/Button.styles';

export const CarouselStyledButton = styled(StyledButton)`
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.colors.grey[100] : theme.colors.grey[600])};
  color: ${({ theme, isSelected }) => (isSelected ? theme.colors.grey[600] : theme.colors.grey[300])};

  &:hover {
    background-color: ${({ theme, isSelected }) => (isSelected ? theme.colors.grey[100] : theme.colors.grey[500])};
    color: ${({ theme, isSelected }) => (isSelected ? theme.colors.grey[600] : theme.colors.grey[300])};
  }
  span {
    display: block;
    height: 20px;
  }
`;
