import { ReactComponent as ArrowIcon } from 'assets/icons/arrow-icon.svg';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ label, hasArrow = false }) => {
  return (
    <StyledButton>
      <span>{label}</span>
      {hasArrow ? <ArrowIcon /> : null}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  hasArrow: PropTypes.bool,
};

export default Button;
