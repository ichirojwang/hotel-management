/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState.js";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkModeOn] = useLocalStorageState(
    window.matchMedia("{prefers-color-scheme:dark}").matches,
    "isDarkMode"
  );

  function toggleDarkMode() {
    setIsDarkModeOn((dark) => !dark);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (!context === undefined) throw new Error("DarkModeContext used outside DarkModeProvider");

  return context;
}

export { DarkModeProvider, useDarkMode };
