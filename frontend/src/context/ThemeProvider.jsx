import React, { createContext, useEffect } from "react";

export const ThemeContext = createContext();

const defaultTheme = "light";
const darkTheme = "dark";

const ThemeProvider = ({children}) => {
  const toggleTheme = () => {
    const oldTheme = getTheme();
    const newTheme = oldTheme === defaultTheme ? darkTheme : defaultTheme;

    updateTheme(newTheme, oldTheme);
  };

  useEffect(() => {
    const theme = getTheme();
    if (!theme) updateTheme(defaultTheme);
    else updateTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
const getTheme = () => localStorage.getItem("theme");

const updateTheme = (theme, themeToRemove) => {
  if (themeToRemove) document.documentElement.classList.remove(themeToRemove);

  document.documentElement.classList.add(theme);
  localStorage.setItem("theme", theme);
};
export default ThemeProvider;
