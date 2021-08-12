import { list } from '@chakra-ui/react'
import React from 'react'

function ProjectIndex({projects}) {
  console.log(projects)
  return (
    <div>
      {projects &&
        projects.map((project) => (
          <div key={project.id}>
            <p>{project.title}</p>
            <img src={project.img_url} alt="projectimage" />
          </div>
        ))}
    </div>
  );
}

export default ProjectIndex
