import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('Portfolio');

  const projects = [
    // Add your projects here
    // { image: 'path_to_image', title: 'Project1', deployedLink: 'link', githubLink: 'link' },
  ];

  return (
    <div className="App">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {currentSection === 'About Me' && (
        <section>
          <img src="path_to_avatar" alt="Developer Avatar" />
          <p>Short bio about the developer</p>
        </section>
      )}

      {currentSection === 'Portfolio' && (
        <section>
          {projects.map(project => (
            <Project key={project.title} project={project} />
          ))}
        </section>
      )}

      {currentSection === 'Contact' && (
        <section>
          {/* Add your contact form here */}
        </section>
      )}

      {currentSection === 'Resume' && (
        <section>
          <a href="path_to_resume.pdf">Download Resume</a>
          <ul>
            {/* List of proficiencies */}
          </ul>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default App;
