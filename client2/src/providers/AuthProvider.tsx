import { createContext, ReactNode, useState } from "react";
import { User } from "../interface/user";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

interface UserDTO {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (user: UserDTO) => Promise<boolean>;
  logout: () => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const { POST } = useFetch("http://localhost:7891");
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const login = async (userClient: UserDTO): Promise<boolean> => {
    try {
      let endpoint = "auth/login";

      const response = await POST(endpoint, userClient);

      if (!response.ok || !response.foundUser) {
        console.error("Invalid response:", response);
        throw new Error("Invalid response from server");
      }

      setUser(response.foundUser);

      navigate("/");
      return true;
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setError(`Login failed: ${errorMessage}`);
      return false;
    }
  };

  const logout = async (): Promise<boolean> => {
    try {
      await POST("auth/logout");
      setUser(null);
      navigate("/");
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setError(`Logout failed: ${errorMessage}`);
      return false;
    }
  };
  return(
  <AuthContext.Provider value={{ user, login, logout }}>
    {children}
  </AuthContext.Provider>)
}
