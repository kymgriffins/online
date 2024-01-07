import React, { useState, useEffect } from 'react';

import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

import jsonData from '../data/ProjectData.json';


function Projects() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Set the items state with the imported JSON data
    setItems(jsonData);
  }, []);

  return (
    <Section title={"Projects"} id={"Projects"}>
      <div className='row card-section'>
        {items
          // Filter out projects where 'show' is false
          .filter(project => project.show)
          .map((project, index) => (
            <div
              className='col-12 px-2'
              key={project.id}
            >
              <ProjectCard
                data={project}
              />
            </div>
          ))}
      </div>
    </Section>

  );
}

export default Projects;  