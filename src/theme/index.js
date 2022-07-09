import { createContext, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";

import { useStore } from "src/hooks";
import { lightTheme, darkTheme } from "./themes";

const ThemeContext = createContext({
    theme: "light",
    setTheme: () => {},
    options: {},
});

export const useTheme = () => useContext(ThemeContext);

export const W3GThemeProvider = ({ children }) => {
    const [theme, setTheme] = useStore("w3g-theme");
    const options = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ theme, setTheme, options }}>
            <ThemeProvider theme={options}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
