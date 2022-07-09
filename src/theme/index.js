import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./themes";

const ThemeContext = createContext({ theme: "light", setTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

export const W3GThemeProvider = ({ children, variant = "light" }) => {
    const [theme, setTheme] = useState(variant);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
