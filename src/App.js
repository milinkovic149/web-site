import './App.css';
import { Navbar } from './sections/Navbar';
import { HeroSection } from './sections/HeroSection';
import { HowItWorks } from './sections/HowItWorks';
import { Analytics } from './sections/Analytics';
import { Feedback } from './sections/Feedback';
import { Faq } from './sections/Faq';
import { Download } from './sections/Download';
import { Footer } from './sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Analytics />
      <Feedback />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}

export default App;
