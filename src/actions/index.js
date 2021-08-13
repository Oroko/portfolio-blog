

export const getPosts = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/posts")
      .then((resp) => resp.json())
      .then((posts) =>
        dispatch({
          type: "GET_POSTS",
          payload: posts,
        })
      );
  };
}

export const addPost = (post) => {
  console.log(post)
    return (dispatch) => {
      fetch("http://localhost:3000/api/v1/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(post),
      })
        .then((resp) => resp.json())
        .then((post) =>
          dispatch({ type: "ADD_POST", payload: post })
        );
    };
}

export const getPost = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/posts/${id}`)
      .then((resp) => resp.json())
      .then((post) =>
        dispatch({
          type: "GET_POST",
          payload: post,
        })
      );
  };
};

export const getProjects = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/projects")
      .then((resp) => resp.json())
      .then((projects) =>
        dispatch({
          type: "GET_PROJECTS",
          payload: projects,
        })
      );
  };
};

export const addProject = (project) => {
  console.log(project)
  console.log(project);
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((project) => dispatch({ type: "ADD_PROJECT", payload: project }));
  };
};

export const getProject = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${id}`)
      .then((resp) => resp.json())
      .then((project) =>
        dispatch({
          type: "GET_PROJECT",
          payload: project,
        })
      );
  };
};
