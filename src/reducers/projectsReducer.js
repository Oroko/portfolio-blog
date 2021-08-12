const initial_state = { projects: [] };

export const projectsReducer = (state = initial_state, actions) => {
  switch (actions.type) {
    case "GET_PROJECTS":
      return {
        ...state,
        projects: actions.payload,
      };
      default:
        return state
  }
};
