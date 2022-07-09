import { createContext, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";

import { useStore } from "src/hooks";
import { lightTheme, darkTheme } from "./themes";

const ThemeContext = createContext({ theme: "light", setTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

export const W3GThemeProvider = ({ children }) => {
    const [theme, setTheme] = useStore("w3g-theme");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
