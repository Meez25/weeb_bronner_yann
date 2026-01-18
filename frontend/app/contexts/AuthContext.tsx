import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router";
import { login_user } from "~/api/users";

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      // TODO : Who am I ? Call the API
      setUser({ email: "" });
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    await login_user(email, password);
    setUser({ email });
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
    navigate("/connexion");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider");
  }
  return context;
}
