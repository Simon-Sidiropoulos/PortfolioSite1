import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I'm a bilingual web developer and graphic designer with a strong foundation in both creative and technical skills. Fluent in Greek and English, I bring a multicultural perspective to my work.</p>
            
            <div className="education">
              <h3>Education</h3>
              <p>High School Diploma with High Grades and Multiple Endorsements</p>
            </div>

            <div className="skills">
              <h3>Skills</h3>
              <div className="skills-group">
                <h4>Languages</h4>
                <div className="tech-icons">
                  <span className="tech-item">Greek (Native)</span>
                  <span className="tech-item">English (Fluent)</span>
                </div>
              </div>

              <div className="skills-group">
                <h4>Design</h4>
                <div className="tech-icons">
                  <span className="tech-item">Graphic Design</span>
                  <span className="tech-item">UI/UX</span>
                </div>
              </div>

              <div className="tech-stack">
                <h4>Technologies</h4>
                <div className="tech-icons">
                  <span className="tech-item">React</span>
                  <span className="tech-item">JavaScript</span>
                  <span className="tech-item">HTML5</span>
                  <span className="tech-item">CSS3</span>
                  <span className="tech-item">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
