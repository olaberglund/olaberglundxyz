import { User } from "firebase/auth";
import { createContext } from "react";

interface userContextInterface {
  user: User | null | undefined,
  loading: boolean 
}

export const UserContext = createContext<userContextInterface>({ user: null, loading: false});