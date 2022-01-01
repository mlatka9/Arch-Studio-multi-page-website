import { Hero, HeroMobile, HeroTablet } from 'assets/images/contact-images/index';
import HeroView from 'components/HeroView/HeroView';
import Title from 'components/Title/Title';
import { ContactCard, DetailsWrapper, StyledForm, FormWrapper, ContactCardWrapper } from './ContactPage.styles';
import ArrowIcon from 'assets/icons/arrow-icon.png';
import FormField from 'components/FormField/FormField';
import Button from 'components/Button/Button';
import { useState, useRef } from 'react';
import Map from 'components/Map/Map';

const data = {
  mainTitle: 'Contact',
  sectionTitle: 'Tell us about your project',
  content: `We’d love to hear more about your project. Please, leave a message below or give 
  us a call. We have two offices, one in Texas and one in Tennessee. If you find 
  yourself nearby, come say hello!`,
};

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
};

function isEmailValid(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const initialFormValues = [
  { name: 'name', value: '', isError: false, errorMessage: '' },
  { name: 'email', value: '', isError: false, errorMessage: '' },
  { name: 'messgae', value: '', isError: false, errorMessage: '' },
];

const ContactPage = () => {
  const mapRef = useRef(null);
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleOnChange = (e) => {
    setFormValues(
      formValues.map((formValue) => {
        if (formValue.name === e.target.name) {
          return { ...formValue, value: e.target.value };
        }
        return formValue;
      })
    );
  };

  const handleClearForm = () => {
    setFormValues(initialFormValues);
  };

  const handleScollToMap = () => {
    mapRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormValues = formValues.map((formValue) => {
      if (formValue.value.trim().length === 0) {
        return { ...formValue, isError: true, errorMessage: "Can't be empty" };
      }
      if (formValue.name === 'email') {
        if (!isEmailValid(formValue.value)) {
          return { ...formValue, isError: true, errorMessage: 'Not valid email' };
        }
      }
      return { ...formValue, isError: false, errorMessage: '' };
    });
    setFormValues(newFormValues);
    if (newFormValues.every((formValue) => !formValue.isError)) {
      console.log('process sending form');
      handleClearForm();
    }
  };

  return (
    <div>
      <HeroView
        images={{ desktop: Hero, tablet: HeroTablet, mobile: HeroMobile }}
        content={data.content}
        mainTitle={data.mainTitle}
        sectionTitle={data.sectionTitle}
      />
      <DetailsWrapper>
        <Title>Contact Details</Title>
        <ContactCardWrapper>
          <ContactCard>
            <h3>Main Office</h3>
            <p>
              <span>Mail:</span>archone@mail.com
            </p>
            <p>
              <span>Adress:</span>1892 Chenoweth Drive TN
            </p>
            <p>
              <span>Phone:</span>123-456-3451
            </p>
            <button onClick={handleScollToMap}>
              View on Map <img src={ArrowIcon} alt="View on Map"></img>
            </button>
          </ContactCard>
          <ContactCard>
            <h3>Main Office</h3>
            <p>
              <span>Mail:</span>archtwo@mail.com
            </p>
            <p>
              <span>Adress:</span>3399 Wines Lane TX
            </p>
            <p>
              <span>Phone:</span>832-123-4321
            </p>
            <button onClick={handleScollToMap}>
              View on Map <img src={ArrowIcon} alt="View on Map"></img>
            </button>
          </ContactCard>
        </ContactCardWrapper>
      </DetailsWrapper>
      <Map location={location} zoomLevel={17} ref={mapRef} />
      <FormWrapper>
        <Title>Connect with us</Title>
        <StyledForm onSubmit={handleSubmit}>
          <FormField placeholder="Name" data={formValues[0]} handleOnChange={handleOnChange} />
          <FormField placeholder="Email" data={formValues[1]} handleOnChange={handleOnChange} />
          <FormField placeholder="Message" isTextArea data={formValues[2]} handleOnChange={handleOnChange} />
          <Button hasArrow />
        </StyledForm>
      </FormWrapper>
    </div>
  );
};

export default ContactPage;
