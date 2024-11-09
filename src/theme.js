import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e11d48",  // Main primary color
    },
    secondary: {
      main: "#4f46e5",  // Main secondary color
    },
    accent: {
      main: "#8737ff",  // Purple accent color
    },
    background: {
      default: "#070a13",  // Dark background
      paper: "#1e293b",  // Dark paper background
    },
    text: {
      primary: "#f1f5f9",  // Light text color for better contrast
      secondary: "#94a3b8", // Slightly muted text color for secondary text
    },
  },
  typography: {
    fontFamily: ['Noto Sans', 'sans-serif'].join(","),
  },
  shadows: [
    "none",
    "0px 10px 20px rgba(225, 29, 72, 0.5), 0px 6px 6px rgba(225, 29, 72, 0.5), 0px 0px 100px -10px rgba(225, 29, 72, 1)",
    "0px 14px 28px rgba(225, 29, 72, 0.25), 0px 10px 10px rgba(225, 29, 72, 0.22), 0px 0px 120px -10px rgba(225, 29, 72, 1)",
  ],
});

export default theme;