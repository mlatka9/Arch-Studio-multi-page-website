import { ReactComponent as ArrowIcon } from 'assets/icons/arrow-icon.svg';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ label, hasArrow = false }) => {
  return (
    <StyledButton>
      {label ? <span>{label}</span> : null}

      {hasArrow ? <ArrowIcon /> : null}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  hasArrow: PropTypes.bool,
};

export default Button;
