import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Templates from '@/components/Templates';
import Testimonials from '@/components/Testimonials';
import GetStarted from '@/components/GetStarted';
import ResumeBuilder from '@/components/ResumeBuilder';
import Footer from '@/components/Footer';

const Index = () => {
  const [showBuilder, setShowBuilder] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 flex flex-col">
      {!showBuilder ? (
        <>
          <Navigation onStartBuilding={() => setShowBuilder(true)} />
          <Hero onStartBuilding={() => setShowBuilder(true)} />
          <Features />
          <Templates />
          <Testimonials />
          <GetStarted onStartBuilding={() => setShowBuilder(true)} />
          <Footer />
        </>
      ) : (
        <>
          <ResumeBuilder onBack={() => setShowBuilder(false)} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
