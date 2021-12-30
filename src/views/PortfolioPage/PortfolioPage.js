import portfolioData from './portfolio-data';
import PortfolioCard from 'components/PortfolioCard/PortfolioCard';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Wrapper } from './PortfolioPage.styles';

const container = {
  show: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
};

const PortfolioPage = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Wrapper variants={container} initial="hidden" animate="show">
      {portfolioData.map((item) => (
        <PortfolioCard key={item.id} imgageSrc={item.image} title={item.title} subtitle={item.date} />
      ))}
    </Wrapper>
  );
};

export default PortfolioPage;
