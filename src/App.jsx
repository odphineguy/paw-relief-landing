import { Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Features from '@/pages/Features';
import Screenshots from '@/pages/Screenshots';
import HelpCenter from '@/pages/HelpCenter';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Support from '@/pages/Support';
import ScrollToAnchor from '@/components/ScrollToAnchor';
import DownloadSection from '@/components/DownloadSection';
import StatsSection from '@/components/StatsSection';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';

function LandingPage() {
  return (
    <>
      <ScrollToAnchor />
      <Home />
      <StatsSection />
      <Features />
      <Screenshots />
      <Pricing />
      <Testimonials />
      <HelpCenter />
      <DownloadSection />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
