import { motion } from 'framer-motion';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { AuthorityBar } from './sections/AuthorityBar';
import { VideoApresentacao } from './sections/VideoApresentacao';
import { About } from './sections/About';
import { Technology } from './sections/Technology';
import { CasesGallery } from './sections/CasesGallery';
import { ClinicStructure } from './sections/ClinicStructure';
import { Services } from './sections/Services';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieConsent } from './components/CookieConsent';
import './App.css';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white overflow-x-hidden"
    >
      <Navigation />
      <main>
        <Hero />
        <AuthorityBar />
        <VideoApresentacao />
        <About />
        <Technology />
        <CasesGallery />
        <ClinicStructure />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </motion.div>
  );
}

export default App;
