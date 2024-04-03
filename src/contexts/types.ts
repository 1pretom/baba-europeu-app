import { UserDTO } from "@dtos/UserDTO";
import { ReactNode } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => void;
};

export type AuthContextProviderProps = {
  children: ReactNode;
};
