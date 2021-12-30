import PropTypes from 'prop-types';
import { CarouselStyledButton } from './CarouselButton.styles';

const CarouselButton = ({ label, isSelected = false, onClick = () => {} }) => {
  return (
    <CarouselStyledButton isSelected={isSelected} onClick={onClick}>
      <span>{label}</span>
    </CarouselStyledButton>
  );
};

CarouselButton.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CarouselButton;
