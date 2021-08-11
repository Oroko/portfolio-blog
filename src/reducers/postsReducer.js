//import {getPosts} from '../actions/index' 

const initial_state = {posts: []}

export const postsReducer = (state = initial_state, action) => {
  switch(action.type){
    case 'GET_POSTS': 
      return { ...state, posts: action.payload };
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    default: 
    return state
  }
}

