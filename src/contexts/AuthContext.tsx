import { createContext, useState } from "react";
import { AuthContextDataProps, AuthContextProviderProps } from "./types";

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState({
    id: "1",
    name: "wash",
    email: "wash@gmail.com",
    avatar: "wash.png",
  });

  const signIn = (email:string, password:string) => {
    setUser({ name: "", email, id: "", avatar: "" });
  };

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
