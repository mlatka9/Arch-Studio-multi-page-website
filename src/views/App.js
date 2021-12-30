import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import Header from 'components/Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from 'styles/GlobalSyles';

import HomePage from './HomePage/HomePage';
import PortfolioPage from './PortfolioPage/PortfolioPage';
import AboutUsPage from './AboutUsPage/AboutUsPage';
import ContactPage from './ContactPage/ContactPage';
import Footer from 'components/Footer/Footer';

const Content = styled.main`
  padding: 0 165px;
  @media (max-width: 1200px) {
    padding: 0 120px;
  }
  @media (max-width: 850px) {
    padding: 0 100px;
  }
  @media (max-width: 700px) {
    padding: 0;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Content>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
