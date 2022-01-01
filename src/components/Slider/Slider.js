import { useState } from 'react';
import Button from 'components/Button/Button';
import CarouselButton from 'components/SliderButton/SliderButton';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import { Link } from 'react-router-dom';
import { SliderDetails, SliderImageWrapper, SliderNav, SliderViewWrapper } from './Slider.styles';
import { sliderData } from './sliderData';

const transtionAnimation = { duration: 0.5, times: 'easeInOut' };

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <AnimatePresence exitBeforeEnter>
      <SliderViewWrapper key={currentPage}>
        <SliderImageWrapper>
          <source srcSet={sliderData[currentPage].images.desktop} media="(min-width: 850px)" />
          <source srcSet={sliderData[currentPage].images.tablet} media="(min-width: 700px)" />
          <motion.img
            src={sliderData[currentPage].images.mobile}
            alt={sliderData[currentPage].title}
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 1.07, opacity: 0 }}
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
            <CarouselButton
              key={id}
              label={`0${id + 1}`}
              isSelected={id === currentPage}
              onClick={() => setCurrentPage(id)}
            />
          ))}
        </SliderNav>
      </SliderViewWrapper>
    </AnimatePresence>
  );
};

export default Slider;
