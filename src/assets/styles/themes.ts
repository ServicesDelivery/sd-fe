import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: '#454545',
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            paper: '#EFEFEF',
            default: '#FFFFFF',
        },
        primary: {
            main: '#064B93',
            light: '#007DB8',
        },
    },
});

export const getActiveTheme = (isDark: boolean = false) => isDark ? darkTheme : lightTheme;