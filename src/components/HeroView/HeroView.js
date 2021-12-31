import { DetailsWrapper, FullImageFilter, HeroWrapper, PictureWrapper } from './HeroView.styles';
import Title from 'components/Title/Title';
import { motion } from 'framer-motion/dist/framer-motion';

const transtionAnimation = { duration: 0.5, times: 'easeInOut' };

const HeroView = ({ images: { desktop, tablet, mobile }, mainTitle, sectionTitle, content }) => {
  return (
    <HeroWrapper>
      <PictureWrapper>
        <picture>
          <source srcSet={desktop} media="(min-width: 850px)" />
          <source srcSet={tablet} media="(min-width: 700px)" />
          <motion.img
            src={mobile}
            alt="about us"
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 1.07 }}
            transition={transtionAnimation}
          />
        </picture>
        <FullImageFilter />
      </PictureWrapper>
      <Title isBig as="h1">
        {mainTitle}
      </Title>
      <DetailsWrapper>
        <Title>{sectionTitle}</Title>
        <p>{content}</p>
      </DetailsWrapper>
    </HeroWrapper>
  );
};

export default HeroView;
