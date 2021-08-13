
import React from 'react'
import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ProjectIndex({projects}) {
  console.log(projects)
  return (
    <SimpleGrid>
      {projects &&
        projects.map((project) => (
          <Link key={project.id} to={`/projectShow/${project.id}`}>
            <p>{project.title}</p>
            <img src={project.img_url} alt="projectimage" />
          </Link>
        ))}
    </SimpleGrid>
  );
}

export default ProjectIndex
