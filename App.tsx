
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Calendar from './components/Calendar';
import Comments from './components/Comments';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <Calendar />
          </div>
          <div className="lg:col-span-2">
            <Comments />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
