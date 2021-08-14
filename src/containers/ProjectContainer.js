import React, { useEffect } from 'react' 
import {useSelector, useDispatch} from 'react-redux' 
import { Box } from '@chakra-ui/react'
import ProjectIndex from '../components/ProjectIndex' 
import ProjectInput from '../components/ProjectInput'
import { getProjects } from '../actions/index'

const ProjectContainer = () => {
  const projects = useSelector(state => state.projectsReducer.projects)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjects())
  },[dispatch])
  return (
    <Box maxWidth="960px" mx="auto" mt="20px">
      <ProjectInput />
      <ProjectIndex projects={projects} />
    </Box>
  );
}

export default ProjectContainer