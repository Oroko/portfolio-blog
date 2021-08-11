//import axios from 'axios'
//const API_URL = "http://localhost:3000/api/v1";

// export const getPosts = () => {
//   const request = axios.get(`${API_URL}/posts`)
//   return (dispatch) => {
//     request.then(({ data }) => {
//       dispatch({type: 'GET_POSTS', payload: data })
//     })
//   }
// }

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