import { createContext, useContext, useState, useEffect } from "react";
import type {ReactNode} from "react";
import { usersService } from "../services/usersService";

interface AuthContextType {
  isAuthenticated: boolean;
  user: string | null; // only has email.
  loading: boolean;
  login: (data: any) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const checkAuth = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setLoading(false);
      return;
    }

    const res = await usersService.me();
    if (res && res.status === 200) {
      setIsAuthenticated(true);
      setUser(res.data.email);
    } else {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (data: any) => {
    const res = await usersService.login(data);
    
    if (res && res.status === 200) {
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      
      await checkAuth();
      return true;
    }
    return false;
  };

  const logout = async () => {
    const refreshToken = localStorage.getItem("refresh_token");
    await usersService.logout({ refresh: refreshToken });

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};