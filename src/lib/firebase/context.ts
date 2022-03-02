import { createContext } from "react";

interface userContextInterface {
  name: string | null;
}

export const UserContext = createContext<userContextInterface>({name: null});