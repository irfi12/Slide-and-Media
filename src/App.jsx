import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-[#efeee7] min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
