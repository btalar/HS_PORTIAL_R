import { useState } from 'react';

type LocalStorage<T> = Readonly<[T, (value: T | ((val: T) => T)) => void]>

export const useLocalStorage = <T>(key: string, initialValue: T): LocalStorage<T> => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    /* istanbul ignore next */
    if (typeof window === 'undefined') return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value: T | ((val: T) => T)): void => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      /* istanbul ignore next */
      if (typeof window !== 'undefined') window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  return [storedValue, setValue] as const;
};
