import PropTypes from 'prop-types';
import { Wrapper, StyledInput } from './FormField.styles';

const FormField = ({
  placeholder,
  isTextArea = false,
  data: { name, value, isError, errorMessage },
  handleOnChange,
}) => {
  return (
    <Wrapper isTextArea={isTextArea}>
      <StyledInput
        isTextArea={isTextArea}
        isError={isError}
        placeholder={placeholder}
        as={isTextArea ? 'textarea' : 'input'}
        value={value}
        onChange={handleOnChange}
        name={name}
      />
      {isError ? <span>{errorMessage}</span> : null}
    </Wrapper>
  );
};

FormField.propTypes = {
  placeholder: PropTypes.string,
  isTextArea: PropTypes.bool,
  isError: PropTypes.bool,
};

export default FormField;
