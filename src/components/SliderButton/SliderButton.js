import PropTypes from 'prop-types';
import { StyledSliderButton } from './SliderButton.styles';

const SliderButton = ({ label, isSelected = false, onClick = () => {} }) => {
  return (
    <StyledSliderButton isSelected={isSelected} onClick={onClick}>
      <span>{label}</span>
    </StyledSliderButton>
  );
};

SliderButton.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SliderButton;
