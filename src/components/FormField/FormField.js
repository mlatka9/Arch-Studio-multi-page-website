import PropTypes from 'prop-types';
import { Wrapper, StyledInput } from './FormField.styles';

const FormField = ({ placeholder, isTextArea = false, isError = false }) => {
  return (
    <Wrapper isTextArea={isTextArea}>
      <StyledInput
        isTextArea={isTextArea}
        isError={isError}
        placeholder={placeholder}
        as={isTextArea ? 'textarea' : 'input'}
      ></StyledInput>
      {isError ? <span>Can't be empty</span> : null}
    </Wrapper>
  );
};

FormField.propTypes = {
  placeholder: PropTypes.string,
  isTextArea: PropTypes.bool,
  isError: PropTypes.bool,
};

export default FormField;
