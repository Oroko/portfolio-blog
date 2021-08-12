import React, { useEffect } from 'react' 
import {useSelector, useDispatch} from 'react-redux' 
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
    <>
      <ProjectIndex projects={projects} />
      <ProjectInput />
    </>
  )
}

export default ProjectContainer