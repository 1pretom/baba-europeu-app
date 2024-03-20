import { createContext } from "react";
import { AuthContextDataProps, AuthContextProviderProps } from "./types";

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: "1",
          name: "wash",
          email: "wash@gmail.com",
          avatar: "wash.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
