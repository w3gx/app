import { createContext, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";

import { useStore } from "src/hooks";
import { lightTheme, darkTheme } from "./themes";

const ThemeContext = createContext({
    theme: "light",
    setTheme: () => {},
    toggleTheme: () => {},
    options: {},
});

export const useTheme = () => useContext(ThemeContext);

export const W3GThemeProvider = ({ children }) => {
    const [theme, setTheme] = useStore("w3g-theme");
    const options = theme === "light" ? lightTheme : darkTheme;
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <ThemeContext.Provider
            value={{ theme, setTheme, toggleTheme, options }}
        >
            <ThemeProvider theme={options}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
