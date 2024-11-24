import React from 'react';

function About() {
  return (
    <section id="about" className="section about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <img 
          src="images/yellove.jpg" 
          alt="Divyadharshini A" 
          className="profile-photo" 
        />
        <div className="about-details">
          <p>
            Hi, I'm <strong>Divyadharshini A</strong>, a passionate software engineer dedicated to creating innovative and impactful solutions. 
            With a strong background in Computer Science and Design, I specialize in full-stack development, UI/UX design, and AR applications. 
            My journey is fueled by a love for learning and an enthusiasm for tackling new challenges, whether it's solving complex coding 
            problems or designing intuitive user interfaces.
          </p>
          <p>
            As a <strong>Computer Society of India</strong> member, I actively engage in tech communities to stay updated with emerging 
            trends and practices. I'm particularly fascinated by areas like Data Structures, Object-Oriented Programming, and crafting 
            seamless UX/UI experiences.
          </p>
          <p>
            Explore my <a href="https://dribbble.com/divyadharshini_arputhasamy" target="_blank" rel="noopener noreferrer">Dribbble profile</a> 
            for a showcase of my UI/UX design work and creative projects.
          </p>
          <p>
            <a href="Divyadharshini A.pdf" target="_blank" className="resume-link">
              View my Resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
