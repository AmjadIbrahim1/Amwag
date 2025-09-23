import { createContext, useContext } from "react";

export const AuthContext = createContext({
  username: null,
  token: null,
  login: () => {},
  logout: () => {},
  isAuthenticated : false
});

export const useAuth = () => useContext(AuthContext);
