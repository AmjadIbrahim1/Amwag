import { createContext, useContext } from "react";

export const AuthContext = createContext({
  username: null,
  token: null,
  login: () => {},
});

export const useAuth = () => useContext(AuthContext);
