let initialState = {};
export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "value":
      return state;

    default:
      return state;
  }
};

export default sidebarReducer;
