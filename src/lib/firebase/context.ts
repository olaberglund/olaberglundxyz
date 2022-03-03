import { User } from "firebase/auth";
import { createContext } from "react";

interface userContextInterface {
  username: string | null,
  user: User | null | undefined,
  loading: boolean 
}

export const UserContext = createContext<userContextInterface>({username: null, user: null, loading: false});