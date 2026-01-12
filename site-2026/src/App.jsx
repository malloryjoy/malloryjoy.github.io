
import React from 'react';
import './App.css';
import './index.css';
import Welcome from './components/Welcome';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects.jsx';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <CTA />
      <Footer />
    </>
  )
}

export default App
