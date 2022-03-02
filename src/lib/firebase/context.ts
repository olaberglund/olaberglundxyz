import { createContext } from "react";

interface userContextInterface {
  username: string | null,
}

export const UserContext = createContext<userContextInterface>({username: null});