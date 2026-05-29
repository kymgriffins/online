import React, { useState, useEffect } from 'react';

import TypingEffect from '../components/TypingEffect'
import ProjectCard from '../components/ProjectCard'

import jsonData from '../data/ProjectData.json';

function Projects() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(jsonData);
  }, []);

  return (
    <div className='py-5' id={"Projects"}>
      <hr className='mb-5' />

      <TypingEffect className="m-0 mb-4 section-title" tag="h2" typingSpeed={10}>
        Projects
      </TypingEffect>

      <div className='row g-4'>
        {items
          .filter(project => project.show)
          .map((project) => (
            <div
              className='col-12 col-md-6'
              key={project.id}
            >
              <ProjectCard
                data={project}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
