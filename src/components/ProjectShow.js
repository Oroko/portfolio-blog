import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { getProject } from "../actions/index"; 


const ProjectShow = () =>  {
  const params = useParams()
   const project = useSelector((state) => state.projectsReducer.project);
  const dispatch = useDispatch() 

  useEffect(() => {
    dispatch(getProject(params.id))
  }, [dispatch, params])
  
  return <div>{project && project.title}</div>;
}

export default ProjectShow;
