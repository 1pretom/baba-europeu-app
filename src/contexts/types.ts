import { UserDTO } from "@dtos/UserDTO";
import { ReactNode } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
};

export type AuthContextProviderProps = {
  children: ReactNode;
};
