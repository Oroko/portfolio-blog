import React, { useEffect } from 'react' 
import {useSelector, useDispatch} from 'react-redux' 
import ProjectIndex from '../components/ProjectIndex' 
import ProjectInput from '../components/ProjectInput'

const ProjectContainer = () => {
  return (
    <>
      <ProjectIndex />
      <ProjectInput />
    </>
  )
}

export default ProjectContainer