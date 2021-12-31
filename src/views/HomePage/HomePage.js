import Slider from 'components/Slider/Slider';
import welcomeImage from 'assets/images/home-images/desktop/image-welcome.jpg';

import { SliderImageWrapper, SliderDetails } from 'components/Slider/Slider.styles';
import { Hero, HeroTablet, HeroMobile } from 'assets/images/home-images/index';

import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import { HeroViewWrapper, WelcomeWrapper, FeaturedViewWrapper, FeaturedCardsWrapper } from './HomePage.styles';
import PortfolioCard from 'components/PortfolioCard/PortfolioCard';
import portfolioData from 'views/PortfolioPage/portfolio-data';

const featuredPortfolioCards = [4, 6, 5];

const HomePage = () => {
  return (
    <>
      <Slider />
      <WelcomeWrapper>
        <h1>Welcome</h1>
        <div>
          <h2>Welcome to Arch Studio</h2>
          <p>
            We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled
            individuals combined with our large network put us in a strong position to deliver exceptional results.
          </p>
          <p>
            Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we
            create spaces that inspire and delight.
          </p>
          <p>
            We work closely with our clients so that we understand the intricacies of each project. This allows us to
            work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
          </p>
        </div>
        <img src={welcomeImage} alt="Arch studio"></img>
      </WelcomeWrapper>
      <HeroViewWrapper>
        <SliderImageWrapper>
          <source srcSet={Hero} media="(min-width: 850px)" />
          <source srcSet={HeroTablet} media="(min-width: 700px)" />
          <img src={HeroMobile} alt="Small team, big ideas" />
        </SliderImageWrapper>
        <SliderDetails>
          <h2>Small team, big ideas</h2>
          <Link to="/about">
            <Button label="About us" hasArrow />
          </Link>
        </SliderDetails>
      </HeroViewWrapper>
      <FeaturedViewWrapper>
        <div>
          <h2>Featured</h2>
          <Link to="/portfolio">
            <Button label="See All" hasArrow />
          </Link>
        </div>
        <FeaturedCardsWrapper>
          {portfolioData
            .filter((item) => featuredPortfolioCards.includes(item.id))
            .map((item) => (
              <Link to="/portfolio">
                <PortfolioCard key={item.id} imgageSrc={item.image} title={item.title} subtitle="View All Projekt" />
              </Link>
            ))}
          <Link to="portfolio">
            <Button label="See All" hasArrow />
          </Link>
        </FeaturedCardsWrapper>
      </FeaturedViewWrapper>
    </>
  );
};

export default HomePage;
