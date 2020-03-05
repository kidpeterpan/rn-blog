import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  // Context
  const Context = React.createContext();
  // Provider
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions = {};
    // actions = {  addBlogPost = dispatch => }
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider};
};
