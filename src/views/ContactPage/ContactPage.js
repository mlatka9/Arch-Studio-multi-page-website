import { Hero, HeroMobile, HeroTablet } from 'assets/images/contact-images/index';
import HeroView from 'components/HeroView/HeroView';

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
    </div>
  );
};

export default ContactPage;
