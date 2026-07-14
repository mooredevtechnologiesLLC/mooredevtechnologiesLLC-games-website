import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Games from './components/Games/Games';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import SubmarineReefPilotPage from './pages/SubmarineReefPilot';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Games />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/submarine-reef-pilot" element={<SubmarineReefPilotPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}
