'use strict';
import { useEffect, useState } from "react";

// to store a local key-value pair
const useLocalStorage = (key, value) => {
  const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
  });
  const setValue = (value) => {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
}

const enableDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme');

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;
    enabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled]);

  return [enabled, setEnabled];
}

export default enableDarkMode;