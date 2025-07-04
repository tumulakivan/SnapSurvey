import { createContext, useContext, useState } from "react";
import { authService } from "../services/authService";
import type { AuthContextTypes } from "../types/AuthContextTypes";

const AuthContext = createContext<AuthContextTypes | null>(null);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loginStatus, setLoginStatus] = useState(false);

  const login = async (username: string, password: string) => {
    await authService.login(username, password);
    setLoginStatus(true);
  };

  const logout = () => {
    authService.logout();
    setLoginStatus(false);
  };

  return (
    <AuthContext.Provider value={{ loginStatus, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
