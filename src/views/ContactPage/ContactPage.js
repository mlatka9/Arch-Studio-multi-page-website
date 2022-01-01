import { Hero, HeroMobile, HeroTablet } from 'assets/images/contact-images/index';
import HeroView from 'components/HeroView/HeroView';
import Title from 'components/Title/Title';
import { ContactCard, DetailsWrapper } from './ContactPage.styles';
import ArrowIcon from 'assets/icons/arrow-icon.png';

const data = {
  mainTitle: 'Contact',
  sectionTitle: 'Tell us about your project',
  content: `We’d love to hear more about your project. Please, leave a message below or give 
  us a call. We have two offices, one in Texas and one in Tennessee. If you find 
  yourself nearby, come say hello!`,
};

const ContactPage = () => {
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
          <button>
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
          <button>
            View on Map <img src={ArrowIcon} alt="View on Map"></img>
          </button>
        </ContactCard>
      </DetailsWrapper>
    </div>
  );
};

export default ContactPage;
