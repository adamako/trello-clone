import React, { createContext, useContext } from "react";
import { AppState } from "../types";

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [
        {
          id: "c0",
          text: "Generate app scaffold",
        },
      ],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [
        {
          id: "c2",
          text: "Learn Typescript",
        },
      ],
    },
    {
      id: "2",
      text: "Done",
      tasks: [
        {
          id: "c3",
          text: "Begin to use static typing",
        },
      ],
    },
  ],
};

interface AppStateContextProps {
  state: AppState;
}
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const useAppState = () => {
  return useContext(AppStateContext);
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  );
};
