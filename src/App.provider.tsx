import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { MoodOption, MoodOptionWithTimestamp } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storageKey = 'my-app-data';

type AppData = {
  moods: MoodOptionWithTimestamp[];
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);

    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch {
    return null;
  }
};

const setAppData = async (newData: AppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newData));
  } catch {}
};

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleAddMood: (mood: MoodOption) => void;
  handleRemoveMood: (mood: MoodOptionWithTimestamp) => void;
};

const defaultValue = {
  moodList: [],
  handleAddMood: () => {},
  handleRemoveMood: () => {},
};

const AppContext = createContext<AppContextType>(defaultValue);

export const AppProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleAddMood = useCallback((moodItem: MoodOption) => {
    setMoodList(current => {
      const newMood = { timestamp: Date.now(), moodOption: moodItem };
      const newValue = [...current, newMood];
      setAppData({ moods: newValue });
      return newValue;
    });
  }, []);

  const handleRemoveMood = React.useCallback(
    (mood: MoodOptionWithTimestamp) => {
      setMoodList(current => {
        const newValue = current.filter(
          item => item.timestamp !== mood.timestamp,
        );
        setAppData({ moods: newValue });
        return newValue;
      });
    },
    [],
  );

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAppData();

      if (data) {
        setMoodList(data.moods);
      }
    };
    getDataFromStorage();
  }, []);

  return (
    <AppContext.Provider value={{ moodList, handleAddMood, handleRemoveMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
