import styled from 'styled-components';
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

const Wrapper = styled.div``;
const ImageWrapper = styled.div`
  position: relative;
`;

const HeritageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 110px;
  margin-bottom: 200px;
  @media (max-width: 1000px) {
    gap: 50px;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 700px) {
    padding: 0 30px;
    margin-bottom: 100px;
    gap: 0;
  }
  img {
    display: block;
    /* width: 100%; */
    max-width: 540px;
    object-fit: cover;
    margin-left: auto;
    @media (max-width: 850px) {
      display: none;
    }
  }
  h2 {
    margin-bottom: 50px;
    width: min-content;
    @media (max-width: 700px) {
      margin-bottom: 20px;
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: 25px;
    color: ${({ theme }) => theme.colors.grey[200]};
  }
`;

const LeadersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 700px);
  margin-bottom: 200px;
  gap: 50px;
  h2 {
    width: min-content;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 700px) {
    margin-bottom: 150px;
  }
  @media (max-width: 700px) {
    padding: 0 30px;
    grid-template-columns: 1fr;
  }
`;
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 25px;
  justify-items: flex-end;
  @media (max-width: 1200px) {
    gap: 0 15px;
  }
  @media (max-width: 1000px) {
    gap: 0 40px;
  }
  @media (max-width: 850px) {
    gap: 50px 15px;
  }
  @media (max-width: 700px) {
    /* width: 100%; */
    grid-template-columns: 1fr;
    justify-items: unset;
  }
`;

const AboutUsPage = () => {
  return (
    <Wrapper>
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
            <LeaderCard name={leader.name} position={leader.position} imageUrl={leader.imageUrl} />
          ))}
        </CardsWrapper>
      </LeadersWrapper>
    </Wrapper>
  );
};

export default AboutUsPage;
