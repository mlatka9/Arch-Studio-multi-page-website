import { useState } from 'react';
import * as images from 'assets/images/home-images/index';
import Button from 'components/Button/Button';
import CarouselButton from 'components/CarouselButton/CarouselButton';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import { Link } from 'react-router-dom';
import { SliderDetails, SliderImageWrapper, SliderNav, SliderViewWrapper } from './Slider.styles';

const sliderData = [
  {
    title: 'Project Paramour',
    content:
      'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
    images: {
      desktop: images.Image1,
      tablet: images.Image1Tablet,
      mobile: images.Image1Mobile,
    },
  },
  {
    title: 'Seraph Station',
    content:
      'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
    images: {
      desktop: images.Image2,
      tablet: images.Image2Tablet,
      mobile: images.Image2Mobile,
    },
  },
  {
    title: 'Federal II Tower',
    content:
      'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
    images: {
      desktop: images.Image3,
      tablet: images.Image3Tablet,
      mobile: images.Image3Mobile,
    },
  },
  {
    title: 'Trinity Bank Tower',
    content:
      'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
    images: {
      desktop: images.Image4,
      tablet: images.Image4Tablet,
      mobile: images.Image4Mobile,
    },
  },
];

const transtionAnimation = { duration: 0.5, times: 'easeInOut' };

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <AnimatePresence exitBeforeEnter>
      <SliderViewWrapper key={currentPage}>
        <SliderImageWrapper>
          <source srcSet={sliderData[currentPage].images.desktop} media="(min-width: 850px)" />
          <source srcSet={sliderData[currentPage].images.tablet} media="(min-width: 500px)" />
          <motion.img
            src={sliderData[currentPage].images.mobile}
            alt={sliderData[currentPage].title}
            animate={{ scale: 1 }}
            initial={{ scale: 1.05 }}
            transition={transtionAnimation}
          />
        </SliderImageWrapper>
        <SliderDetails>
          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={transtionAnimation}
          >
            {sliderData[currentPage].title}
          </motion.h2>
          <motion.p
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            transition={transtionAnimation}
          >
            {sliderData[currentPage].content}
          </motion.p>
          <Link to="/portfolio">
            <Button label="See Our Portfolio" hasArrow={true} />
          </Link>
        </SliderDetails>
        <SliderNav>
          {sliderData.map((_, id) => (
            <CarouselButton label={`0${id + 1}`} isSelected={id === currentPage} onClick={() => setCurrentPage(id)} />
          ))}
        </SliderNav>
      </SliderViewWrapper>
    </AnimatePresence>
  );
};

export default Slider;
