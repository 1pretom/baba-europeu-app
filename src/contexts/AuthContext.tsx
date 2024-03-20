import { createContext } from "react";
import { AuthContextDataProps } from "./types";

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);
