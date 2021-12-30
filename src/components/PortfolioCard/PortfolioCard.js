import { ImageFilter, Wrapper } from './PortfolioCard.styles';

const item = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const PortfolioCard = ({ imgageSrc, title, subtitle }) => {
  return (
    <Wrapper variants={item}>
      <picture>
        <source srcSet={imgageSrc.desktop} media="(min-width: 850px)" />
        <source srcSet={imgageSrc.tablet} media="(min-width: 500px)" />
        <img src={imgageSrc.mobile} alt={title} />
      </picture>
      <ImageFilter />
      <h3>{title}</h3>
      <span>{subtitle}</span>
    </Wrapper>
  );
};

export default PortfolioCard;
