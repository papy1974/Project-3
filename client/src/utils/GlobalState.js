import React, { createContext, useReducer, useContext } from "react";

const UserContext = createContext();
const { Consumer, Provider } = UserContext;

const reducer = (_, action) => {
  switch (action.type) {
  case "login":
    return { user: action.user };
  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
};

const UserProvider = ({ value = {}, ...props }) => {
  const [state, dispatch] = useReducer(reducer, value);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { Consumer, UserProvider, useUserContext };
