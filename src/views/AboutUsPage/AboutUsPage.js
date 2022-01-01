import Title from 'components/Title/Title';
import {
  Hero,
  HeroTablet,
  HeroMobile,
  Heritage,
  AvatarJake,
  AvatarJackson,
  AvatarThompson,
  AvatarMaria,
} from 'assets/images/about-images/index';
import HeroView from 'components/HeroView/HeroView';
import LeaderCard from 'components/LeaderCard/LeaderCard';
import { CardsWrapper, HeritageWrapper, ImageWrapper, LeadersWrapper } from './AboutUsPage.styles';

const heroData = {
  mainTitle: 'About',
  sectionTitle: 'Your team of professionals',
  content:
    'Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.',
};

const leadersData = [
  { name: 'Jake Richards', position: 'Chief Architect', imageUrl: AvatarJake },
  { name: 'Thompson Smith', position: 'Head of Finance', imageUrl: AvatarThompson },
  { name: 'Jackson Rourke', position: 'Lead Designer', imageUrl: AvatarJackson },
  { name: 'Maria Simpson', position: 'Senior Architect', imageUrl: AvatarMaria },
];

const AboutUsPage = () => {
  return (
    <div>
      <HeroView
        images={{ desktop: Hero, tablet: HeroTablet, mobile: HeroMobile }}
        mainTitle={heroData.mainTitle}
        sectionTitle={heroData.sectionTitle}
        content={heroData.content}
      />

      <HeritageWrapper>
        <div>
          <Title>Our Heritage</Title>
          <p>
            Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to
            detail turned Arch into one of the most sought after boutique firms in the country.
          </p>
          <p>
            Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony
            with their surroundings. We consider every detail from every surrounding element to inform our designs.
          </p>
          <p>Our small team of world-class professionals provides input on every project.</p>
        </div>

        <ImageWrapper>
          <picture>
            <img src={Heritage} alt="about us" />
          </picture>
        </ImageWrapper>
      </HeritageWrapper>
      <LeadersWrapper>
        <Title>The Leaders</Title>
        <CardsWrapper>
          {leadersData.map((leader) => (
            <LeaderCard key={leader.name} name={leader.name} position={leader.position} imageUrl={leader.imageUrl} />
          ))}
        </CardsWrapper>
      </LeadersWrapper>
    </div>
  );
};

export default AboutUsPage;
