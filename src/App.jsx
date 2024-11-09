import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import theme from './theme';
import Activity from './components/Activity';
import Education from './components/Education';

const scrollAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.2 },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="bg-dark text-light">
        <Header />
        <motion.div {...scrollAnimation}>
          <Hero />
        </motion.div>
        <motion.div {...scrollAnimation}>
          <About />
        </motion.div>
        <motion.div {...scrollAnimation}>
          <Education />
        </motion.div>
        <motion.div {...scrollAnimation}>
          <Work />
        </motion.div>
        <motion.div {...scrollAnimation}>
          <Activity />
        </motion.div>
        <motion.div {...scrollAnimation}>
          <Contact />
        </motion.div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;