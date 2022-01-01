import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import Header from 'components/Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from 'styles/GlobalSyles';

import HomePage from './HomePage/HomePage';
import PortfolioPage from './PortfolioPage/PortfolioPage';
import AboutUsPage from './AboutUsPage/AboutUsPage';
import ContactPage from './ContactPage/ContactPage';
import Footer from 'components/Footer/Footer';
import { Content, Wrapper } from './App.styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
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
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
