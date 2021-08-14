
import React from 'react'
import { SimpleGrid, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ProjectIndex({projects}) {
  console.log(projects)
  return (
    <SimpleGrid columns={2} spacing={10}>
      {projects &&
        projects.map((project) => (
          
          <Box
            maxW="sm"
            align="center"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="teal"
          >
            <Link key={project.id} to={`/projectShow/${project.id}`}>
              <Image  src={project.image_url} alt="test project" />
              
            </Link>
            
            <Box
              mt="1"
              fontWeight="semibold"
              as="h1"
              lineHeight="tight"
              isTruncated
            >
              {project.title}
            </Box>
            <Box>{project.description}</Box>
          </Box>
          
        )) }
    </SimpleGrid>
  );
  
}

export default ProjectIndex
