import React, { useState } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import ResponsiveAppBar from "./util/NavBar";
import { ThemeContext } from "./contexts/theme.context";
import Layout from "./util/layout/Layout";
import "./App.css";

export const App = () => {
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const getDefaultTheme = (): string => {
    const browserDefault = isBrowserDefaultDark() ? "light" : "dark";
    return browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout>
        <div className={`App ${theme}`}>
          <ResponsiveAppBar />
          <AppRoutes />
        </div>
      </Layout>
    </ThemeContext.Provider>
  );
};
