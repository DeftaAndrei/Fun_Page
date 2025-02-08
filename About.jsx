import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [isFlashing, setIsFlashing] = useState(false);
  const [hasNeonEffect, setHasNeonEffect] = useState(false);

  const createFlash = () => {
    setIsFlashing(true);
    setTimeout(() => {
      setIsFlashing(false);
    }, 2000);
  };

  const toggleNeonEffect = () => {
    setHasNeonEffect(prev => !prev);
  };

  return (
    <>
      <div className={`flash-overlay ${isFlashing ? 'flash-active' : ''}`}></div>
      <div className="top-nav">
        <div className="stars"></div>
        <div className="navigation-buttons">
          <a href="Fun_Page" className="nav-button">Home</a>
          <a href="About" className="nav-button">About</a>
          <a href="Skills" className="nav-button">Skills</a>
          <a href="Contact" className="nav-button">Contact</a>
        </div>
      </div>
      
      <div className="content">
        <div className="about-section">
          <h1 onClick={createFlash}>About Me</h1>
          <div id="text-content" className={hasNeonEffect ? 'text-background' : ''}>
            <p className={hasNeonEffect ? 'neon-text' : ''}>
              Hello! I am passionate about technology and innovation. With extensive experience in automation and control systems, I enjoy transforming complex ideas into practical solutions.
            </p>
            <p className={hasNeonEffect ? 'neon-text' : ''}>
              My specialization includes PLC programming, SCADA systems development, and implementation of industrial automation solutions. I am always looking for new challenges and learning opportunities.
            </p>
            <p className={hasNeonEffect ? 'neon-text' : ''}>
              Outside of my professional activity, I am passionate about technology, complex systems, web applications, and database management. I enjoy creating both web and desktop applications, and I aspire to develop for iOS and Android platforms in the future. I have a strong interest in problem-solving and engaging in technical discussions. I'm also an avid reader, always eager to learn about various subjects and expand my knowledge base.
            </p>
            <p className={hasNeonEffect ? 'neon-text' : ''}>
              I am familiar with working with Apache, using the terminal with sudo commands, and I am currently exploring vulnerabilities with Kali Linux, which I find particularly interesting in terms of testing and penetration. Before creating a secure product, I invest significant time in researching security aspects. At present, I am also working on setting up my personal server, further enhancing my knowledge and skills in this area.
            </p>
          </div>
          <button onClick={toggleNeonEffect}>Toggle Neon Effect</button>
        </div>
      </div>
    </>
  );
};

export default About;
