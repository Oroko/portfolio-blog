import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { projectsReducer } from "./projectsReducer";

const rootReducer = combineReducers({
  postsReducer,
  projectsReducer
});

export default rootReducer;
