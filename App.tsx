import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import SourcingService from './components/SourcingService';
import Calendar from './components/Calendar';
import Comments from './components/Comments';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <Header />
      <main>
        <Hero />
        <SourcingService />
        <Services />
        <section id="info-section" className="py-12 md:py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <Calendar />
              <Comments />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;