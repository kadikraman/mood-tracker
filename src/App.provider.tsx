import React, { createContext, useContext } from 'react';

type AppContextType = {
  greeting: string;
};

const defaultValue = {
  greeting: '',
};

const AppContext = createContext<AppContextType>(defaultValue);

export const AppProvider: React.FC = ({ children }) => {
  return (
    <AppContext.Provider value={{ greeting: 'Hello' }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
