import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('username'));

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('username', newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}