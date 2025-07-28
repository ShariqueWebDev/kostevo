"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

type UserContextProviderProps = {
  children: ReactNode;
};

interface AppContextTypeProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContexts = createContext<
  AppContextTypeProps | undefined
>(undefined);

const AppContextProvider = ({
  children,
}: UserContextProviderProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <AppContexts.Provider value={{ inputValue, setInputValue }}>
      {children}
    </AppContexts.Provider>
  );
};

// export const useAppContext = () => {
//   const context = useContext(App_Context);
//   if (!context) {
//     throw new Error("useAppContext must be used within an AppContextProvider");
//   }
//   return context;
// };

export default AppContextProvider;
