import React, { createContext, useContext, useState, useCallback } from 'react';
import { MoodOption, MoodOptionWithTimestamp } from './types';

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleAddMood: (mood: MoodOption) => void;
};

const defaultValue = {
  moodList: [],
  handleAddMood: () => {},
};

const AppContext = createContext<AppContextType>(defaultValue);

export const AppProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleAddMood = useCallback(newMood => {
    setMoodList(current => [
      ...current,
      { moodOption: newMood, timestamp: Date.now() },
    ]);
  }, []);

  return (
    <AppContext.Provider value={{ moodList, handleAddMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
