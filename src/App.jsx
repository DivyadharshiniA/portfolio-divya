import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SoftSkills from './components/SoftSkills'; // Soft Skills Section
import Organizations from './components/Organizations'; // Organizations Section
import Achievements from './components/Achievements'; // Achievements Section
import Interests from './components/Interests'; // Interests Section
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Education />
        <Skills />
        <SoftSkills />
        <Projects /> {/* Added SoftSkills */}
        <Organizations /> {/* Added Organizations */}
        <Achievements /> {/* Added Achievements */}
        <Interests /> {/* Added Interests */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
