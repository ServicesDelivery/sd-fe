import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: '#1A2027',
        }
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

export const getActiveTheme = (isDark: boolean = false) => isDark ? darkTheme : lightTheme;