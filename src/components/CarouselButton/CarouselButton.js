import PropTypes from 'prop-types';
import { CarouselStyledButton } from './CarouselButton.styles';

const CarouselButton = ({ label, isSelected = false }) => {
  return (
    <CarouselStyledButton isSelected={isSelected}>
      <span>{label}</span>
    </CarouselStyledButton>
  );
};

CarouselButton.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

export default CarouselButton;
