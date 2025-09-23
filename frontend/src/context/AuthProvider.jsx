import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (username, token) => {
    setUsername(username);
    setToken(token);
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
  };
  const isAuthenticated = !!token;
  return (
    <AuthContext.Provider value={{ username, token, login , isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
